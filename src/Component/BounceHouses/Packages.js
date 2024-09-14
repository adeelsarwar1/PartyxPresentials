import React from 'react';
import { Link } from 'react-router-dom';

const PackageContainer = ({ image, name, price, id }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md w-full sm:w-[90%] md:w-[65%] mx-auto ">
      <img src={image} alt={name} className="w-72 h-56 object-contain rounded-t-lg "/>
      <h2 className="text-xl font-semibold text-center">{name}</h2>
      <p className="mt-1 text-lg font-medium text-gray-700">${price}</p>
      <Link to={`/packages/${id}`} className="no-underline text-blue-600 text-lg mt-1">
        See Details
      </Link>
      <button className="mt-2 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
        Book Now
      </button>
    </div>
  );
};

export default PackageContainer;
