import {Card, CardBody, Image, Link} from "@nextui-org/react";
import ItemList from "../../public/Items"

export default function CardComponent() {
  const list = ItemList
  
function selectedProduct(item:any){
console.log(item)
localStorage.setItem("data",JSON.stringify(item))
}
  return (
    <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
      {list.map((item, index) => (
        <Link key={index} href={`/product/${item.title}`}>
        <Card style={{margin:'2vw'}} shadow="md" key={index} isPressable onPress={() => selectedProduct(item)}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className=" object-cover h-[40vh]"
              src={item.img}
            />
          </CardBody>
          {/* <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter> */}
        </Card>
         </Link>
      ))}
    </div>
  );
}