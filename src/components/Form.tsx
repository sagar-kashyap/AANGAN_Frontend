
import React, { useState } from 'react';
import { Input, Textarea, Button, Spacer } from '@nextui-org/react';
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
        <div>
            {/* <Text h3>Shipping Address</Text> */}
            <Input
            isRequired
                fullWidth
                label="Full Name"
                name="fullName"
                value={address.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
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
                placeholder="Enter your phone number"
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
                placeholder="Enter your email"
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
                placeholder="Enter your street address"
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
                placeholder="Enter your city"
            />
            <Spacer y={1} />
            <Input
                fullWidth
                isRequired
                label="State"
                name="state"
                value={address.state}
                onChange={handleChange}
                placeholder="Enter your state"
            />
            <Spacer y={1} />
            <Input
                fullWidth
                isRequired
                label="ZIP Code"
                name="zip"
                value={address.zip}
                onChange={handleChange}
                placeholder="Enter your ZIP code"
            />
            <Spacer y={1} />
            <Input
                fullWidth
                isRequired
                label="Country"
                name="country"
                value={address.country}
                onChange={handleChange}
                placeholder="Enter your country"
            />
            <Spacer y={6} />

            <Button isDisabled={!isFormValid} color="warning" className="font-medium text-l" variant="solid" onPress={callBuy}>Buy Now</Button>
            <Spacer y={6} />
            </div>
            
        // </Card>
    );
};

export default AddressSection;
