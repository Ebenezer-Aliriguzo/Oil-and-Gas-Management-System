import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const loginUrl = 'https://my-api-url.com/login'; // Replace with your login URL
  const forgetPasswordUrl = 'https://my-api-url.com/forget-password'; // Replace with your password reset URL

  const scrollToForm = () => {
    setTimeout(() => {
      const formElement = document.getElementById('loginForm');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // Delay ensures DOM updates before scrolling
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleForgetPasswordChange = (e) => {
    setForgetPasswordEmail(e.target.value);
  };

  const handleForgetPasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(forgetPasswordUrl, { email: forgetPasswordEmail });
      if (response.status === 200) {
        alert('Password reset link sent to your email.');
      } else {
        alert('Failed to send password reset link, please try again.');
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      alert('An error occurred, please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(loginUrl, formData);
      if (response.status === 200) {
        alert('Login successful!');
        // Save token or redirect
      } else {
        alert('Login failed, please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred, please try again.');
    }
  };

  const handleForgetPasswordClick = () => {
    setShowForgetPassword(true);
    scrollToForm();
  };

  const handleBackToLoginClick = () => {
    setShowForgetPassword(false);
    scrollToForm();
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container className={`loginForm ${showForgetPassword ? 'overlay' : ''}`} id="loginForm">
      {showForgetPassword ? (
        <>
          <Typography variant="h4" className="loginText">Forget Password</Typography>
          <form onSubmit={handleForgetPasswordSubmit}>
            <TextField
              label="Email"
              name="email"
              value={forgetPasswordEmail}
              onChange={handleForgetPasswordChange}
              fullWidth
              margin="normal"
              required
            />
            <Button type="submit" variant="contained" className="submitButton">
              Send Reset Link
            </Button>
            <Typography variant="body2" className="backToLoginText">
              Remember your password? <a href="#" onClick={handleBackToLoginClick}>Back to Login</a>
            </Typography>
          </form>
        </>
      ) : (
        <>
          <Typography variant="h4" className="loginText">Login</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button type="submit" variant="contained" className="submitButton">
              Login
            </Button>
            <Typography variant="body2" className="forgetPasswordText">
              <a href="#" onClick={handleForgetPasswordClick}>Forget Password?</a>
            </Typography>
            <Typography variant="body2" className="signupText">
              Don't have an account? <a href="#" onClick={() => navigate('/signup')}>Sign Up</a>
            </Typography>
          </form>
        </>
      )}
    </Container>
  );
};

export default Login;
