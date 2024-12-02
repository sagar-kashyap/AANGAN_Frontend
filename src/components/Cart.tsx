import {Card, CardBody, Image, Link, Button} from "@nextui-org/react";
import ItemList from "../../public/Items"
import axios from "axios";
// require('dotenv').config()
function CartComponent(){

    const list = ItemList
    let cartData=JSON.parse(localStorage.getItem("cartItem")!)
    
    const matchingItems = list.filter(item1 =>cartData.some((item2:any) => item1.key === item2.key))
    const updatedArray = matchingItems.map(item => {
        const match = cartData.find((extra:any) => extra.key === item.key);
        return match ? { ...item, ...match } : item;
      });
      console.log(updatedArray)
      function calculateTotalPrice(cart: any): number {
        return cart.reduce((total: number, item: { price: number; qty: number; }) => {
            return total + item.price * item.qty;
        }, 0);
    }
  const totalPrice = calculateTotalPrice(updatedArray)
  console.log(totalPrice)
    function selectedProduct(_item: { key: number; title: string; img: string; price: string; }){
        
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
    
    const handlePayment = async () => {
      const res = await loadRazorpayScript();
    
      if (!res) {
          alert("Failed to load Razorpay SDK. Please check your connection.");
          return;
      }
    
      // Call the backend to create an order
      const { data: order } = await axios.post("http://localhost:5000/create-order", {
          amount: totalPrice, // Example amount in INR
          currency: "INR",
      });
    
      const options = {
          key: import.meta.env.REACT_APP_RAZORPAY_KEY_ID, // Your publishable key from Razorpay Dashboard
          amount: order.amount,
          currency: order.currency,
          name: "Your Company Name",
          description: "Test Transaction",
          order_id: order.id, // Razorpay Order ID
          handler: function (response: any) {
              console.log("Payment Successful", response);
              alert("Payment Successful!");
          },
          // prefill: {
          //     name: "John Doe",
          //     email: "johndoe@example.com",
          //     contact: "9999999999",
          // },
          theme: {
              color: "#F37254",
          },
      };
    
      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    };
    return(
        <div className="justify-center flex items-center mt-10 ml-5 md:ml-0">
        <div className="grid grid-cols-2">
        <div className="gap-2 grid grid-cols-1">
        {updatedArray.map((item, index) => (
            <div className="gap-2 grid grid-cols-2 md:grid-cols-2">
          <Link key={index} href={`/product/${item.title}`}>
          <Card style={{margin:'1vw'}} shadow="none" key={index} isPressable onPress={() => selectedProduct(item)}>
            <CardBody className="overflow-visible p-0">
              <Image 
                shadow="sm"
                radius="lg"
                // width="70%"
                alt={item.title}
                className="w-[70vw] md:w-[11vw] object-cover h-full"
                src={item.img}
              />
            </CardBody>
          </Card>
           </Link>
           <div className="mt-5">
           <h2 className="font-bold text-xl">{item.title}</h2>
            <p className="uppercase font-bold text-default-600 text-xl my-2">{item.price}</p>
            <Button isIconOnly color="primary" className="font-medium text-xl" variant="flat">+{item.qty}</Button>

            {/* <p className=" font-bold text-default-600 text-xl">Quantity:-{item.qty}</p> */}
           </div>
           </div>
        ))}
      </div>
      <div className="justify-end block">
      <h2 className="font-bold text-xl">Total Price:  {totalPrice}</h2>
      <div className="mt-5">
      <Button color="warning" className="font-medium text-l" variant="solid" onPress={() => handlePayment()}>Buy Now</Button>
      </div>

      </div>
      </div>
      </div>
    )
}

export default CartComponent;