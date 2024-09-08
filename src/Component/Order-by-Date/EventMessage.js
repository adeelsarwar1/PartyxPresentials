import React, { useState } from "react";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from 'react-spinners'; // Import the prebuilt loader

export const Instructions = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // State to control loader visibility

  const handleClick = () => {
    setLoading(true); // Show loader
    setTimeout(() => {
      navigate("/Order-by-date/Calander"); // Navigate after 2 seconds
    }, 2000); // 2 seconds delay
  };

  return (
    <Layout>
      <div className="flex flex-col justify-center content-center text-white text-center">
        <div className="pt-80 text-2xl font-bold">
          <div>Daily Rentals: Regular Price</div>
          <div>No charge for overnight</div>
          <div>Additional days: 75% more per day</div>
        </div>
        <div className="mt-24">
          <button
            className="bg-gray-600 rounded-full w-fit h-16 text-white font-semibold px-3"
            onClick={handleClick}
          >
            <div className="flex gap-2 justify-center items-center">
              <span className="text-xl">Choose Date</span>
              <span>
                <img
                  className="w-4"
                  width={50}
                  src="/Images/arrow.png"
                  alt="continue"
                />
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
