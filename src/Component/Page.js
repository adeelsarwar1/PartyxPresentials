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
    <h3 className="text-lg md:text-xl font-semibold mt-3">{heading}</h3>
    <p className="text-gray-600">{subheading}</p>
  </div>
);

const Page = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, startTime, endTime } = location.state || {};

  const NextPage = () => {
    navigate("/BounceHouses/Packages", {
      state: { startTime, endTime, selectedDate, Page: "BounceHouses" }
    });
  };
  const ObstacleCources = () => {
    navigate("/BounceHouses/Packages", {
      state: { startTime, endTime, selectedDate, Page: "ObstacleCources" }
    });
  };
  const WaterSlides = () => {
    navigate("/BounceHouses/Packages", {
      state: { startTime, endTime, selectedDate, Page: "WaterSlides" }
    });
  };
  const TableandChairs = () => {
    navigate("/BounceHouses/Packages", {
      state: { startTime, endTime, selectedDate, Page: "TableandChairs" }
    });
  };

  return (
    <div className="m-4 md:m-10 lg:m-28 p-4 md:p-6 min-h-screen">
      {/* Heading and Subheading */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 text-white">
          Page Heading
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white">
          Page Subheading with a brief description or additional information.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <a href="/Order-by-date/EventType" className="no-underline text-black">
          <Card image="Images/calendar.png" heading="Order-by-date" />
        </a>

        <div onClick={NextPage}>
          <Card image="Images/bounceHouse.png" heading="Bounce Houses" />
        </div>

        <div onClick={ObstacleCources}>
          <Card image="Images/Obstacles/file.png" heading="Obstacle Cources" />
        </div>

        <div onClick={WaterSlides}>
          <Card image="Images/slideee.png" heading="Water Rides" />
        </div>

        <div onClick={TableandChairs}>
          <Card image="Images/table.png" heading="Table & Chairs" />
        </div>
      </div>
    </div>
  );
};

export default Page;
