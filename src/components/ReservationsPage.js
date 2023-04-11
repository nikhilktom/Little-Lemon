import React from 'react';
import "./styles/ReservationsContent.css";
import Form from './Form';

function ReservationsPage() {

  return (
    <div className="res-content-wrapper">
        <div className="res-content-container">
            <div className="text">
                <h2>Indulge in a culinary journey through the Mediterranean.</h2>
                <p>At Little Lemon, we strive to offer our guests a true taste of the Mediterranean with a touch of elegance.</p>
                <p>Book a table with us to embark on this journey.</p>
            </div>
            <div className="form">
                <h1>Make a Reservation</h1>
                <p>Complete and submit the form below to reserve your table at Little Lemon.</p>
                <Form />
            </div>
        </div>
    </div>
  )
}

export default ReservationsPage;
