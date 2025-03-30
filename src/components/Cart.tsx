import {Card, CardBody, Image, Button} from "@heroui/react";
// import ItemList from "../../public/Items"
import EmptyCartComponent from "./empty-cart";
import axios from "axios";
import FormComponent from "./Form";
import { useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../features/store";
import {resetCustomerDetails, setVariable,resetVariable,increaseQuantity, decreaseQuantity, removeItem, clearCart } from "../features/variableSlice";
 import { useNavigate } from "react-router-dom";

interface address {
  fullName: string;
  phone: string;
  email:string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
type Item = {
  img:string;
  key: number;
  title: string;
  price: number;
  qty: number;
};
function CartComponent(){

 
  const navigate = useNavigate();
  const [orderId,setOrderId]=useState(null)
 
  const CustAddress = useSelector((state: RootState) => state.variable.CustAddress);
const cartItemRedux = useSelector((state: RootState) => state.variable.items);
const dispatch = useDispatch();
const totalPriceRedux = cartItemRedux.reduce((total: number, item: { price: number; qty: number; }) => total + item.price * item.qty, 0);
    //removing img property from item as its not required to be stored in database
    let dbItemData = cartItemRedux.map(({ img, ...rest }:Item) => rest);
  console.log(dbItemData)
    function selectedProduct(_item: { key: number; title: string; img: string; price: string; }){
      navigate(`/product/${_item.title}`)
      sessionStorage.setItem("data",JSON.stringify(_item))
    }

    function incrementCount(item:Item) {
      dispatch(increaseQuantity(item.key))
      dispatch(setVariable())
    }
    function decrementCount(item:Item) {
      dispatch(decreaseQuantity(item.key))
      dispatch(setVariable())
    }
    const loadRazorpayScript = () => {
      return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
      });
    };

    async function custDetails(res: any,address:address){
      // let address=JSON.stringify(sessionStorage.getItem("custData"))
      return await axios.post(`${import.meta.env.VITE_SERVER_API}/api/customer-data`, {
        custDetails: address,
        paymentDetails: res,
        itemDetails:dbItemData,
        amount:totalPriceRedux
    });
    }

    async function sendMail(res: any,address:address){
      
      return await axios.post(`${import.meta.env.VITE_SERVER_API}/order-details`, {
        custDetails: address,
        paymentDetails: res,
        itemDetails:dbItemData,
        amount:totalPriceRedux
    });
    }

    const handlePayment = async () => {
     
      const res = await loadRazorpayScript();
    
      if (!res) {
          alert("Failed to load Razorpay SDK. Please check your connection.");
          return;
      }
    
      // Call the backend to create an order
      const { data: order } = await axios.post(`${import.meta.env.VITE_SERVER_API}/create-order`, {
          amount: totalPriceRedux, // Example amount in INR
          currency: "INR",
      });
   
      const options = {
          key: import.meta.env.REACT_APP_RAZORPAY_KEY_ID, // Your publishable key from Razorpay Dashboard
          amount: order.amount,
          currency: order.currency,
          name: "AANGAN",
          description: "Test Transaction",
          order_id: order.id, // Razorpay Order ID
          handler: function (response: any) {
              console.log("Payment Successful", response);
              
             sendMail(response, CustAddress)
             custDetails(response,CustAddress)
            
              sessionStorage.removeItem("cartItem")
              sessionStorage.removeItem("data")
              // setModal(response.razorpay_order_id)
               setOrderId(response.razorpay_order_id)
              console.log(orderId)
              dispatch(resetVariable());
              dispatch(clearCart())
              dispatch(resetCustomerDetails())
          },
          prefill: {
              name: CustAddress.fullName,
              email: CustAddress.email,
              contact: CustAddress.phone,
          },
          theme: {
              color: "#F37254",
          },
      };
    
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    };
  
    return(

        <div className="justify-center flex items-center mt-10 ml-5 md:ml-0">
        {cartItemRedux.length!=0?(
          
        <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
        <div className="gap-2 grid grid-cols-1">
        {(cartItemRedux.map((item:any, index:any) => (
            <div key={index} className="gap-2 grid grid-cols-2 md:grid-cols-2">
          <Card style={{margin:'1vw'}} shadow="none" key={index}>
            <CardBody className="overflow-visible p-0 bg-blue">
              <Card isPressable onPress={() => selectedProduct(item)}>
              <Image 
                shadow="sm"
                radius="lg"
                alt={item.title}
                className="w-[70vw] md:w-[18vw] lg:w-[14vw] object-cover h-full"
                src={item.img}
              />
              </Card>
            </CardBody>
          </Card>
           <div className="mt-5">
            <div className="flex justify-between">
            <div>
           <h2 className="font-regular text-xl">{item.title}</h2>
           </div>
           <div>
              <Button
              isIconOnly  
              onPress={()=>{
                dispatch(removeItem(item.key))
                 dispatch(setVariable())
                }} 
              variant="flat"
              color="danger" 
               className="mr-4 bg-#fafafa hover:bg-danger-100 hover:text-destructive transition-colors p-1 rounded-full"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trash"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
              </Button>
              </div>
              </div>
              
            <p className="uppercase font-semibold text-xl">&#8377;{item.price*item.qty}</p>
            
            <div className="mt-2 md:mt-7">
            <Button isIconOnly size="sm"
            className="hover:text-destructive transition-colors p-1 rounded-full"
            variant="flat" onPress={()=>incrementCount(item)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
              </Button>
            <span className="text-center text-[1.7em] font-medium mx-4">{item.qty}</span>
            <Button isIconOnly size="sm"
            isDisabled={item.qty<=1?true:false}
            className="hover:text-destructive transition-colors p-1 rounded-full"
            variant="flat" onPress={()=>decrementCount(item)}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-minus"><path d="M5 12h14"/></svg>
              </Button>
              </div>
           </div>
           </div>
        )))}
      </div>
      <div className="justify-end block px-[2vw]">
      <h2 className="font-bold text-xl my-2">Total Price:  &#8377;{totalPriceRedux}</h2>
      {/* <div className="mt-5 mb-5">
      </div> */}
        <FormComponent buyNow={handlePayment} />
      </div>
      </div>
      )
      :
      (<EmptyCartComponent orderid={orderId} />)}
      </div>
    )
}

export default CartComponent;
