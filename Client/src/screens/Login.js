import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { Snackbar, Slide } from '@mui/material';
import './Login.css';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('');
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSnackbarMessage('');
    setSnackbarType('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:8000/api/users/login', {
        email: formData.email,
        password: formData.password,
      });

      const { token, user } = response.data;

      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('token', token);

      setSnackbarType('success');
      setSnackbarMessage(response.data.message || 'You logged in successfully.');
      setOpenSnackbar(true);

      setTimeout(() => {
        window.location.href = '/'; 
      }, 3000);
    } catch (error) {
      setSnackbarType('error');
      setSnackbarMessage(
        error.response?.data?.message || 'Login failed. Please try again.'
      );
      setOpenSnackbar(true);
    }
    setLoading(false);
  };

  const handleSocialLogin = (provider) => {
    const url = `http://localhost:8000/api/users/auth/${provider}`;
    window.location.href = url;
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const TransitionUp = (props) => {
    return <Slide {...props} direction="up" />;
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="slider">
            <img
              src="https://i.postimg.cc/YqvgFBcR/pexels-asadphoto-3319704.jpg"
              alt="Slide 1"
              className="sliderImage"
            />
          </div>
        </div>

        <div className="right">
          <div className="formContainer">
            <div className="logo">★</div>
            <h2 className="heading">Welcome Back and Please Login!</h2>
            <p className="subtext">Please enter your login details</p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
              <div className="passwordField">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input"
                  required
                />
                <span onClick={() => setShowPassword(!showPassword)} className="icon">
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember me
                  </label>
                </div>
                <Link to="/forgot-password" className="forgot-pass-link">
                  Forgot password?
                </Link>

              </div>

              <button type="submit" className="loginButton" disabled={loading}>
                {loading ? 'Logging In...' : 'Log In'}
              </button>
              <button
                type="button"
                className="googleButton"
                onClick={() => handleSocialLogin('google')}
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google"
                  className="socialIcon"
                />
                Log In with Google
              </button>
              <button
                type="button"
                className="facebookButton"
                onClick={() => handleSocialLogin('facebook')}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                  alt="Facebook"
                  className="socialIcon"
                />
                Log In with Facebook
              </button>
            </form>
            <p>
            <p>
            Don't have an account? <Link to="/register" className="link">Sign Up</Link>
          </p>
            </p>
          </div>
        </div>

        {/* Snackbar for success or error message */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000} 
          onClose={handleSnackbarClose}
          message={snackbarMessage}
          TransitionComponent={TransitionUp}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          ContentProps={{
            className: snackbarType === 'error' ? 'errorSnackbar' : 'successSnackbar',
          }}
        />
      </div><br></br><br></br>
      <Footer />
    </>
  );
};

export default Login;
