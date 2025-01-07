import { useState,useEffect } from "react";
import {Image, Button} from "@nextui-org/react";
import './product.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';


export default function ProductComponent(props:any) {
  let arr:any = [];
 var data:any
 let currentItem:any
 let commonItem:any
 const dispatch = useDispatch();

var [count, setCount] = useState(0);
const [button,setButton] = useState(true)
data=JSON.parse(localStorage.getItem("data")!)
let cartData=JSON.parse(localStorage.getItem("cartItem")!)

useEffect(()=>{
  
  if(count===0){
    setButton(true)
    props.cartQty(count)
    // dispatch(addItem(JSON.parse(localStorage.getItem("cartItem")!)))
  }
},[count])

useEffect(()=>{
  if(cartData){
  console.log(cartData,data)
  currentItem=cartData.filter((e:any)=> {
    return e.key==data.key;
  }
);
if(currentItem.length!==0){
  setButton(false)
  setCount(currentItem[0].qty)
  console.log(currentItem[0].qty)
  commonItem = currentItem.key
}
}
},[]);

  function incrementCount() {
    count = count + 1;
    setCount(count);

    setButton(false)
  }
  function decrementCount() {
    count = count - 1;
    if(count==0){
      setCount(count);
      setButton(true)
        arr=cartData.filter((e:any)=> {
          return e.key !== data.key;
        })
        localStorage.setItem("cartItem",JSON.stringify(arr))
        props.cartQty(count)
    }
    else if(count>0){
      setCount(count);
    }
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
      props.cartQty(count)
      // dispatch(addItem(obj));
      localStorage.setItem("cartItem",JSON.stringify(arr))
     
    }else{
      arr.push(obj)
      console.log(obj)
      props.cartQty(count)
      // dispatch(addItem(obj));
      localStorage.setItem("cartItem",JSON.stringify(arr))
     }
  }
dispatch(addItem(JSON.parse(localStorage.getItem("cartItem")!)))
}

  return (
    <div className="product h-[80vh]">
    <div className="h-[50vh] grid grid-cols-1 gap-10 md:grid-cols-2">
    <Image
              alt="Album cover"
              className="object-cover h-[50vh]"
              shadow="md"
              src={data.img}
              width="100%"
            />
          <div className="grid justify-items-center md:justify-items-start">
        <h1 className="font-bold text-3xl">{data.title}</h1>
        {/* <br></br> */}
    <p className="uppercase font-bold text-default-600 text-3xl">&#8377;{data.price}</p>
    <div className="">
    <Button isIconOnly color="danger" className="font-bold text-2xl" variant="flat" onPress={()=>incrementCount()}>+</Button>
    <Button isIconOnly color="primary" className="font-medium text-2xl mx-3" variant="flat">{count}</Button>
    <Button isIconOnly color="danger" className="font-bold text-3xl" variant="flat" onPress={()=>decrementCount()}>-</Button>
    </div>
    <div className="mb-10 md:mb-0 mt-10 grid grid-cols-1 md:grid-cols-2">
      <div>

    <Button isDisabled={button} color="warning" className="font-medium text-xl" variant="solid" onPress={()=>addToCart(data)}>Add to Cart</Button>
      </div>
    </div>
          </div>
    </div>
    </div>
  );
}
