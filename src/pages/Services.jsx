import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import './Signup.css';
import googleLogo from '../assets/google-logo.png';
import appleLogo from '../assets/apple-logo.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();
  const signupUrl = import.meta.env.VITE_APP_SIGNUP_URL;

  useEffect(() => {
    document.getElementById('signupForm').scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(signupUrl, formData);
      if (response.status === 200) {
        alert('Signup successful!');
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
      } else {
        alert('Signup failed, please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred, please try again.');
    }
  };

  const handleGoogleSignup = () => {
    window.location.href = 'https://accounts.google.com/signup';
  };

  const handleAppleSignup = () => {
    window.location.href = 'https://appleid.apple.com/account';
  };

  const handleNavigateToLogin = () => {
    navigate('/login');
    setTimeout(() => {
      const loginForm = document.getElementById('loginForm');
      if (loginForm) {
        loginForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); // slight delay for route change
  };

  const handleNavigateToTerms = () => {
    navigate('/termsofserviceandprivacypolicy');
  };

  return (
    <Container className="registrationForm" id="signupForm">
      <Typography variant="h4" className="signUpText">Sign Up</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
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
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" className="submitButton">
          Sign Up
        </Button>

        <Typography variant="body2" className="termsText">
          By signing up, you agree to the{' '}
          <a href="#" onClick={handleNavigateToTerms}>Terms of Service and Privacy Policy</a>, including Cookie Use.
        </Typography>

        <Box className="socialSignUp">
          <Button variant="contained" className="google-btn" onClick={handleGoogleSignup}>
            <img src={googleLogo} alt="Google Logo" className="social-logo" />
            Sign up with Google
          </Button>
          <Button variant="contained" className="apple-btn" onClick={handleAppleSignup}>
            <img src={appleLogo} alt="Apple Logo" className="social-logo" />
            Sign up with Apple
          </Button>
        </Box>

        <Typography variant="body2" className="loginText">
          Already have an account? <a href="#" onClick={handleNavigateToLogin}>Login</a>
        </Typography>
      </form>
    </Container>
  );
};

export default Signup;
