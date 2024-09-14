

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import react-router components
import Page from "./Component/Page";
import Review from "./Component/Review";
import MyComponent from "./Component/Whoweare";
import ContactUs from "./Component/ContactUs";
import Layout from "./Component/Layout";
import MainPage from "./Component/MainPage";
import { EventType } from "./Component/Order-by-Date/EventType";
import { Instructions } from "./Component/Order-by-Date/EventMessage";
import { SelectDate } from "./Component/Order-by-Date/SelectDate";
import { PartyTime } from "./Component/Order-by-Date/PartyTime.js/PTime";
import PackagesPage from "./Component/BounceHouses/SelectPackages";
import PackageDetails from "./Component/BounceHouses/PackageDetails";
import CartPage from "./Component/BounceHouses/CheckoutInfoPage/CheckoutDetails";
import PersonalInfo from "./Component/BounceHouses/CheckoutInfoPage/PersonalInfor";
import { CartProvider } from "./Component/CartContextProvider";
import CartPagee from "./Component/Cart";

function App() {
  return (
    <CartProvider>
    <Router> 
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage/>} /> 
          <Route path="/page" element={<Page />} />
          <Route path="/review" element={<Review />} /> 
          <Route path="/who-we-are" element={<MyComponent />} /> 
          <Route path="/contact-us" element={<ContactUs />} /> 
          {/* Order By Date Routes */}
          <Route path="/Order-by-date/EventType" element={<EventType/>} /> 
          <Route path="/Order-by-date/Instructions" element={<Instructions/>} /> 
          <Route path="/Order-by-date/Calander" element={<SelectDate/>} /> 
          <Route path="/Order-by-date/PartyTime" element={<PartyTime/>} /> 

          {/* Bounce Houses Routes */}
          <Route path="/BounceHouses/EventType" element={<EventType/>} /> 
          <Route path="/BounceHouses/Packages" element={<PackagesPage/>} /> 
          <Route path="/packages/:id" element={<PackageDetails/>} /> 
          <Route path="/BounceHouses/SelectDate" element={<SelectDate/>} /> 
          <Route path="/BounceHouses/SelectPartyTime" element={<PartyTime/>} /> 
          <Route path="/BounceHouses/PersonalDetails" element={<SelectDate/>} /> 
          <Route path="/BounceHouses/CartPage" element={<CartPage/>} /> 
          <Route path="/BounceHouses/Checkout" element={<CartPagee/>} /> 

          <Route path="/BounceHouses/PersonalInfo" element={<PersonalInfo/>} /> 
        </Routes>
      </Layout>
    </Router>
    </CartProvider>
  );
}

export default App;
