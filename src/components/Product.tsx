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
    <div className="product md:h-[70vh] h-[80vh]">
    <div className="h-auto grid grid-cols-1 gap-x-10 md:grid-cols-2">
    <Image
              alt="Album cover"
              className="object-cover h-[40vh] md:h-[50vh]"
              shadow="md"
              src={data.img}
              width="100%"
            />
          <div className="flex flex-col justify-items-center md:justify-items-start">
            
        <h1 className="font-regular text-3xl my-6">{data.title}</h1>
        <div className="h-[1px] bg-gray-100 w-full" />
    <p className="my-2 md:my-4 uppercase font-semibold text-3xl">&#8377;{data.price}</p>
    <p className="text-sm text-gray-500">
                  ✓ Handcrafted with care
                </p>
    <div className="mt-8 md:mt-auto mb-10 grid grid-cols-1">
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
  );
}
