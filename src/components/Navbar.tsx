import {useState,useEffect} from "react";
import {Badge, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@heroui/react";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from "../features/store";
import { setNavbar } from "../features/variableSlice";

export default function NavbarComponent() {

  const [isMenuOpen, setIsMenuOpen] =useState(false);
  const [item,setItem] = useState(true)

 
 const variable = useSelector((state: RootState) => state.variable.value);
 const navItem = useSelector((state: RootState) => state.variable.Navbar);
//  console.log(navItem)
 const dispatch = useDispatch()
  useEffect(()=>{
    // console.log(variable)
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
          <Link onPress={()=>buttonActivate({title:"Home", href:"/"})} href="/" color="foreground">
          <p className="font-bold text-inherit">AANGAN</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item,index)=>(
            <NavbarItem key={index} isActive={item.title===navItem.title?true:false}>
            <Link onPress={()=>buttonActivate(item)}  
            href={item.href} 
            color={item.title===navItem.title ? "primary" : "foreground"}
            underline="hover"
            size="md"
            
            >
            {item.title}
          </Link>
        </NavbarItem >
          ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem >
          <Link color="foreground" href="/cart" onPress={()=>buttonActivate({title:"Cart", href:"/cart"})} isDisabled={item}>
          <Badge color="danger" content={variable}>
          {/* <Button onPress={()=>buttonActivate({title:"Cart", href:"/cart"})} isDisabled={item} as={Link}
          className="font-bold" href="/cart" color="danger" size="md" variant="solid">
           🛒Cart */}
          
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
          {/* </Button> */}
          </Badge>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
            onPress={()=>buttonActivate(item)}
              color={item.title===navItem.title?"primary":"foreground"
                // index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
              underline="hover"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
