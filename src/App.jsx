import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import BookingList from "./components/BookingList.jsx";
import Register from "./components/Register.jsx"; // Corrected import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/bookings" element={<BookingList />} />
        <Route path="/register" element={<Register />} /> {/* Corrected path */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
