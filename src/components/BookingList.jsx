import React, { useEffect, useState } from "react";
import axios from "axios";

function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("/api/bookings"); // Adjust the URL as needed
        setBookings(response.data);
      } catch (err) {
        setError("Error fetching bookings");
        console.error(err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="container">
      <h2>Bookings</h2>
      {error && <p className="text-danger">{error}</p>}
      <ul className="list-group">
        {bookings.map((booking) => (
          <li key={booking.id} className="list-group-item">
            {booking.title} - {booking.date} at {booking.time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookingList;
