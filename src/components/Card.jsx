import React from 'react';

function Card({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
}


export default Card;