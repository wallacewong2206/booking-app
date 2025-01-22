import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import BookingList from "./components/BookingList.jsx";
import Register from "./components/Register.jsx";
import PasswordReset from "./components/PasswordReset.jsx"; // Import PasswordReset

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/bookings" element={<BookingList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-reset" element={<PasswordReset />} />{" "}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
