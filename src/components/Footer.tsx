const FooterComponent = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-4 md:py-8 border-t">
      <div className="container mx-auto px-6 flex justify-between grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 text-center md:text-left">
        {/* Website Title */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">AANGAN</h1>
          <p className="text-sm md:text-base mt-2 text-gray-600 max-w-xs">
            Crafting Nature's Elegance, One Handcrafted Treasure at a Time.
          </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-center md:items-start">
          {/* <h2 className="text-lg font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Email: <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a>
          </p> */}
        </div>

        {/* Policies */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold text-gray-800">Our Policies</h2>
          <div className="mt-2 flex flex-col space-y-1">
            <a target="_blank" href="https://merchant.razorpay.com/policy/PS0QYmLgV7EJnk/terms" className="text-sm md:text-base text-gray-600 hover:text-blue-500">Terms & Conditions</a>
            <a href="https://merchant.razorpay.com/policy/PS0QYmLgV7EJnk/refund" className="text-sm md:text-base text-gray-600 hover:text-blue-500">Cancellation & Refund Policy</a>
            <a href="https://merchant.razorpay.com/policy/PS0QYmLgV7EJnk/shipping" className="text-sm md:text-base text-gray-600 hover:text-blue-500">Shipping & Delivery Policy</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-6 md:mt-8 border-t pt-4 text-center text-xs md:text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} AANGAN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;

// const FooterComponent = () => {
//   return (
//     <footer className="bg-gray-100 text-gray-700 py-2 md:py-8 border-t">
//       <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
//         {/* Website Title */}
//         <div className="flex flex-col items-start">
//           <h1 className="text-2xl font-bold text-gray-800">AANGAN</h1>
//           <p className="text-sm mt-2 text-gray-600">Crafting Nature's Elegance, One Handcrafted Treasure at a Time.</p>
//         </div>

//         {/* Contact Details */}
//         <div className="flex flex-col items-start">
//           <h2 className="text-lg font-semibold text-gray-800">Contact Us</h2>
//           <p className="mt-2 text-gray-600">Email: <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a></p>
          
//         </div>

//         {/* Social Links */}
//         <div className="flex flex-col items-start">
//           <h2 className="text-lg font-semibold text-gray-800">Our Policies</h2>
//           <div className="mt-2 flex flex-col space-y-1">
//             <a href="https://merchant.razorpay.com/policy/PS0QYmLgV7EJnk/terms" className="text-sm text-gray-600 hover:text-blue-500">Terms & Conditions</a>
//             <a href="https://merchant.razorpay.com/policy/PS0QYmLgV7EJnk/refund" className="text-sm text-gray-600 hover:text-blue-500">Cancellation & Refund Policy</a>
//             <a href="https://merchant.razorpay.com/policy/PS0QYmLgV7EJnk/shipping" className="text-sm text-gray-600 hover:text-blue-500">Shipping & Delivery Policy</a>
//           </div>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
//         <p>&copy; {new Date().getFullYear()} AANGAN. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default FooterComponent;
