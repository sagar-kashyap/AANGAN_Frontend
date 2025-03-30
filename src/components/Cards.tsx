import {Card, CardBody, Image, Link, CardFooter} from "@heroui/react";
import ItemList from "../../public/Items"

export default function CardComponent() {
  const list = ItemList
  
function selectedProduct(item:any){
console.log(item)
sessionStorage.setItem("data",JSON.stringify(item))
}
  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-3">
      {list.map((item, index) => (
        <Link key={index} href={`/product/${item.title}`}>
        <Card className="max-md:mb-[1em] sm:m-[2vw] md:m-[2vw] lg:m-[3vh]" shadow="md" key={index} isPressable onPress={() => selectedProduct(item)}>
          <CardBody className="overflow-visible p-0">
            <Image
              loading="lazy"
              shadow="sm"
              radius="md"
              width="100%"
              alt={item.title}
              className=" object-cover lg:h-[35vh] max-sm:w-[80vw] max-md:w-[50vw]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className=" py-1 sm:py-2.5 text-small justify-between">
            <p className="whitespace-nowrap overflow-hidden text-ellipsis font-medium md:font-semibold">{item.title}</p>
            <p className="text-default-900">&#8377;{item.price}</p>
           {/* <b>{item.title}</b>w-[80vw] md:w-[50vw] lg:w-[17vw]
           <p className="text-default-500">{item.price}</p> */}
          </CardFooter>
        </Card>
         </Link>
      ))}
    </div>
  );
}