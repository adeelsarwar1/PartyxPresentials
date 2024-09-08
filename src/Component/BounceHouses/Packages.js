import React from 'react';
import { Link } from 'react-router-dom';

const PackageContainer = ({ image, name, price, id }) => {
  return (
    <div className="flex flex-col items-center p-4 m-4 bg-white rounded-lg shadow-md">
      <img src={image} alt={name} className="w-full h-64 object-cover rounded-t-lg" />
      <h2 className="mt-2 text-2xl font-semibold text-center">{name}</h2>
      <p className="mt-2 text-lg font-medium text-gray-700">${price}</p>
      <Link to={`/packages/${id}`} className="no-underline text-blue-600 text-lg mt-2">
        See Details
      </Link>
      <button className="mt-4 px-8 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
        Book Now
      </button>
    </div>
  );
};

export default PackageContainer;
