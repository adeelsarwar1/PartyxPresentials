import React, { useState } from 'react';
import Layout from '../Layout';
import { useNavigate, useLocation } from 'react-router-dom'; // Import useLocation for route checking
import { FadeLoader } from 'react-spinners'; // Import the loader from react-spinners

export const EventType = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current route
  const [loading, setLoading] = useState(false); // State to control loader visibility
  const {name , price, image } = location.state || {};
  const handleClick = () => {
    setLoading(true); // Show loader
    setTimeout(() => {
      // Check if the current route is /BounceHouses/EventType
      if (location.pathname === '/BounceHouses/EventType') {
        navigate("/BounceHouses/SelectDate",  { state: { name:name, price:price, image:image } }); // Navigate to a different route for Bounce Houses
      } else {
        navigate("/Order-by-date/Instructions"); // Default navigation route
      }
    }, 2000); // 2 seconds delay
  };

  return (
    <Layout>
      <div className='flex flex-col justify-center content-center text-white text-center'>
        <div className='pt-80 text-2xl font-bold'>
          What type of event will you be having?
        </div>
        <div className='mt-4'>
          <select className='w-96 border-none h-8 rounded-md text-black font-semibold px-2 text-lg'>
            <option>Backyard/Private</option>
            <option>School/Church/Festival</option>
          </select>
        </div>
        <div className='mt-24'>
          <button
            className="bg-gray-600 rounded-full w-fit h-16 text-white font-semibold px-3"
            onClick={handleClick}
          >
            <div className="flex gap-2 justify-center items-center">
              <span className="text-xl">Continue</span>
              <span>
                <img className="w-4" width={50} src='/Images/arrow.png' alt='continue'/>
              </span>
            </div>
          </button>
        </div>
        {loading && (
          <div className="loader-overlay">
            <FadeLoader color="#ffff" size={100} />
          </div>
        )} {/* Show loader if loading is true */}
      </div>
    </Layout>
  );
};
