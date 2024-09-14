import React from 'react';
import Layout from '../Layout';
import PackageContainer from './Packages';
import { useLocation, useNavigate } from 'react-router-dom';

const PackagesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, startTime, endTime, Page } = location.state || {};

  // Define packages for different types of pages
  const bounceHousesPackages = [
    {
      id: 1,
      image: '/Images/BounceHouses/bh-2.png',
      name: '13x13 Blue MoonJump',
      price: 100,
    },
    {
      id: 2,
      image: '/Images/BounceHouses/abcgccggggg.png',
      name: '15x15 Pink MoonJump',
      price: 150,
    },
  ];

  const waterSlidesPackages = [
    {
      id: 1,
      image: '/Images/Water-1.png',
      name: '12ft Water Slide',
      price: 120,
    },
    {
      id: 2,
      image: '/Images/Water-2.png',
      name: '15ft Water Slide',
      price: 180,
    },
  ];

  const obstacleCoursesPackages = [
    {
      id: 1,
      image: '/Images/Obstacles/70Fo.png',
      name: 'Water Slide',
      price: 120,
    },
    {
      id: 2,
      image: '/Images/Obstacles/74Obstacle.png',
      name: '40ft Obstacle Course',
      price: 200,
    },
  ];

  const TableChairs = [
    {
      id: 1,
      image: '/Images/Table-1.png',
      name: 'Table',
      price: 120,
    },
    {
      id: 2,
      image: '/Images/Table-2,png',
      name: 'Desk',
      price: 200,
    },
  ];


  // Conditionally render packages based on Page
  let packages = [];
  if (Page === 'BounceHouses') {
    packages = bounceHousesPackages;
  } else if (Page === 'WaterSlides') {
    packages = waterSlidesPackages;
  } else if (Page === 'ObstacleCources') {
    packages = obstacleCoursesPackages;
  }else  {
    packages = TableChairs;
  }


  // Handle package selection
  const handlePackageClick = (pkg) => {
    // Check if selectedDate, startTime, or endTime are empty or undefined
    if (!selectedDate || !startTime || !endTime) {
      // Navigate to EventType page if any of the values are empty
      navigate('/BounceHouses/EventType', {
        state: {
          name: pkg.name,
          price: pkg.price,
          image: pkg.image,
          startTime: startTime,
          endTime: endTime,
          selectedDate: selectedDate,
        },
      });
    } else {
      // Navigate to CartPage if all values are present
      navigate('/BounceHouses/CartPage', {
        state: {
          name: pkg.name,
          price: pkg.price,
          image: pkg.image,
          startTime: startTime,
          endTime: endTime,
          selectedDate: selectedDate,
        },
      });
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 mt-20">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Our Packages</h1>
        <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => handlePackageClick(pkg)}
              className="cursor-pointer"
            >
              <PackageContainer
                id={pkg.id}
                image={pkg.image}
                name={pkg.name}
                price={pkg.price}
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PackagesPage;
