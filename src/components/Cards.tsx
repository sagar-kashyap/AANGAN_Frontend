import {Card, Image} from "@heroui/react";
import ItemList from "../../public/Items"
import { useNavigate } from "react-router-dom";

export default function CardComponent() {
  const list = ItemList
  const navigate=useNavigate()

function selectedProduct(item:any){
console.log(item)
navigate(`/product/${item.title}`)
sessionStorage.setItem("data",JSON.stringify(item))
}
  return (
    <div className="grid gap-2 md:gap-5 lg:gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {list.map((item, index) => (
             <Card
             key={index}
             className="w-full max-w-xs h-full flex flex-col bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg hover:shadow-blue-50 transition duration-300"
             isPressable
             onPress={() => selectedProduct(item)}>
             <Image
             isZoomed
              loading="lazy"
              // shadow="sm"
              radius="none"
              width="100%"
              alt={item.title}
              className=" object-cover lg:h-[35vh] max-sm:w-[80vw] max-md:w-[50vw]"
              src={item.img}
            />
      
          <div className="flex flex-col justify-between p-2 md:p-4 text-left flex-grow">
        <h3 className="font-semibold text-md md:text-lg text-foreground line-clamp-2">{item.title}</h3>
        <p className="text-sm md:my-2 text-foreground/70 line-clamp-2">{item.description}</p>
        <p className="text-lg md:text-xl font-bold text-foreground">₹{item.price}</p>
      </div>
          
          </Card>
        
      ))}
    </div>
  );
}