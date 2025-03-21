import axios from "axios";

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
  });
};

const handlePayment = async () => {
  const res = await loadRazorpayScript();

  if (!res) {
      alert("Failed to load Razorpay SDK. Please check your connection.");
      return;
  }

  // Call the backend to create an order
  const { data: order } = await axios.post("http://localhost:5000/create-order", {
      amount: 500, // Example amount in INR
      currency: "INR",
  });

  const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your publishable key from Razorpay Dashboard
      amount: order.amount,
      currency: order.currency,
      name: "Your Company Name",
      description: "Test Transaction",
      order_id: order.id, // Razorpay Order ID
      handler: function (response) {
          console.log("Payment Successful", response);
          alert("Payment Successful!");
      },
      prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
      },
      theme: {
          color: "#F37254",
      },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
export default handlePayment;