import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContextProvider'; 
function Nav() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItemCount } = useContext(CartContext); 
  const handleCartClick = () => {
    navigate('/BounceHouses/Checkout',{ state: { startTime, endTime, selectedDate, name, price, image} });
  };

  const HomeButton = () => {
    navigate('/',{ state: { startTime, endTime, selectedDate, name, price, image } });
  };
  const [isInventoryOpen, setInventoryOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileInventoryOpen, setMobileInventoryOpen] = useState(false); // State for mobile inventory dropdown
  
  const { selectedDate, startTime, endTime, name, price, image  } = location.state || {};

  const NextPage = () => {
    navigate('/BounceHouses/Packages', { state: { startTime, endTime, selectedDate, Page: "BounceHouses" } });
  };

  const ObstacleCources = () => {
    navigate('/BounceHouses/Packages', { state: { startTime, endTime, selectedDate, Page: "ObstacleCources" } });
  };

  const WaterSlides = () => {
    navigate('/BounceHouses/Packages', { state: { startTime, endTime, selectedDate, Page: "WaterSlides" } });
  };
//  const cartonClick=()=>{
//   navigate('/BounceHouses/CartPage', { state: { startTime, endTime, selectedDate, Page: "WaterSlides" } });
//  }
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 z-50 p-4 flex gap-4 items-center h-20">
      <div className="flex items-center space-x-4">
        {/* Hamburger Icon for Mobile (using image) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <img src="/Images/burger-bar.png" alt="Menu" className="w-12 h-12" />
        </button>

        {/* Desktop Book Now Button */}
        <a href="/BounceHouses/EventType" className="hidden md:block no-underline bg-purple-900 text-white px-4 py-2 rounded hover:bg-blue-600">
          Book Now
        </a>
      </div>

      {/* Desktop Inventory Dropdown */}
      <div className="hidden md:flex relative items-center" onMouseEnter={() => setInventoryOpen(true)} onMouseLeave={() => setInventoryOpen(false)}>
        <button className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-gray-600">
          Inventory
        </button>
        {isInventoryOpen && (
          <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-96">
            <div className="grid grid-cols-3 gap-4 p-4">
              <div onClick={NextPage} className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="Images/bounceHouse.png" alt="Bounce Houses" className="w-full h-32 object-cover rounded-t-lg" />
                <h3 className="text-black text-lg font-semibold mt-2">Bounce Houses</h3>
              </div>
              <div onClick={ObstacleCources} className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="Images/Obstacles/file.png" alt="Obstacle Cources" className="w-full h-32 object-cover rounded-t-lg" />
                <h3 className="text-black text-lg font-semibold mt-2">Obstacle Cources</h3>
              </div>
              <div onClick={WaterSlides} className="block p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <img src="Images/slideee.png" alt="Water Slides" className="w-full h-32 object-cover rounded-t-lg" />
                <h3 className="text-black text-lg font-semibold mt-2">Water Slides</h3>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='flex-grow'></div>
      {/* Cart Button (using image instead of FontAwesome) */}
      <button
        className=" relative bg-white text-black px-4 py-2 rounded hover:bg-green-600" 
        onClick={handleCartClick}
        disabled={cartItemCount === 0}
      >
        <img src="/Images/cart.png" alt="Cart" className="w-6 h-6 inline" />
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900 z-50 flex flex-col items-start p-4 space-y-4">
        <div className='hover:bg-blue-600 w-full px-4 rounded-lg'>
  <div className="flex items-center gap-2 w-full">
    <img src="/Images/booking.png" alt="Book Now" className="w-8 h-8" />
    <a href="/BounceHouses/EventType" className="text-white no-underline w-full text-left px-4 py-2 hover:bg-blue-600 rounded text-xl">
      Book Now
    </a>
  </div>
  </div>
  <div className='hover:bg-blue-600 w-full px-4 rounded-lg'>
  <div className="flex items-center gap-2">
    <img src="/Images/home.png" alt="Home" className="w-8 h-8" />
    <a onClick={HomeButton} className="text-white no-underline w-full text-left px-4 py-2 text-xl hover:bg-blue-600 rounded">
      Home
    </a>
  </div>
</div>
  {/* Inventory Button for Mobile */}

  <div className='hover:bg-gray-600 w-full px-4 rounded-lg'>
  <div className="flex items-center gap-2">
    <img src="/Images/Inventory.png" alt="Inventory" className="w-8 h-8" />
    <button
      className="text-white w-full text-left px-4 py-2 hover:bg-gray-600 rounded flex items-center justify-between text-xl"
      onClick={() => setMobileInventoryOpen(!isMobileInventoryOpen)}
    >
      Inventory
    </button>
    <img src="/Images/down.png" alt="Inventory" className="w-6 h-6 flex-row-reverse" />
  </div>
  </div>

          {/* Mobile Inventory Dropdown */}
          {isMobileInventoryOpen && (
            <div className="w-full flex flex-col space-y-2 pl-4">
              <button className="text-white text-left px-4 py-2 hover:bg-gray-500 rounded" onClick={NextPage}>
                Bounce Houses
              </button>
              <button className="text-white text-left px-4 py-2 hover:bg-gray-500 rounded" onClick={ObstacleCources}>
                Obstacle Cources
              </button>
              <button className="text-white text-left px-4 py-2 hover:bg-gray-500 rounded" onClick={WaterSlides}>
                Water Slides
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}

export default Nav;
