import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Button,
  IconButton,
  Box,
  useMediaQuery
} from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const center = {
  lat: 6.9271,
  lng: 79.8612,
};

function useDeviceType() {
  const [deviceType, setDeviceType] = useState({
    isMobile: window.innerWidth <= 768,
    isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
  });

  useEffect(() => {
    const handleResize = () => {
      setDeviceType({
        isMobile: window.innerWidth <= 768,
        isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}

const Footer = () => {
  const { isMobile, isTablet } = useDeviceType();

  const handleNavigation = (destination) => {
    console.log(`Navigating to ${destination}`);
  };

  // Inline style objects:
  const appBarStyle = {
    backgroundColor: '#023e8a',
    padding: isMobile || isTablet ? '20px 0' : '0px 0 30px 0',
    marginTop: 'auto', 
  };

  const containerStyle = {
    maxWidth: '1200px', 
    margin: '0 auto',
  };

  const logoContainerStyle = {
    marginBottom: '20px',
    marginLeft: isMobile ? '0px' : '40px',
    textAlign: isMobile ? 'center' : 'left',
  };

  const logoImgStyle = {
    height: isMobile ? '60px' : '80px',
    objectFit: 'contain',
    padding: isMobile? '0 30vw' : isTablet? '0 30vw' : 'none'
  };

  const contactItemStyle = {
    color: '#fff',
    marginBottom: '20px',
    display: 'flex',
    alignItems: 'center',
    padding: isMobile? '0 12vw' : isTablet? '0 28vw' : '0'
  };

  const contactIconStyle = {
    marginRight: '15px',
    fontSize: '28px',
  };

  const contactTextStyle = {
    fontSize: isMobile ? '14px' : '16px',
  };

  const sectionTitleStyle = {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: isMobile|| isTablet ? '10px' : '20px',
    marginTop: isMobile? '40px' :isTablet ? '0' : '15px',
    textAlign: 'center',
  };

  const socialIconsContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: isMobile? '0 23vw' : isTablet? '0 34vw' : '0 5vw'
  };

  const iconBtnStyle = {
    color: '#fff',
    marginRight: '15px',
    transition: 'transform 0.3s ease',
  };

  // Quick links
  const quickLinksContainerStyle = {
    display: 'flex',
    flexDirection: isMobile || isTablet? 'row' : 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: isMobile? '0 16vw' : isTablet? '0 30vw' : '0'
  };

  const quickLinkBtnStyle = {
    color: '#fff',
    fontSize: isMobile ? '14px' : '16px',
    margin: '5px 0',
    fontWeight: 500,
    transition: 'color 0.3s ease',
    textTransform: 'none', // ensure normal text
  };

  // Map container
  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  };

  const mapTitleStyle = {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: isTablet || isMobile ? '30px' : '0',
    marginBottom: '20px',
    textAlign: 'center',
  };

  // Bottom text
  const bottomBoxStyle = {
    textAlign: 'center',
    marginTop: isMobile ? '20px' : '40px',
  };

  const bottomTextStyle = {
    color: '#fff',
    fontSize: '14px',
  };

  // For hover effects on social icons:
  const handleIconMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.2)';
  };
  const handleIconMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  // For hover effects on "Quick Links" buttons (change color):
  const handleQuickLinkHoverEnter = (e) => {
    e.currentTarget.style.color = '#90e0ef'; // lighten on hover
  };
  const handleQuickLinkHoverLeave = (e) => {
    e.currentTarget.style.color = '#fff';
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Container style={containerStyle}>
        <Grid
          container
          spacing={isMobile ? 2 : 6} 
          style={{ marginTop: 0 }}
        >
          <Grid item xs={12} md={4}>
            <div style={{ padding: isMobile ? '0 0vw' : isTablet ? '0 0vw' : '0 0 0 2vw' }}>
              <div style={logoContainerStyle}>
                  <img
                    src="https://i.postimg.cc/6Q1tcM0S/HL1.png"
                    alt="Holiday Life Logo"
                    style={logoImgStyle}
                  />
                </div>
                <Box style={contactItemStyle}>
                  <HomeIcon style={contactIconStyle} />
                  <Typography variant="body1" style={contactTextStyle}>
                    123 Main Street, Colombo, Sri Lanka
                  </Typography>
                </Box>
                <Box style={contactItemStyle}>
                  <PhoneIcon style={contactIconStyle} />
                  <Typography variant="body1" style={contactTextStyle}>
                    Phone: +94 91 565 8956
                  </Typography>
                </Box>
                <Box style={contactItemStyle}>
                  <EmailIcon style={contactIconStyle} />
                  <Typography variant="body1" style={contactTextStyle}>
                    Email: example@example.com
                  </Typography>
                </Box>
            </div>
            <Box>
              <Typography variant="h5" gutterBottom style={sectionTitleStyle}>
                Connect With Us
              </Typography>
              <div style={socialIconsContainerStyle}>
                {[
                  { icon: <Facebook />, label: 'facebook' },
                  { icon: <Twitter />, label: 'twitter' },
                  { icon: <Instagram />, label: 'instagram' },
                  { icon: <LinkedIn />, label: 'linkedin' },
                ].map(({ icon, label }, index) => (
                  <IconButton
                    key={index}
                    aria-label={label}
                    style={iconBtnStyle}
                    onMouseEnter={handleIconMouseEnter}
                    onMouseLeave={handleIconMouseLeave}
                  >
                    {icon}
                  </IconButton>
                ))}
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} style={{  }}>
            <Box>
              <Typography variant="h5" gutterBottom style={sectionTitleStyle}>
                Quick Links
              </Typography>
              <Grid container style={quickLinksContainerStyle}>
                {['Home', 'Rooms', 'Contact Us'].map((link, index) => (
                  <Button
                    key={index}
                    variant="text"
                    component={Link}
                    to={`/${link.toLowerCase().replace(' ', '')}`}
                    style={quickLinkBtnStyle}
                    onMouseEnter={handleQuickLinkHoverEnter}
                    onMouseLeave={handleQuickLinkHoverLeave}
                    onClick={() => handleNavigation(link)}
                  >
                    {link}
                  </Button>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Map */}
          <Grid item xs={12} md={4}>
            <Box textAlign="center">
              <Typography variant="h5" gutterBottom style={mapTitleStyle}>
                Find Us Here
              </Typography>
              <LoadScript googleMapsApiKey="AIzaSyBhJYhA-bRJgkniJETT1BY6I1C4fEexfdc">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={14}
                >
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box style={bottomBoxStyle}>
          <Typography variant="body2" style={bottomTextStyle}>
            &copy; {new Date().getFullYear()} The Holiday Life. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
