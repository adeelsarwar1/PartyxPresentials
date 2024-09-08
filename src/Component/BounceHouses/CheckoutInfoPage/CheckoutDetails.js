import React from 'react';
import Layout from '../../Layout';
import { useLocation, useNavigate } from 'react-router-dom';

const CartPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { selectedDate, startTime, endTime, name,price,image } = location.state || {};

    // Format the dates and times if they are Date objects
    const formattedDate = selectedDate instanceof Date
    ? selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
    : selectedDate;
  const formattedStartTime = startTime instanceof Date ? startTime.toLocaleTimeString() : startTime;
  const formattedEndTime = endTime instanceof Date ? endTime.toLocaleTimeString() : endTime;


    const HandleCheckout = () =>{
      
        navigate('/BounceHouses/PersonalInfo', { state: { startTime: startTime, endTime: endTime, selectedDate: selectedDate, name:name, price:price, image:image } })
    }
    return (
        <Layout>
        <div className="rounded-xl bg-gray-100 p-8 m-24 ">
          {/* Header with steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">1</div>
                <span className="text-blue-500">Cart</span>
              </div>
              <div className="w-16 h-px bg-gray-400"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">2</div>
                <span className="text-gray-600">Customer Info</span>
              </div>
              <div className="w-16 h-px bg-gray-400"></div>
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">3</div>
                <span className="text-gray-600">Pay</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart and Recommended Products */}
            <div className="col-span-2">
              {/* Shopping Cart */}
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
                <div className="flex items-center justify-between">
                  <img
                    src={image} // Use your image path here
                    alt="Bounce House"
                    className="w-20 h-20 object-cover"
                  />
                  <div className="text-sm">
                    <div className="font-semibold">{name}</div>
                    <div className="text-gray-600">{formattedDate} {formattedStartTime} {" -> "} {formattedEndTime}</div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-sm">${price} x 
                      <select className="ml-2 border border-gray-300 p-1 rounded">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                      = $125.00
                    </div>
                    <button className="text-red-500">
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Recommended Products */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">
                  People who ordered this have also ordered the following:
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <img
                      src="/images/chair.png" // Use actual image path
                      alt="Chairs"
                      className="w-20 h-20 object-cover mx-auto"
                    />
                    <div className="mt-2">Chairs</div>
                  </div>
                  <div className="text-center">
                    <img
                      src={image}
                      alt="Tables"
                      className="w-20 h-20 object-cover mx-auto"
                    />
                    <div className="mt-2">Tables</div>
                  </div>
                  <div className="text-center">
                    <img
                      src="/images/jenga.png"
                      alt="Jumbo Jenga"
                      className="w-20 h-20 object-cover mx-auto"
                    />
                    <div className="mt-2">Jumbo Jenga</div>
                  </div>
                  <div className="text-center">
                    <img
                      src="/images/connect4.png"
                      alt="Jumbo Connect 4"
                      className="w-20 h-20 object-cover mx-auto"
                    />
                    <div className="mt-2">Jumbo Connect 4</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold">Order #341</h3>
                  <button className="text-blue-500">Edit Date</button>
                </div>
                <div className="text-gray-600 mb-4">
                  {formattedDate} {formattedStartTime} {" -> "} {formattedEndTime}
                </div>

                <div className="border-t pt-4">
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

                {/* Buttons */}
                <div className="mt-6">
                  <button className="bg-orange-500 text-white py-2 px-4 rounded-lg w-full mb-4" onClick={HandleCheckout}>
                    Checkout &gt;&gt;
                  </button>
                  <div className="flex justify-between">
                    <button className="border border-gray-300 py-2 px-4 rounded-lg">Reset Order</button>
                    <button className="border border-gray-300 py-2 px-4 rounded-lg">Continue Shopping</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Layout>
    );
};

export default CartPage;
