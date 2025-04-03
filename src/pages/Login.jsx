import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Typography, TextField, Button } from '@mui/material';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showForgetPassword, setShowForgetPassword] = useState(false);
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState('');

  const navigate = useNavigate();
  const loginUrl = 'https://your-api-url.com/login'; // I will replace with my actual login URL
  const forgetPasswordUrl = 'https://your-api-url.com/forget-password'; // I will replace with my actual forget password URL

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
              Remember your password? <a href="#" onClick={() => setShowForgetPassword(false)}>Back to Login</a>
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
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
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