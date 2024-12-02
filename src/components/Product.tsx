

import { useState,useEffect } from "react";
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";
import './product.css'
// import {HeartIcon} from "./HeartIcon";
// import {PauseCircleIcon} from "./PauseCircleIcon";
// import {NextIcon} from "./NextIcon";
// import {PreviousIcon} from "./PreviousIcon";
// import {RepeatOneIcon} from "./RepeatOneIcon";
// import {ShuffleIcon} from "./ShuffleIcon";

export default function ProductComponent() {
  let arr:any = [];
//  var num:number = 0;
 var data:any
//  let array:any[]
 let commonItem:any
var [count, setCount] = useState(0);
// let [item,setItem] = useState([])
data=JSON.parse(localStorage.getItem("data")!)
let cartData=JSON.parse(localStorage.getItem("cartItem")!)
useEffect(()=>{
console.log(cartData,data)
if(cartData!==null){
  let currentItem=cartData.filter((e:any)=> {
    return e.key==data.key;
  }
);
if(currentItem==true){

  setCount(currentItem[0].qty)
  console.log(currentItem[0].qty)
  commonItem = currentItem.key
}
}
},[]);
if(count===0){

  arr=cartData.filter((e:any)=> {
    return e.key !== data.key;
  })
  localStorage.setItem("cartItem",JSON.stringify(arr))
}
  // let data2=JSON.parse(data!)
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if(count>0){
      count = count - 1;
      setCount(count);
    }
    // else{
      // arr=cartData.filter((e:any)=> {
      //   return e.key !== data.key;
      // })
      // localStorage.setItem("cartItem",JSON.stringify(arr))
    // }
    console.log(count)
  }
  function addToCart(addData:any){
    if(count>0){
    let obj:any = {
      key:addData.key,
      qty:count
    }
    let cartData2=JSON.parse(localStorage.getItem("cartItem")!)
     if(cartData2!==null){
      arr=cartData2.filter((e:any)=> {
        return e.key !== addData.key;
      })

      arr.push(obj)
      console.log(obj)
      localStorage.setItem("cartItem",JSON.stringify(arr))
     }else{
      arr.push(obj)
      localStorage.setItem("cartItem",JSON.stringify(arr))
     }
  }}

  return (
    <div className="product h-[80vh]">
    <div className="h-[60vh] grid grid-cols-1 gap-10 md:grid-cols-2">
    {/* <div className="w-[27vw]"> */}
    <Image
              alt="Album cover"
              className="object-cover"
              height="100%"
              shadow="md"
              src={data.img}
              width="100%"
            />
            {/* </div> */}
          <div>
        <h1 className="font-bold text-3xl">{data.title}</h1>
        <br></br>
    <p className="uppercase font-bold text-default-600 text-3xl">{data.price}</p>
    <div className="mt-10 md:mt-20">
    <Button isIconOnly color="danger" className="font-bold text-2xl" variant="flat" onPress={()=>incrementCount()}>+</Button>
    <Button color="primary" className="font-medium text-2xl mx-6" variant="flat">{count}</Button>
    <Button isIconOnly color="danger" className="font-bold text-3xl" variant="flat" onPress={()=>decrementCount()}>-</Button>
    </div>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2">
    <Button color="warning" className="font-medium text-l" variant="solid" onPress={()=>addToCart(data)}>Add to Cart</Button>
    </div>
        {/* <small className="text-default-600 text-3xl">{data2.price}</small> */}
          </div>
    </div>
    </div>
  );
}
