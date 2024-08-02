import React from 'react';

function Hero() {
  return (
    <div className="relative bg-cover bg-center h-screen">
      <img src="https://source.unsplash.com/random/1920x1080" alt="Hero Image" className="absolute inset-0 object-cover w-full h-full opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Welcome   
 to Our Website</h1>
        <p className="text-lg mt-4">Discover amazing things</p>
      </div>
    </div>
  );
}

export default Hero;