import React from 'react';
import { Link } from 'react-router-dom';

function Footer2() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="bg-gray-900 bg-opacity-20 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-2xl font-bold mb-4">Your Brand</h3>
          <p className="text-sm mb-4">Copyright © {new Date().getFullYear()} Your Company</p>
          <div className="flex space-x-4">
            {/* Add social media icons here */}
          </div>
        </div>
        <div className="mt-8">
          <Link to="#" className="text-sm hover:text-gray-300">About Us</Link>
          <Link to="#" className="text-sm hover:text-gray-300">Contact</Link>
          <Link to="#" className="text-sm hover:text-gray-300">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer2;
