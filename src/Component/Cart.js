// src/pages/CartPagee.js
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CartContext } from './CartContextProvider';
import Layout from './Layout'; // Assuming Layout is your common layout

const CartPagee = () => {
    const location= useLocation();
  const { cartItems, totalPrice, removeFromCart } = useContext(CartContext); // Get cart items, total price, and remove function from context
  const { selectedDate, startTime, endTime, name, price, image } = location.state || {};
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Navigate to PersonalInfo page with cart state
    navigate('/BounceHouses/PersonalInfo', {
      state: { selectedDate, startTime, endTime, name, price:totalPrice, image }
    });
  };

  return (
    <Layout>
      <div className="bg-gray-100 p-4 md:p-8 lg:p-12 m-4 md:m-8 lg:m-12 rounded-xl">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {/* List Cart Items */}
            <div className="space-y-4 mb-8">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-600">Price: ${item.price}</p>
                    </div>
                  </div>
                  <button
                    className="text-red-500"
                    onClick={() => removeFromCart(item)}
                  >
                    <i className="fas fa-trash">anccc</i>
                  </button>
                </div>
              ))}
            </div>

            {/* Total Price */}
            <div className="bg-white p-4 rounded-lg shadow-md mb-8">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total Price:</span>
                <span className="text-lg font-bold">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Proceed to Checkout */}
            <button
              className="bg-green-500 text-white py-2 px-4 rounded-lg w-full"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CartPagee;
