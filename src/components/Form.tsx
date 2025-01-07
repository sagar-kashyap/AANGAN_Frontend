// import React from "react";
// import {Form, Input, Button} from "@nextui-org/react";

// export default function FormComponent() {
//   const [action, setAction] = React.useState<any | null>(null);

//   return (
//     <Form
//       className="w-full max-w-xs flex flex-col gap-4"
//       validationBehavior="native"
//       onReset={() => setAction("reset")}
//       onSubmit={(e) => {
//         e.preventDefault();
//         let data = Object.fromEntries(new FormData(e.currentTarget));
//         console.log(data)
//         setAction(`submit ${JSON.stringify(data)}`);
//       }}
//     >
//       <Input
//         isRequired
//         errorMessage="Please enter a valid Full Name"
//         label="Full Name"
//         labelPlacement="outside"
//         name="username"
//         placeholder="Enter your full name"
//         type="text"
//       />

//       <Input
//         isRequired
//         errorMessage="Please enter a valid email"
//         label="Email"
//         labelPlacement="outside"
//         name="email"
//         placeholder="Enter your email"
//         type="email"
//       />
//       <Input
//         isRequired
//         errorMessage="Please enter a number"
//         label="Contact Number"
//         labelPlacement="outside"
//         name="Number"
//         placeholder="Enter your contact number"
//         type="number"
//       />
//       <div className="flex gap-2">
//         <Button color="primary" type="submit">
//           Submit
//         </Button>
//         <Button type="reset" variant="flat">
//           Reset
//         </Button>
//       </div>
//       {action && (
//         <div className="text-small text-default-500">
//           Action: <code>{action}</code>
//         </div>
//       )}
//     </Form>
//   );
// }

// components/AddressSection.tsx
import React, { useState } from 'react';
import { Input, Textarea, Button, Spacer } from '@nextui-org/react';

interface address {
  fullName: string;
  phone: string;
  email:string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}
interface ChildProps {
  onSendData: (data: address) => void;
  buyNow:any
}
const AddressSection: React.FC<ChildProps> = ({ onSendData,buyNow }) =>{

    const [buy, setBuy] = useState(true)
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

    function callBuy(){
        buyNow()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setAddress((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        console.log('Address Submitted:', address);
        onSendData(address)
        alert('Address saved successfully!');
       setBuy(false)
       console.log(onSendData)
      };

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
            <Button color="warning" className="font-medium text-l" variant="solid" onPress={handleSubmit}>Save Address</Button>

            <Button isDisabled={buy} color="warning" className="font-medium text-l ml-6" variant="solid" onPress={()=>callBuy()}>Buy Now</Button>
            <Spacer y={6} />
            </div>
            
        // </Card>
    );
};

export default AddressSection;
