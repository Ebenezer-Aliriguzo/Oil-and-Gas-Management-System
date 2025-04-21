import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CHIDEXLOGO1 from '../assets/chidestlogo1.png';

const NavBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleNavigate = (path, scrollToId) => {
    navigate(path);
    if (scrollToId) {
      setTimeout(() => {
        const target = document.getElementById(scrollToId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setDrawerOpen(false); // close drawer after navigation
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchClick = () => {
    navigate(`/search?query=${searchQuery}`);
    setDrawerOpen(false);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'LPG Gas Products', path: '/products' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Order Gas', path: '/order-gas', scrollTo: 'orderGasForm' },
    { label: 'Services', path: '/services' },
    { label: 'Safety Tips', path: '/safety-tips' },
    { label: 'Contact Us', path: '/contact-us', scrollTo: 'contactUsForm' },
    { label: 'FAQs', path: '/faqs' },
    { label: 'Login', path: '/login', scrollTo: 'loginForm' },
    { label: 'Signup', path: '/signup', scrollTo: 'signupForm' },
  ];

  return (
    <AppBar position="static" className="navbar">
      <Toolbar className="toolbar">
        {/* Hamburger Menu (Mobile Only) */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleToggleDrawer}
          className="menu-icon"
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Box sx={{ flexGrow: 1 }}>
          <img src={CHIDEXLOGO1} alt="Chidex Gas Plant Logo" height="130" className="navbar-logo" />
        </Box>

        {/* Desktop Menu */}
        <Box className="desktop-menu">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              color="inherit"
              className="navbar-button"
              component={Link}
              to={item.path}
              onClick={() => handleNavigate(item.path, item.scrollTo)}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {/* Search Box */}
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
          <Button variant="contained" className="search-button" onClick={handleSearchClick}>
            Search
          </Button>
        </div>
      </Toolbar>

      {/* Drawer Menu (Mobile Only) */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleToggleDrawer}>
        <List className="mobile-menu">
          {menuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={() => handleNavigate(item.path, item.scrollTo)}
              className="menu-item"
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default NavBar;
