import {useState,useEffect} from "react";
import {Badge, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { useSelector } from 'react-redux';

export default function NavbarComponent(props:any) {

  const cartItems = useSelector((state:any) => state.cart.items);
  const [isMenuOpen, setIsMenuOpen] =useState(false);
  const [item,setItem] = useState(true)
  const [qty,setQty] = useState(0)

  useEffect(()=>{
       let cartData=JSON.parse(localStorage.getItem("cartItem")!)
      //  console.log(cartData.length)
       if(cartData && cartData.length>0){
        console.log(cartData,cartData.length)
       setItem(false)
       setQty(cartData.length)
       }
       else if(cartData && cartData.length==0){
        // console.log(cartData,cartData.length)
         setItem(true)
       setQty(cartData.length)
       }
      // console.log(cartItems)
  },[props.cartQty]);
  console.log(props.cartQty)
  const menuItems = [
    "Home",
    "About us",
    "Contacts",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">Sapna Craft</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/about" aria-current="page">
            About us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contacts
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="/product">
            Product
          </Link>
        </NavbarItem> */}
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem >
          {/* <Link href="/cart"> */}
          <Badge color="danger" content={qty}>
          <Button isDisabled={item} as={Link} color="danger" href="/cart" variant="solid">
            <text style={{fontWeight:'bold'}}>🛒Cart</text>
          </Button>
          </Badge>
          {/* </Link> */}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
