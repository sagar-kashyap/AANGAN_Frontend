import {useState,useEffect} from "react";
import {Badge, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "../features/store";
import { setNavbar } from "../features/variableSlice";

export default function NavbarComponent() {

  const [isMenuOpen, setIsMenuOpen] =useState(false);
  const [item,setItem] = useState(true)

 
 const variable = useSelector((state: RootState) => state.variable.value);
 const navItem = useSelector((state: RootState) => state.variable.Navbar);
 const dispatch = useDispatch()
  useEffect(()=>{
    console.log(variable)
    if(variable===0){
      setItem(true)
    }
    else{
      setItem(false)
    }
  },[variable]);

  const menuItems = [
    {title:"Home", href:"/"},
    {title:"About us", href:"/about"},
    {title:"Contacts", href:"/contact"},
    
  ];

  function buttonActivate(e: any) {
    dispatch(setNavbar(e))
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className="font-bold text-inherit">AANGAN</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item,index)=>(
            <NavbarItem key={index} isActive={item.title===navItem.title?true:false}>
            <Link onPress={()=>buttonActivate(item)}  href={item.href} color={item.title===navItem.title ? "primary" : "foreground"}>
            {item.title}
          </Link>
        </NavbarItem >
          ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem >
          {/* <Link href="/cart"> */}
          <Badge color="danger" content={variable}>
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
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
