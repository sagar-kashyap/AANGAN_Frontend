import { useState } from "react";
import {Card, CardBody, Button, Input, Textarea, addToast, ToastProvider} from "@heroui/react"
import axios from "axios";
const ContactUsComponent = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
 
  const handleChange = (e:any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isFormValid = Object.values(form).every((val) => val.trim() !== "");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_SERVER_API}/customer-query`,form)
    .then(res=>{
      console.log(res.data)
    })
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="max-w-2xl mx-auto p-6">
        <CardBody>
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
          <p className="text-gray-600 mb-6 text-center">
            Have questions or need assistance? Reach out to us at <a href="mailto:aangan.shop0@gmail.com" className="text-blue-600 font-bold hover:underline">Email</a>.
          </p>
          
          {/* <p className="mt-2 text-gray-600 text-center">Email: <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a></p> */}
          <p className="text-gray-600 mb-6 text-center">
            or
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
            isRequired
              type="text"
              name="name"
              label="Your Name"
              value={form.name}
              onChange={handleChange}
              
            />
            <Input
              type="email"
              name="email"
              label="Your Email"
              value={form.email}
              onChange={handleChange}
              isRequired
            />
            <Textarea
              name="message"
              label="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              isRequired
            />
    
             <ToastProvider placement="top-center" toastOffset= {60} />
             <div>
             <Button 
             isDisabled={!isFormValid}
             type="submit"
             color="primary"
              onPress={() => {
                addToast({
                  title: "Email Sent",
                  description: "Your email has been sent successfully!",
                  color: "primary",
                  variant: "solid"
                });
              }}>
              Send Message
            </Button> 
            </div>
          </form>
        </CardBody>
      </Card>
     
    </div>
  );
};

export default ContactUsComponent;
