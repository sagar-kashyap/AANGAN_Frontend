
import React, { useEffect, useState } from 'react';
import { Input, Textarea, Button, Spacer } from "@heroui/react";
import { useDispatch } from 'react-redux';
import { setGlobalAddress } from "../features/variableSlice";
import axios from 'axios';
interface ChildProps {
  buyNow:any;
}
type CustAddress = {
    fullName: string;
    phone: string;
    email: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
const AddressSection: React.FC<ChildProps> = ({buyNow}) =>{

    const dispatch = useDispatch();
    // const [buy, setBuy] = useState(true)
    const [isInvalidZip, setIsInvalidZip]=useState(true)
    const [address, setAddress] = useState<CustAddress>(
        {
        fullName: '',
        phone: "",
        email:"",
        street: '',
        city: '',
        state: '',
        zip: "",
        country: '',
    }
);

    const isFormValid = Object.values(address).every((val) => val.trim() !== "");
    useEffect(() => {
        // console.log("Updated address:", address);
        dispatch(setGlobalAddress(address)); // Dispatch updated state to Redux
    }, [address, dispatch]);
    const handleChange = (e:any) => {
        
        const { name, value } = e.target;
        setAddress((prev) => {
            const updatedAddress = { ...prev, [name]: value };
            dispatch(setGlobalAddress(updatedAddress));  // ✅ Dispatch latest address
          
            return updatedAddress;
        });
    };

    const validateEmail = (value:any) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    const validatePhone = (value:any) => value.match(/^[0-9]{10}$/);
    
    const isInvalidPhone = React.useMemo(() => {
        if (address.phone === "") return false;
    
        return validatePhone(address.phone) ? false : true;
      }, [address]);
        
      const isInvalid = React.useMemo(() => {
          if (address.email === "") return false;
      
          return validateEmail(address.email) ? false : true;
        }, [address]);

        useEffect(()=>{
            const fetchLocationDetails=async()=>{
                // console.log(address.zip.length)
            if (address.zip != "" && address.zip.length === 6) {
                // console.log(address.zip)
                // fetchLocationDetails(value);
                try {
                    const response=  await axios.get(`${import.meta.env.VITE_SERVER_API}/addressDetails/${address.zip}`);
                    // const response = await fetch(`https://api.zippopotam.us/in/${address.zip}`);
                    // if (!response.ok) throw new Error("Invalid ZIP Code");
                
                    const data = await response.data;
                    // console.log(data.info.PostOffice[0])
                    if (data.info.PostOffice[0]) {
                      const place = data.info.PostOffice[0];
                      setAddress((prev) => ({
                        ...prev,
                        city: place.District,
                        state: place.State,
                        country: place.Country || "India",
                      }));
                    //   setZipError(null);
                    //   console.log(address.zip)
                    setIsInvalidZip(false)
                    }
                  } catch (error) {
                    console.log(error)
                    // setZipError("Invalid PIN Code");
                    setIsInvalidZip(true)
                  }
              }else if(address.zip.length === 0) setIsInvalidZip(false) //So zip field does not show red alert when the pase is loaded and it empty. It will show red as its required but not before when the user haven't even clicked on it

              else setIsInvalidZip(true)}
              fetchLocationDetails()
          }, [address.zip]);
        
           

      const callBuy = () =>{
        setAddress((prev) => {
            const updatedAddress = { ...prev };
            dispatch(setGlobalAddress(updatedAddress));  // ✅ Dispatch latest address
            buyNow();
            return updatedAddress;
        });
        }

    return (
        // <Card>
        // </Card>
        <div className='mr-[5vw] md:mr-0 mt-4 md:mt-auto mb-10 grid'>
            {/* <Text h3>Shipping Address</Text> */}
            <Input
            isRequired
                fullWidth
                label="Full Name"
                name="fullName"
                value={address.fullName}
                onChange={handleChange}
                type="text"
            />
            {/* {address.fullName} */}
            <Spacer y={1} />
            <Input
            isRequired
                fullWidth
                isInvalid={isInvalidPhone}
                label="Phone Number"
                name="phone"
                value={address.phone}
                onChange={handleChange}
                color={isInvalidPhone ? "danger" : "default"}
                errorMessage="Please enter a valid phone number"
                type="number"
            />
            <Spacer y={1} />
            <Input
            isRequired
                fullWidth
                label="Email"
                name="email"
                value={address.email}
                onChange={handleChange}
                type="email"
                color={isInvalid ? "danger" : "default"}
                errorMessage="Please enter a valid email"
                isInvalid={isInvalid}
            />
            <Spacer y={1} />
            <Textarea
                fullWidth
                isRequired
                label="Street Address"
                name="street"
                value={address.street}
                onChange={handleChange}
                
                type="text"
            />
            <Spacer y={1} />
            <Input
            isInvalid={isInvalidZip}
                fullWidth
                isRequired
                label="ZIP Code"
                name="zip"
                value={address.zip}
                onChange={handleChange}
                errorMessage="Please enter a valid zip code"
            />
            <Spacer y={1} />
            <Input
                fullWidth
                // isRequired
                isDisabled
                label="City"
                name="city"
                value={address.city}
                onChange={handleChange}
                
            />
            <Spacer y={1} />
            <Input
                fullWidth
                // isRequired
                isDisabled
                label="State"
                name="state"
                value={address.state}
                onChange={handleChange}
                
            />
            <Spacer y={1} />
          
            <Input
                fullWidth
                // isRequired
                isDisabled
                label="Country"
                name="country"
                value={address.country}
                onChange={handleChange}
                
            />
            <Spacer y={6} />
            <Button isDisabled={!isFormValid} 
            radius="full"
            size="lg" 
             className="bg-gray-900 text-white text-md" 
            onPress={callBuy}>Buy Now</Button>
            <Spacer y={6} />
        </div>
    );
};

export default AddressSection;
