import React, { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function PasswordReset() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent!");
      setError(null);
    } catch (err) {
      setError("Failed to send password reset email");
      setMessage(null);
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Password Reset</h2>
      {message && <p className="text-success">{message}</p>}
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handlePasswordReset}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send Password Reset Email
        </button>
      </form>
    </div>
  );
}

export default PasswordReset;
