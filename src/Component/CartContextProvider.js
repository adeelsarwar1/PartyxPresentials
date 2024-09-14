// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';

// Create CartContext
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Store cart items

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]); // Add the new item to the cart
  };

  // Function to reset the cart
  const resetCart = () => {
    setCartItems([]);
  };

const removeFromCart = (itemToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item !== itemToRemove)
    );
  };

//   // Get the total item count
  const cartItemCount = cartItems.length;

//   // Get the total price
const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, resetCart, cartItemCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

