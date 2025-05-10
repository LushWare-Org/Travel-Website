import React from 'react';
import { Container, Typography, Grid, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

const PurpleAccordion = styled(Accordion)({
  backgroundColor: '#226C9A',
  color: 'white',
  borderRadius: 4,
  marginBottom: 1,
});

const DarkGrayAccordionDetails = styled(AccordionDetails)({
  backgroundColor: '#CEE3FF',
  color: 'black',
  borderRadius: 4,
  marginBottom: 1,
});

const CustomExpandMoreIcon = styled(ExpandMoreIcon)({
  color: '#fde2e4', 
});

const FAQAccordion = () => {
  return (
    <Container>
      <br />
      <br />
      <Typography variant="h3" textAlign="center" color="#0A369D" fontFamily="Dancing Script">
        Frequently Asked Questions
      </Typography>
      <br />
      <br />
      <Box width="90%" margin="auto">
        <Grid container spacing={2}>
          {/* Question 1 */}
          <Grid item xs={12}>
            <PurpleAccordion>
              <AccordionSummary expandIcon={<CustomExpandMoreIcon />}>
                <Typography>What services does Holiday Life Travel Agency offer?</Typography>
              </AccordionSummary>
              <DarkGrayAccordionDetails>
                <Typography>
                  We offer customized travel packages, including flight bookings, hotel accommodations, transportation, guided tours, and special experiences tailored to your preferences. 
                  Our services cover a wide range of travel styles, from luxury vacations and family trips to adventure tours and cultural explorations.
                </Typography>
              </DarkGrayAccordionDetails>
            </PurpleAccordion>
          </Grid>
          {/* Question 2 */}
          <Grid item xs={12}>
            <PurpleAccordion>
              <AccordionSummary expandIcon={<CustomExpandMoreIcon />}>
                <Typography>Can I customize my travel itinerary?</Typography>
              </AccordionSummary>
              <DarkGrayAccordionDetails>
                <Typography>
                  Absolutely! We specialize in creating personalized itineraries to match your interests, budget, and schedule. 
                  Whether you want to add specific activities, extend your stay, or explore off-the-beaten-path destinations, we can tailor your trip accordingly.
                </Typography>
              </DarkGrayAccordionDetails>
            </PurpleAccordion>
          </Grid>
          {/* Question 3 */}
          <Grid item xs={12}>
            <PurpleAccordion>
              <AccordionSummary expandIcon={<CustomExpandMoreIcon />}>
                <Typography>How does Holiday Life ensure the safety of travelers?</Typography>
              </AccordionSummary>
              <DarkGrayAccordionDetails>
                <Typography>
                  Your safety is our top priority. We partner with trusted service providers, adhere to international safety standards, and offer 24/7 support during your trip. 
                  Additionally, we provide comprehensive travel insurance options for added peace of mind.
                </Typography>
              </DarkGrayAccordionDetails>
            </PurpleAccordion>
          </Grid>
          {/* Question 4 */}
          <Grid item xs={12}>
            <PurpleAccordion>
              <AccordionSummary expandIcon={<CustomExpandMoreIcon />}>
                <Typography>Are there packages for specific occasions like honeymoons or anniversaries?</Typography>
              </AccordionSummary>
              <DarkGrayAccordionDetails>
                <Typography>
                  Yes, we offer exclusive packages for special occasions, including honeymoons, anniversaries, and destination weddings. 
                  These packages include romantic experiences like private dinners, luxurious accommodations, and customized activities to make your celebration unforgettable.
                </Typography>
              </DarkGrayAccordionDetails>
            </PurpleAccordion>
          </Grid>
          {/* Question 5 */}
          <Grid item xs={12}>
            <PurpleAccordion>
              <AccordionSummary expandIcon={<CustomExpandMoreIcon />}>
                <Typography>How can I contact Holiday Life for assistance during my trip?</Typography>
              </AccordionSummary>
              <DarkGrayAccordionDetails>
                <Typography>
                  You can reach us 24/7 through our dedicated customer support hotline, email, or WhatsApp. 
                  Our team is always available to assist with any issues or changes to your itinerary, ensuring a smooth and stress-free travel experience.
                </Typography>
              </DarkGrayAccordionDetails>
            </PurpleAccordion>
          </Grid>
        </Grid>
      
      </Box>
    </Container>
  );
};

export default FAQAccordion;
