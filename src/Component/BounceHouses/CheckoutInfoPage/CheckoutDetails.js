import React, { useContext, useState } from 'react';
import Layout from '../../Layout';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from '../../CartContextProvider';

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { selectedDate, startTime, endTime, name, price, image } = location.state || {};

  const [quantity, setQuantity] = useState(1); // State to track selected quantity

  const formattedDate = selectedDate instanceof Date
    ? selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
    : selectedDate;
  const formattedStartTime = startTime instanceof Date ? startTime.toLocaleTimeString() : startTime;
  const formattedEndTime = endTime instanceof Date ? endTime.toLocaleTimeString() : endTime;

  const handleAddToCart = () => {
    const item = {
      name,
      price,
      image,
      quantity, // Add selected quantity to the cart
      selectedDate,
      startTime,
      endTime,
    };
    addToCart(item); // Add item to cart context
    navigate('/', { state: {  name,
      price,
      image,
      quantity, // Add selected quantity to the cart
      selectedDate,
      startTime,
      endTime, } }); // Navigate to PersonalInfo page
  };

  return (
    <Layout>
      <div className="bg-gray-100 p-4 md:p-8 lg:p-12 lg:mt-32 mx-4 mt-24 md:m-8 lg:m-12 rounded-xl">
        {/* Header with steps */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">1</div>
              <span className="text-blue-500 text-sm md:text-base">Cart</span>
            </div>
            <div className="w-16 h-px bg-gray-400"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-white flex items-center justify-center">2</div>
              <span className="text-gray-600 text-sm md:text-base">Customer Info</span>
            </div>
            <div className="w-16 h-px bg-gray-400"></div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center">3</div>
              <span className="text-gray-600 text-sm md:text-base">Pay</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart and Recommended Products */}
          <div className="col-span-2">
            {/* Shopping Cart */}
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <img
                  src={image}
                  alt="Bounce House"
                  className="w-16 h-16 md:w-20 md:h-20 object-cover"
                />
                <div className="text-sm md:text-base">
                  <div className="font-semibold">{name}</div>
                  <div className="text-gray-600">{formattedDate} {formattedStartTime} {" -> "} {formattedEndTime}</div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-sm md:text-base">
                    ${price} x 
                    <select
                      className="ml-2 border border-gray-300 p-1 rounded"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    >
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                    </select>
                    = ${price * quantity}
                  </div>
                  <button className="text-red-500">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Recommended Products */}
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4">
                People who ordered this have also ordered the following:
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <img
                    src="/images/chair.png"
                    alt="Chairs"
                    className="w-16 h-16 md:w-20 md:h-20 object-cover mx-auto"
                  />
                  <div className="mt-2">Chairs</div>
                </div>
                <div className="text-center">
                  <img
                    src={image}
                    alt="Tables"
                    className="w-16 h-16 md:w-20 md:h-20 object-cover mx-auto"
                  />
                  <div className="mt-2">Tables</div>
                </div>
                <div className="text-center">
                  <img
                    src="/images/jenga.png"
                    alt="Jumbo Jenga"
                    className="w-16 h-16 md:w-20 md:h-20 object-cover mx-auto"
                  />
                  <div className="mt-2">Jumbo Jenga</div>
                </div>
                <div className="text-center">
                  <img
                    src="/images/connect4.png"
                    alt="Jumbo Connect 4"
                    className="w-16 h-16 md:w-20 md:h-20 object-cover mx-auto"
                  />
                  <div className="mt-2">Jumbo Connect 4</div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md">
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
                  <span>${price * quantity}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Tax: 8.25%</span>
                  <span>${(price * quantity * 0.0825).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold mt-4">
                  <span>Total</span>
                  <span>${(price * quantity * 1.0825).toFixed(2)}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6">
                <button
                  className="bg-orange-500 text-white py-2 px-4 rounded-lg w-full mb-4"
                  onClick={handleAddToCart}
                >
                  Add to Cart &gt;&gt;
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
