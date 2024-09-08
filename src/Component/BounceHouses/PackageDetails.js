import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const packagesData = [
  {
    id: 1,
    images: [
      '/Images/BounceHouses/bh-2.png',
      '/Images/BounceHouses/bh-1.png',
      '/Images/BounceHouses/bh-3.png',
      '/Images/BounceHouses/bh-4.png'
    ],
    name: 'Blue moonjump',
    price: 100,
    description: '13 x 13 Bluemoon Jump',
    details: 'The Blue Moon Jump is a vibrant, inflatable bounce house perfect for kids parties, offering hours of safe, energetic fun.',
  },
  {
    id: 2,
    images: [
      '/Images/SlidesWater/watersilde.png',
      '/Images/BounceHouses/bh-1.png',
      '/Images/BounceHouses/bh-3.png',
      '/Images/BounceHouses/bh-4.png'
    ],
    name: 'Green Slide ',
    price: 100,
    description: '16ft Green Slide',
    details: 'Green Slide: A fun-filled bouncy adventure for kids, bringing excitement and endless joy!',
  },
  // Add more packages as needed...
];

const PackageDetails = () => {
  const { id } = useParams();
  const packageDetails = packagesData.find(pkg => pkg.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(packageDetails.images[0]);

  if (!packageDetails) {
    return <div>Package not found</div>;
  }

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  return (
    <div className="container mx-auto px-4 pt-36">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">{packageDetails.name}</h1>
      <div className="flex  items-center">
        <div className="w-full max-w-4xl">
          {/* Main Image Display */}
          <div className="mb-4">
            <img
              src={currentImage}
              alt="Main Display"
              className="w-full h-96 object-contain rounded-lg shadow-md"
            />
          </div>
          {/* Thumbnails */}
          <div className="flex justify-center space-x-4">
            {packageDetails.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${packageDetails.name} ${index + 1}`}
                className={`w-32 h-32 object-cover rounded-lg cursor-pointer transition duration-300 ${
                  img === currentImage ? 'opacity-100' : 'opacity-50 blur-sm'
                }`}
                onClick={() => handleImageClick(img)}
              />
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl font-medium text-white">{packageDetails.description}</p>
          <p className="mt-4 text-xl text-white justify-start">{packageDetails.details}</p>
          <p className="mt-4 text-4xl font-bold text-black">${packageDetails.price}</p>
          <button className="mt-6 px-12 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
