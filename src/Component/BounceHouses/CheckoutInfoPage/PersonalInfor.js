import React from 'react';
import Layout from '../../Layout';
import { useLocation, useNavigate } from 'react-router-dom';

const PersonalInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, startTime, endTime, name, price, image } = location.state || {};

  // Format the dates and times if they are Date objects
  const formattedDate = selectedDate instanceof Date
    ? selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
    : selectedDate;
  const formattedStartTime = startTime instanceof Date ? startTime.toLocaleTimeString() : startTime;
  const formattedEndTime = endTime instanceof Date ? endTime.toLocaleTimeString() : endTime;

  return (
    <Layout>
      <div className="rounded-xl bg-gray-100 p-4 md:p-8 mt-24 mx-8 md:m-12 lg:m-24">
        {/* Header with steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">1</div>
              <span className="text-blue-500 text-sm md:text-base">Cart</span>
            </div>
            <div className="w-16 h-px bg-gray-400"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">2</div>
              <span className="text-blue-500 text-sm md:text-base">Customer Info</span>
            </div>
            <div className="w-16 h-px bg-gray-400"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">3</div>
              <span className="text-gray-600 text-sm md:text-base">Pay</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact and Billing Information */}
          <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md col-span-2">
            <h2 className="text-lg md:text-xl font-semibold mb-6">1. Contact and Billing Information</h2>
            <form className="grid grid-cols-1 gap-4 md:gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-2 md:p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-2 md:p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="border border-gray-300 p-2 md:p-3 rounded-md w-full"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-300 p-2 md:p-3 rounded-md w-full"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="border border-gray-300 p-2 md:p-3 rounded-md w-full"
              />
              <input
                type="tel"
                placeholder="Secondary Phone"
                className="border border-gray-300 p-2 md:p-3 rounded-md w-full"
              />
              <input
                type="text"
                placeholder="Street Address"
                className="border border-gray-300 p-2 md:p-3 rounded-md w-full"
              />
            </form>
          </div>

          {/* Cart Details */}
          <div>
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold">Order #341</h3>
                <button className="text-blue-500">Edit Date</button>
              </div>
              <div className="text-gray-600 text-sm md:text-base">{formattedDate} {formattedStartTime} {" -> "} {formattedEndTime}</div>

              <div className="mt-8">
                <h3 className="font-semibold">Cart (1)</h3>
                <div className="flex items-center justify-between mt-4">
                  <img
                    src={image}
                    alt="Bounce House"
                    className="w-12 h-12 md:w-16 md:h-16 object-cover"
                  />
                  <div className="text-sm font-semibold">Blue Bounce House</div>
                  <div className="text-sm">${price} x 1 = $125.00</div>
                </div>
                <div className="flex justify-between mt-4">
                  <button className="text-blue-500">Edit Cart</button>
                </div>
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between">
                    <span>SubTotal</span>
                    <span>$125.00</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span>Tax: 8.25%</span>
                    <span>$10.31</span>
                  </div>
                  <div className="flex justify-between font-semibold mt-4">
                    <span>Total</span>
                    <span>$135.31</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalInfo;
