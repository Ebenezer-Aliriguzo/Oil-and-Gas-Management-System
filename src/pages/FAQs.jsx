import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './FAQs.css';

const FAQs = () => {
  return (
    <Container className="faqs-container">
      <Typography variant="h4" className="faqs-title">Frequently Asked Questions</Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How do I place an order for gas?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can place an order for gas by visiting our Order Gas page and filling out the order form.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What sizes of gas cylinders do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer small (5kg), medium (12.5kg), and large (50kg) gas cylinders.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Do you provide installation services?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we provide professional installation services for gas stoves and systems.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What safety measures should I follow while using LPG at home?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Always keep the cylinder in an upright position, ensure good ventilation, check for leaks regularly with soapy water, and never store the cylinder near heat sources.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>How can I detect a gas leak?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can detect a gas leak by the distinct smell of LPG or by using a gas leak detector. If you suspect a leak, turn off the gas supply and contact us immediately.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Are there any maintenance tips for my gas appliances?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Regularly clean and check your gas appliances for wear and tear, ensure proper ventilation, and schedule professional maintenance checks annually.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Do you offer emergency services for gas leaks?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, we offer 24/7 emergency services for gas leaks. Please contact our emergency hotline for immediate assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What payment methods do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept various payment methods, including credit/debit cards, bank transfers, and mobile payment options.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Can I schedule regular gas deliveries?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can schedule regular gas deliveries by contacting our customer service team and setting up a delivery schedule that suits your needs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What should I do if my gas cylinder is empty?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If your gas cylinder is empty, you can request a refill or exchange by visiting our Order Gas page or contacting our customer service team.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default FAQs;