import React from 'react';
import './BookAppointment.css'; // Import the CSS file

const BookAppointment = () => {
  return (
    <main className="book-appointment">
      <div className="appointment-container">
        <h1>Book an Appointment</h1>
        <p>
          Use this page to book an appointment at Ruhe Wellness. Choose a time and date that works for you, and start your wellness journey today!
        </p>
        {/* Placeholder for booking form or scheduling widget */}
        <button className="appointment-button">Start Booking</button>
      </div>
    </main>
  );
};

export default BookAppointment;
