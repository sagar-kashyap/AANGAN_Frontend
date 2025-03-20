
import React, { useState } from 'react';
import { Input, Textarea, Button, Spacer } from "@heroui/react";
import { useDispatch } from 'react-redux';
import { setGlobalAddress } from "../features/variableSlice";
interface ChildProps {
  buyNow:any
}
const AddressSection: React.FC<ChildProps> = ({buyNow }) =>{

    const dispatch = useDispatch();
    // const [buy, setBuy] = useState(true)
    const [address, setAddress] = useState({
        fullName: '',
        phone: '',
        email:"",
        street: '',
        city: '',
        state: '',
        zip: '',
        country: '',
    });

    const isFormValid = Object.values(address).every((val) => val.trim() !== "");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAddress((prev) => ({ ...prev, [name]: value }));
        // console.log(address)
    };


      const callBuy = () =>{
        dispatch(setGlobalAddress(address))
            buyNow()
        }

    return (
        // <Card>
        // </Card>
        <div className='mr-[5vw] md:mr-0'>
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
            <Spacer y={1} />
            <Input
            isRequired
                fullWidth
                label="Phone Number"
                name="phone"
                value={address.phone}
                onChange={handleChange}
                
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
                fullWidth
                isRequired
                label="City"
                name="city"
                value={address.city}
                onChange={handleChange}
                
            />
            <Spacer y={1} />
            <Input
                fullWidth
                isRequired
                label="State"
                name="state"
                value={address.state}
                onChange={handleChange}
                
            />
            <Spacer y={1} />
            <Input
                fullWidth
                isRequired
                label="ZIP Code"
                name="zip"
                value={address.zip}
                onChange={handleChange}
                
            />
            <Spacer y={1} />
            <Input
                fullWidth
                isRequired
                label="Country"
                name="country"
                value={address.country}
                onChange={handleChange}
                
            />
            <Spacer y={6} />
            <Button isDisabled={!isFormValid} color="warning" className="font-medium text-l" variant="solid" onPress={callBuy}>Buy Now</Button>
            <Spacer y={6} />
        </div>
    );
};

export default AddressSection;
