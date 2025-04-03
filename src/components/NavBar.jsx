import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CHIDEXLOGO1 from '../assets/chidestlogo1.png';
// import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleLoginClick = () => {
    navigate('/login');
    setTimeout(() => {
      document.getElementById('loginForm').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleOrderGasClick = () => {
    navigate('/order-gas');
    setTimeout(() => {
      document.getElementById('orderGasForm').scrollIntoView({ behavior: 'smooth' });
    }, 100); 
  };

  const handleContactUsClick = () => {
    navigate('/contact-us');
    setTimeout(() => {
      document.getElementById('contactUsForm').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSignupClick = () => {
    navigate('/signup');
    setTimeout(() => {
      document.getElementById('signupForm').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <img src={CHIDEXLOGO1} alt="Chidex Gas Plant Logo" height="130" className="navbar-logo" />
        </Box>
        <Button color="inherit" component={Link} to="/" className="navbar-button">Home</Button>
        <Button color="inherit" component={Link} to="/products" className="navbar-button">LPG Gas Products</Button>
        <Button color="inherit" component={Link} to="/about-us" className="navbar-button">About Us</Button>
        <Button color="inherit" onClick={handleOrderGasClick} className="navbar-button">Order Gas</Button>
        <Button color="inherit" component={Link} to="/services" className="navbar-button">Services</Button> 
        <Button color="inherit" component={Link} to="/safety-tips" className="navbar-button">Safety Tips</Button>
        <Button color="inherit" onClick={handleContactUsClick} className="navbar-button">Contact Us</Button>
        <Button color="inherit" component={Link} to="/faqs" className="navbar-button">FAQs</Button>
        <Button color="inherit" onClick={handleLoginClick} className="navbar-button">Login</Button>
        <Button color="inherit" onClick={handleSignupClick} className="navbar-button">Signup</Button>
       
        <div className="search">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: 'input-root',
              input: 'input-input',
            }}
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button variant="contained" className="search-button" onClick={handleSearchClick}>Search</Button>
        </div>
      </Toolbar>
      <marquee behavior="scroll" direction="left" scrollamount="10" className="navbar-marquee">
        🎉 Welcome to Chidex Gas Plant! Get the best deals on LPG Gas Products and Services. Reliable, Safe, and Affordable! Order Now and Enjoy Quick Delivery! 🚚💨
      </marquee>
    </AppBar>
  );
};

export default NavBar;