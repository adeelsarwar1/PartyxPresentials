import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Import the cart icon

function Nav() {
  const [isInventoryOpen, setInventoryOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 z-50 p-4 h-20 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {/* Book Now Button */}
        <button className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-blue-600">
          Book Now
        </button>

        {/* Inventory Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setInventoryOpen(true)}
          onMouseLeave={() => setInventoryOpen(false)}
        >
          <button className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-gray-600">
            Inventory
          </button>
          {isInventoryOpen && (
            <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-96">
              <div className="grid grid-cols-3 gap-4 p-4">
                {/* Add your card items here */}
                <a
                  href="https://dev.rental.software/io-colorful497/rentals/bounce-houses/"
                  className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  <img
                    src="https://dev.rental.software/io-colorful497/wp-content/uploads/2024/08/Castle_946814_big.jpg"
                    alt="Bounce Houses"
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <h3 className="text-lg font-semibold mt-2">Bounce Houses</h3>
                </a>
                {/* Repeat the above structure for other items */}
              </div>
            </div>
          )}
        </div>

        {/* About Us Dropdown */}
        <div
          className="relative group"
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-gray-600">
            About Us
          </button>
          {isAboutOpen && (
            <div className="absolute bg-white shadow-lg rounded mt-2 w-48">
              <ul className="p-2">
                {["Option 1", "Option 2", "Option 3", "Option 4"].map(
                  (option, index) => (
                    <li
                      key={index}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                    >
                      {option}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Cart Button */}
      <button className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-green-600">
      <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
      </button>
    </nav>
  );
}

export default Nav;
