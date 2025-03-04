import { useState,useEffect } from "react";
import {Image, Button} from "@nextui-org/react";
import './product.css'
import { useDispatch } from 'react-redux';
import { setVariable, resetVariable } from "../features/variableSlice";

export default function ProductComponent() {
  let arr:any = [];
 var data:any
 let currentItem:any
 let commonItem:any
 const dispatch = useDispatch();

var [count, setCount] = useState(0);
const [button,setButton] = useState(true)
data=JSON.parse(localStorage.getItem("data")!)
let cartData=JSON.parse(localStorage.getItem("cartItem")!)

// const cartItems = useSelector((state: RootState) => state.cart.items);

useEffect(()=>{
  if(count===0){
    setButton(true)
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
function cartBadge(){
  let data=JSON.parse(localStorage.getItem("cartItem")||"[]")
  
  dispatch(setVariable(data.length));
}
  function incrementCount() {
    count = count + 1;
    setCount(count);

    setButton(false)
  }
  function decrementCount() {
    count = count - 1;
    console.log(count)
    
    if(count==0){
      setCount(count);
      setButton(true)
      console.log(count)
        arr=cartData.filter((e:any)=> {
          return e.key !== data.key;
        })
        localStorage.setItem("cartItem",JSON.stringify(arr))
        cartBadge()
    }
    else if(count>0){
      setCount(count);
    }
    console.log(count)
    
  }
  
  function addToCart1(addData:any){
    if(count>0){
    let obj:any = {
      key:addData.key,
      title:addData.title,
      price:addData.price,
      qty:count
    }
    let cartData2=JSON.parse(localStorage.getItem("cartItem")!)
    if(cartData2!==null){
    
      arr=cartData2.filter((e:any)=> {
        return e.key !== addData.key;
      })

      arr.push(obj)
      console.log(obj)
      
      // dispatch(addItem(obj));
      localStorage.setItem("cartItem",JSON.stringify(arr))
      cartBadge()
      
    }else{
      arr.push(obj)
      console.log(obj)
      
      // dispatch(addItem(obj));
      localStorage.setItem("cartItem",JSON.stringify(arr))
      cartBadge()
     }
  }
 
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

    <Button isDisabled={button} color="warning" className="font-medium text-xl" variant="solid" onPress={()=>addToCart1(data)}>Add to Cart</Button>
      </div>
    </div>
          </div>
    </div>
    </div>
  );
}
