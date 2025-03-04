import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 border-t">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Website Title */}
        <div className="flex flex-col items-start">
          <h1 className="text-2xl font-bold text-gray-800">AANGAN</h1>
          <p className="text-sm mt-2 text-gray-600">Crafting Nature's Elegance, One Handcrafted Treasure at a Time.</p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold text-gray-800">Contact Us</h2>
          <p className="mt-2 text-gray-600">Email: <a href="mailto:contact@example.com" className="text-blue-500 hover:underline">contact@example.com</a></p>
        
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-semibold text-gray-800">Follow Us</h2>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">Facebook</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-blue-500">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t pt-4 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} AANGAN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
