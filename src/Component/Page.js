import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ image, heading, subheading }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg">
    <img
      src={image}
      alt={heading}
      height={200}
      className="w-full h-64 object-contain rounded-t-lg"
    />
    <h3 className=" text-xl font-semibold mt-3">{heading}</h3>
    <p className="text-white-600">{subheading}</p>
  </div>
);

const Page = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, startTime, endTime} = location.state || {};
  const NextPage = () =>{
    navigate('/BounceHouses/Packages', { state: {  startTime: startTime, endTime: endTime, selectedDate: selectedDate  } })
  }
  return(
  <div className="m-28  min-h-screen p-6 ">
    {/* Heading and Subheading */}
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
        Page Heading
      </h1>
      <p className="text-lg md:text-xl text-white-700 text-white">
        Page Subheading with a brief description or additional information.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <a href="/Order-by-date/EventType" className="no-underline text-black">
        <Card image="Images/calendar.png" heading="Order-by-date" />
      </a>
      {/* <a href="/BounceHouses/Packages" className="no-underline text-black"> */}
      <div onClick={NextPage}>
      <Card image="Images/bounceHouse.png" heading="Bounce Houses" />
      </div>
      {/* </a> */}
      <Card image="" heading="Interactive Inflatables" />
      <Card image="Images/slideee.png" heading="Water Rides" />
      <Card image="Images/slid.png" heading="Slides & Combos" />
      <Card image="Images/table.png" heading="Table & Chairs" />
    </div>
  </div>
);
}

export default Page;
