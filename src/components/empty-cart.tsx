// import React from "react";
import {Button } from "@heroui/react";
import ModalComponent from "./Modal";
import { useState,useEffect } from "react";
interface EmptyCartProps {
  orderid?: string | null; // Explicitly defining the type
}
const EmptyCartComponent: React.FC<EmptyCartProps> = ({ orderid }) => {
  const [modal, setModal] = useState<string | null>(null);

  useEffect(() => {
    setModal(orderid || null);
  }, [orderid]);
   console.log(orderid)
  return (
    <div>
      {!modal?(
     <div className="flex flex-col items-center justify-center w-[100vw] h-[65vh] text-center p-6">
      {/* <div> */}
       <div className="size-10 md:size-20 items-center">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shopping-cart"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
      </div>
      <h2 className="text-2xl font-semibold text-gray-700 mt-4">Your Cart is Empty</h2>
      <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
      <Button color="primary" className="mt-4" variant="solid" onPress={() => window.location.href = '/'}>
        Start Shopping
      </Button>
    {/* </div> */}
      </div>
    ):
    (<ModalComponent orderid={modal} modal={setModal} />)
    }
    </div>
   
  );
};

export default EmptyCartComponent;
