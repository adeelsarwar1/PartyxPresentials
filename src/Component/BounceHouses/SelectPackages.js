import React from 'react';
import Layout from '../Layout';
import PackageContainer from './Packages';
import { useLocation, useNavigate } from 'react-router-dom';

const PackagesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, startTime, endTime } = location.state || {};

  const packages = [
    {
      id: 1,
      image: '/Images/BounceHouses/bh-2.png',
      name: 'Blue moonjump',
      price: 100,
    },
    {
      id: 2,
      image: '/Images/SlidesWater/watersilde.png',
      name: 'Package 2',
      price: 150,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150',
      name: 'Package 3',
      price: 200,
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150',
      name: 'Package 4',
      price: 250,
    },
  ];

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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Packages</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
