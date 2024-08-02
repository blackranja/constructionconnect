import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col   
 md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Your   
 Brand</h3>
          <p className="text-sm mt-2">Copyright © {new Date().getFullYear()} Your Company</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <a href="#" className="text-sm hover:text-gray-300">About Us</a>
          <a href="#" className="text-sm hover:text-gray-300">Contact</a>
          <a href="#" className="text-sm hover:text-gray-300">Privacy Policy</a>
          {/* Add more links as needed */}
        </div>
        <div className="flex space-x-4">
          {/* Add social media icons here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;