import React, { useState } from 'react';
import './Calendar.css'; // Import the CSS file for styling
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate for navigation
import { FadeLoader } from 'react-spinners'; // Import the prebuilt loader

const Calendar = () => {
  const location = useLocation(); // Get the current route
  const {name , price, image } = location.state || {};
  const navigate = useNavigate();
  const today = new Date(); // Get today's date
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false); // State to control loader visibility

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const days = getDaysInMonth(currentYear, currentMonth);

  // Weekday names to display at the top of the calendar
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Calculate the number of blank days before the first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const blanks = Array(firstDayOfMonth).fill(null);

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Handle date selection
  const handleDateClick = (date) => {
    setSelectedDate(date); // Set the selected date
    setLoading(true); // Show loader

    setTimeout(() => {
      if (location.pathname === '/BounceHouses/SelectDate') {
        navigate("/BounceHouses/SelectPartyTime", { state: { selectedDate: date, name:name, price:price, image:image  } }); // Navigate to a different route for Bounce Houses
      } else {
        navigate("/Order-by-date/PartyTime", { state: { selectedDate: date } });
      }
      setLoading(false); // Hide loader
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="calendar-container">
      {loading && (
          <div className="loader-overlay">
            <FadeLoader color="#ffff" size={100} />
          </div>
        )} {/* Show loader if loading is true */}
      <div className="calendar-header">
        <span>
          {new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} {currentYear}
        </span>
        <button onClick={handleNextMonth}>&gt;</button> {/* Next month button */}
      </div>
      <div className="calendar-grid">
        {weekdays.map((weekday, index) => (
          <div key={index} className="calendar-weekday">
            {weekday}
          </div>
        ))}
        {blanks.map((_, index) => (
          <div key={`blank-${index}`} className="calendar-day blank"></div>
        ))}
        {days.map((day, index) => (
          <div
            key={index}
            className={`calendar-day ${
              day < today && day.getMonth() === today.getMonth() && day.getFullYear() === today.getFullYear()
                ? 'past'
                : 'future'
            } ${
              selectedDate && selectedDate.toDateString() === day.toDateString() ? 'selected' : ''
            }`}
            onClick={() => handleDateClick(day)} // Handle click to select date
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
