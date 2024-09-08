import React, { useState } from 'react';

export default function Inventory() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div>

<div className="relative">
<button
  onClick={toggleDropdown}
  className="text-white bg-blue-700 px-4 py-2 rounded-lg focus:outline-none"
>
  Inventory
</button>
{isOpen && (
  <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-96">
    <div className="grid grid-cols-3 gap-4 p-4">
      <a
        href="https://dev.rental        .software/io-colorful497/rentals/bounce-houses/"
        className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        <img
          src={`${process.env.PUBLIC_URL}/Images/bounces_house.png`}
          alt="Bounce Houses"
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <h3 className="text-lg font-semibold mt-2">Bounce Houses</h3>
        <p className="text-sm text-gray-500">
          Inflatable bounce houses are great to get some energy out...
        </p>
      </a>
      <a
        href="https://dev.rental.software/io-colorful497/rentals/interactive-inflatables/"
        className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        <img
          src={`${process.env.PUBLIC_URL}/Images/bounces_house.png`}
          alt="Interactive Inflatables"
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <h3 className="text-lg font-semibold mt-2">Interactive Inflatables</h3>
        <p className="text-sm text-gray-500">
          These inflatable items are sometimes known as carnival games...
        </p>
      </a>
      <a
        href="https://dev.rental.software/io-colorful497/rentals/concessions/"
        className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
      >
        <img
          src='Images/bounces_house.png'
          alt="Concessions"
          className="w-full h-32 object-cover rounded-t-lg"
        />
        <h3 className="text-lg font-semibold mt-2">Concessions</h3>
        <p className="text-sm text-gray-500">
          Concession machines are a must for parties to provide a light snack...
        </p>
      </a>
      {/* Add more cards similarly */}
    </div>
  </div>
)}
</div>


    </div>
  )
}
