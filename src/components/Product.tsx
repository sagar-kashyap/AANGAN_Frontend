import { useState,useEffect } from "react";
import {Image, Button} from "@heroui/react";
import './product.css'
import { useDispatch } from 'react-redux';
import { setVariable, addToCart, setNavbar } from "../features/variableSlice";
import { useNavigate } from "react-router-dom";

export default function ProductComponent() {
  
 var data:any
 let currentItem:any

 const dispatch = useDispatch();
 const navigate = useNavigate();

const [buttonName,setButtonName]=useState("Add to cart")
data=JSON.parse(sessionStorage.getItem("data")!)
let cartData=JSON.parse(sessionStorage.getItem("cartItem")||"[]")

useEffect(()=>{
  if(cartData){
  // console.log(cartData,data)
  currentItem=cartData.find((e:any)=> {
    return e.key==data.key;
  }); 
if(currentItem){
  setButtonName("Go to cart")
}
}
},[]);

  function addItemToCart(addData: any){
    // console.log(addData)
    currentItem=cartData.find((e:any)=> {
           return e.key==data.key;
    })
    if(!currentItem){
    dispatch(addToCart({ ...addData, qty: 1 }))
  dispatch(setVariable());
  dispatch(setNavbar({title:"Cart", href:"/cart"}))
  setButtonName("Go to cart")
  }else{
    navigate('/cart')
    dispatch(setNavbar({title:"Cart", href:"/cart"}))
  }
}

  return (
    <>
    <div></div>
      <div className="w-[80vw] flex justify-center items-center px-4 py-8 md:py-16 mx-auto max-w-7xl">
       <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12">
    <Image
              alt="Product image"
              className="object-cover h-[40vh] md:h-[53vh]"
              shadow="md"
              src={data.img}
              width="100%"
            />
          <div className="flex flex-col w-full max-w-xs overflow-hidden justify-items-center md:justify-items-start">
            
        <h1 className="break-words font-regular text-3xl my-6">{data.title}</h1>
        <div className="h-[1px] bg-gray-100 w-full" />
        <p className="text-md text-gray-500 mt-2">
                  {data.description}
                </p>
    <p className="my-2 md:my-4 uppercase font-semibold text-3xl">&#8377;{data.price}</p>
    <p className="text-sm text-gray-500 mb-2">
                  ✓ Handcrafted with care
                </p>
                <p className="text-sm text-gray-500">
                ✓ Ethically sourced materials
           </p>
    <div className="mt-8 md:mt-auto grid grid-cols-1">
    <Button 
    radius="full"
    size="lg" 
      // color="primary" 
     className="bg-gray-900 text-white text-xl" 
    variant="solid" 
    fullWidth={true}
    onPress={()=>addItemToCart(data)}>
     {buttonName}
      </Button>
    
    <p className="text-xs text-gray-500 text-center mt-4">
                  Secure checkout powered by Razorpay
                </p>
                </div>
          </div>
    </div>
    </div>
    </>
    // <div className="w-full px-4 py-8 md:py-16 mx-auto max-w-7xl">
    //   <div className="flex flex-col md:flex-row md:space-x-8 lg:space-x-12">
    //     {/* Product Image */}
    //     <div className=" flex justify-center max-w-sm items-center md:w-1/2 mb-6 md:mb-0">
    //       <img
    //         src={data.img}
    //         alt={data.title}
    //         className="object-cover h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-lg shadow-md"
    //       />
    //     </div>

    //     {/* Product Details */}
    //     <div className="w-full md:w-1/2 flex flex-col">
    //       <h1 className="text-2xl sm:text-3xl font-medium break-words mb-4">
    //         {data.title}
    //       </h1>
          
    //       <div className="h-[1px] bg-gray-200 w-full my-4" />
          
    //       <p className="text-2xl sm:text-3xl font-semibold my-4">
    //         ₹{data.price}
    //       </p>
    //       <p className="text-sm text-gray-500 mb-2">
    //         ✓ Handcrafted with care
    //       </p>
          
    //       <p className="text-sm text-gray-500 mb-6">
    //         ✓ Ethically sourced materials
    //       </p>
          
    //       <div className="mt-auto">
    //         <Button
    //           className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg rounded-full"
    //           onPress={()=>addItemToCart(data)}
    //         >
    //           {buttonName}
    //         </Button>
            
    //         <p className="text-xs text-gray-500 text-center mt-4">
    //           Secure checkout powered by Razorpay
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
