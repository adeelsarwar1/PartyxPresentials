import React, { useState, useEffect } from 'react';
import Layout from '../../Layout';
import { useLocation, useNavigate } from 'react-router-dom';
import timeOptions from './Timeoptions'; // Import the time options
import { FadeLoader } from 'react-spinners'; // Import the prebuilt loader


export const PartyTime = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, name , price, image } = location.state || {};

  const [startTime, setStartTime] = useState(''); // State for selected start time
  const [endTime, setEndTime] = useState(''); // State for selected end time
  const [loading, setLoading] = useState(false); // State for loader visibility

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  useEffect(() => {
    if (startTime && endTime) {
      setLoading(true); 
      setTimeout(() => {
        if (location.pathname === '/BounceHouses/SelectPartyTime') {
          navigate('/BounceHouses/CartPage', { state: { startTime: startTime, endTime: endTime, selectedDate: selectedDate, name:name, price:price, image:image } }); 
        } else {
          navigate("/", { state: { startTime: startTime, endTime: endTime, selectedDate: selectedDate } }); 
        }

        setLoading(false); 
      }, 2000); 
    }
  }, [startTime, endTime, navigate]);

  return (
    <Layout>
      {loading && (
          <div className="loader-overlay">
            <FadeLoader color="#ffff" size={100} />
          </div>
        )} 
      <div className='flex flex-col justify-center items-center h-screen text-white text-center'>
        <div className='text-2xl font-bold mb-2 border border-green-50 flex flex-col justify-center items-center w-1/3'>
          <div className='border border-b-green-50 w-full py-2 flex justify-center gap-2 mb-3'>
            <img src='/Images/calendar.png' alt='calendar' width={30} />
            {selectedDate ? `${new Date(selectedDate).toDateString()}` : 'No date selected'}
          </div>

          <div className='flex flex-col justify-center'>
            <div className='mb-4'>
              <select 
                className='w-96 border-none h-8 rounded-md text-black font-semibold px-2 text-lg'
                value={startTime}
                onChange={handleStartTimeChange}
              >
                <option value='' disabled>- Select Start Time -</option>
                {timeOptions.map((time, index) => (
                  <option key={index} value={time}>{time}</option>
                ))}
              </select>
            </div>
            {startTime && (
              <div className='mb-4'>
                <select 
                  className='w-96 border-none h-8 rounded-md text-black font-semibold px-2 text-lg'
                  value={endTime}
                  onChange={handleEndTimeChange}
                >
                  <option value='' disabled>- Select End Time -</option>
                  {timeOptions.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

