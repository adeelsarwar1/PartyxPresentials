import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedDate, startTime, endTime } = location.state || {};

  // Format the dates and times if they are Date objects
  const formattedDate = selectedDate instanceof Date
    ? selectedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
    : selectedDate;
  const formattedStartTime = startTime instanceof Date ? startTime.toLocaleTimeString() : startTime;
  const formattedEndTime = endTime instanceof Date ? endTime.toLocaleTimeString() : endTime;
 const HandleChangeDate = () =>{
navigate("/Order-by-date/Calander")
 }

  return (
    <>
      {/* <Nav/> */}
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg')",
        }}
      >
        {/* Overlay for background dimming */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content section */}
        <div className="relative z-10 py-10 px-5 mt-12 text-white text-xl font-bold">
          {/* Make sure the z-index is higher than the background overlay */}
          <a 
            href="https://wa.me/+19562931353" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="relative z-20 no-underline " // Ensuring link is above other elements
          >
          <div className='flex gap-4'>
           <img src='Images/whatsapp.png' alt='whatsapp' width={40}/> <span className='text-3xl text-white'>956-293-1353</span>
           </div>
          </a>
        </div>

        {/* Main content area */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        {formattedDate && (
        <div className='flex gap-2 bg-white w-full text-black justify-center py-4 mb-4 font-semibold text-2xl'>
        {formattedDate && (
            <div className="text-2xl ">
               {formattedDate} {" "}
            </div>
          )}
          {formattedStartTime && (
            <div className="text-2xl">
               {formattedStartTime} {" -> "}
            </div>
          )}
          {formattedEndTime && (
            <div className="text-2xl">
              {formattedEndTime}
            </div>
          )}
          <button className='text-xl flex justify-end content-end ml-20 text-red-500 ' onClick={HandleChangeDate}>
            change date
          </button>
        </div>
        )}
          <div>
            <h1
              className="text-4xl md:text-6xl font-bold animate-bounce mb-4"
              style={{ marginLeft: '-10px' }}
            >
              Bounces Rental
            </h1>
            <p
              className="text-lg md:text-xl mb-8 animated-line"
              style={{ marginRight: '-10px' }}
            >
              Your go-to place for the best bounce houses and party rentals!
            </p>
          </div>

          {/* Conditional rendering for date and time */}
         

          {/* Image centered in the middle of the page */}
          <div className="mb-40">
            <img src="Images/logo.png" alt="abc" width={350} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
