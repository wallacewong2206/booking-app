import React, { useState } from "react";
import { auth, googleProvider } from "../firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/bookings");
    } catch (err) {
      setError("Failed to log in");
      console.error(err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/bookings");
    } catch (err) {
      setError("Failed to log in with Google");
      console.error(err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>
          {error && <p className="text-danger text-center">{error}</p>}
          <form onSubmit={handleLogin}>
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
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
          </form>
          <Button
            className="rounded-pill w-100 mt-3"
            variant="outline-danger"
            onClick={handleGoogleLogin}
          >
            <i className="bi bi-google"></i> Sign up with Google
          </Button>
          <div className="d-flex justify-content-between mt-3">
            <Link to="/register" className="btn btn-secondary">
              Register an Account
            </Link>
            <Link to="/password-reset" className="btn btn-secondary">
              Reset Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
