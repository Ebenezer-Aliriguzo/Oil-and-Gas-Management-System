import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import axios from 'axios';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactUrl = 'process.env.REACT_APP_CONTACT_URL'; // I will put my contact URL here

  useEffect(() => {
    document.getElementById('contactUsForm').scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(contactUrl, formData);
      if (response.status === 200) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        alert('Failed to send message, please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred, please try again.');
    }
  };

  return (
    <Container className="contact-us-container" id="contactUsForm">
      <Typography variant="h4" className="contact-us-title">Contact Us</Typography>
      <form onSubmit={handleSubmit} className="contact-us-form">
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
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" className="send-message-button">
          Send Message
        </Button>
      </form>
    </Container>
  );
};

export default ContactUs;