// import React from 'react';
// import { AppBar, Toolbar, Typography, Container, Grid, Button, IconButton } from '@mui/material';
// import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
// import { Link } from 'react-router-dom';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const mapContainerStyle = {
//   width: '100%',
//   height: '300px',
// };

// // Coordinates for your hotel's location
// const center = {
//   lat: 6.9271,  // Latitude of your hotel
//   lng: 79.8612, // Longitude of your hotel
// };

// const Footer = () => {

//   const handleNavigation = (destination) => {
//     console.log(`Navigating to ${destination}`);
//   };

//   return (
//     <AppBar position="static" style={{ backgroundColor: '#023e8a', height: '85vh' }}>
//       <Container>
//         <Toolbar>
//           <Grid container spacing={6} alignItems="center" marginTop="20px">
//             <Grid item>
//               <div>
//                 <Typography variant="h3" gutterBottom style={{ color: '#fff' }}>
//                   The LUXURY Hotel
//                 </Typography>
//                 <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
//                   123 Main Street, Colombo, Sri Lanka
//                 </Typography>
//                 <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
//                   Phone: +94 91 565 8956
//                 </Typography>
//                 <Typography variant="h6" gutterBottom style={{ color: '#fff' }}>
//                   Email: example@example.com
//                 </Typography>
//               </div>
//             </Grid>

//             <Grid item xs={12} sm={6} md={3} style={{ display: 'flex', justifyContent: 'center' }}>
//               <Grid container direction="column" alignItems="center">
//                 <Button variant="text" component={Link} to="/" style={{ color: '#fff', marginTop: '0px' }} onClick={() => handleNavigation('Home')}>
//                   Home
//                 </Button><br></br>
//                 <Button variant="text" component={Link} to="/rooms" style={{ color: '#fff', marginTop: '10px' }} onClick={() => handleNavigation('Rooms')}>
//                   Rooms
//                 </Button><br></br>
//                 <Button variant="text" component={Link} to="/facilities" style={{ color: '#fff', marginTop: '10px' }} onClick={() => handleNavigation('Services')}>
//                   Services
//                 </Button><br></br>
//                 <Button variant="text" component={Link} to="/contact" style={{ color: '#fff', marginTop: '10px' }} onClick={() => handleNavigation('Contact Us')}>
//                   Contact Us
//                 </Button><br></br>
//                 <Button variant="text" component={Link} to="/login" style={{ color: '#fff', marginTop: '10px' }} onClick={() => handleNavigation('Contact Us')}>
//                   Login
//                 </Button><br></br>
//                 <Button variant="text" component={Link} to="/register" style={{ color: '#fff', marginTop: '10px' }} onClick={() => handleNavigation('Contact Us')}>
//                   Register
//                 </Button><br></br><br></br>
//               </Grid>
//             </Grid>

//             <Grid item xs={15} sm={6} md={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//               <Typography variant="h5" gutterBottom style={{ color: '#fff', textAlign: 'center' }}>
//                 Find Us Here
//               </Typography>

//               <LoadScript googleMapsApiKey="AIzaSyBhJYhA-bRJgkniJETT1BY6I1C4fEexfdc">
//                 <GoogleMap
//                   mapContainerStyle={mapContainerStyle}
//                   center={center}
//                   zoom={14}
//                 >
//                   <Marker position={center} />
//                 </GoogleMap>
//               </LoadScript><br></br>

//               <div style={{ marginTop: '20px', textAlign: 'center' }}>
//                 <Typography variant="h5" gutterBottom style={{ color: '#fff' }}>
//                   Connect With Us
//                 </Typography>
//                 <div>
//                   <IconButton style={{ color: '#fff', marginRight: '50px' }} aria-label="facebook">
//                     <Facebook />
//                   </IconButton>
//                   <IconButton style={{ color: '#fff', marginRight: '50px' }} aria-label="twitter">
//                     <Twitter />
//                   </IconButton>
//                   <IconButton style={{ color: '#fff', marginRight: '50px' }} aria-label="instagram">
//                     <Instagram />
//                   </IconButton>
//                   <IconButton style={{ color: '#fff' }} aria-label="linkedin">
//                     <LinkedIn />
//                   </IconButton>
//                 </div>
//               </div>
//             </Grid>
//           </Grid>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Footer;
import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Button, IconButton, Box } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const mapContainerStyle = {
  width: '100%',
  height: '300px',
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
};

const center = {
  lat: 6.9271,
  lng: 79.8612,
};

const Footer = () => {
  const handleNavigation = (destination) => {
    console.log(`Navigating to ${destination}`);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: '#023e8a',
        padding: '50px 0',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Container>
        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Box>
              <div style={{ marginBottom: '20px', marginLeft : '40px' }}>
                <img
                  src="https://i.postimg.cc/6Q1tcM0S/HL1.png"
                  alt="Holiday Life Logo"
                  style={{ height: '80px', objectFit: 'contain' }}
                />
              </div>
              <Box display="flex" alignItems="center" style={{ color: '#fff', marginBottom: '20px' }}>
                <HomeIcon style={{ marginRight: '15px', fontSize: '28px' }} />
                <Typography variant="body1" style={{ fontSize: '16px' }}>123 Main Street, Colombo, Sri Lanka</Typography>
              </Box>
              <Box display="flex" alignItems="center" style={{ color: '#fff', marginBottom: '20px' }}>
                <PhoneIcon style={{ marginRight: '15px', fontSize: '28px' }} />
                <Typography variant="body1" style={{ fontSize: '16px' }}>Phone: +94 91 565 8956</Typography>
              </Box>
              <Box display="flex" alignItems="center" style={{ color: '#fff', marginBottom: '20px' }}>
                <EmailIcon style={{ marginRight: '15px', fontSize: '28px' }} />
                <Typography variant="body1" style={{ fontSize: '16px' }}>Email: example@example.com</Typography>
              </Box>
              <Typography
                variant="h5"
                gutterBottom
                style={{ color: '#fff', fontWeight: 'bold', marginTop: '30px' }}
              >
                Connect With Us
              </Typography>
              <div>
                {[
                  { icon: <Facebook />, label: 'facebook' },
                  { icon: <Twitter />, label: 'twitter' },
                  { icon: <Instagram />, label: 'instagram' },
                  { icon: <LinkedIn />, label: 'linkedin' },
                ].map(({ icon, label }, index) => (
                  <IconButton
                    key={index}
                    style={{ color: '#fff', marginRight: '15px', transition: 'transform 0.3s ease' }}
                    aria-label={label}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.2)')}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    {icon}
                  </IconButton>
                ))}
              </div>
            </Box>
          </Grid>

          {/* Navigation Links */}
          <Grid item xs={12} md={4}>
            <Box>
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginBottom: '20px',
                }}
              >
                Quick Links
              </Typography>
              <Grid container direction="column" alignItems="center">
                {['Home', 'Rooms', 'Contact Us', 'Login', 'Register'].map((link, index) => (
                  <Button
                    key={index}
                    variant="text"
                    component={Link}
                    to={`/${link.toLowerCase().replace(' ', '')}`}
                    style={{
                      color: '#fff',
                      fontSize: '16px',
                      margin: '10px 0',
                      fontWeight: '500',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#90e0ef')}
                    onMouseLeave={(e) => (e.target.style.color = '#fff')}
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
              <Typography
                variant="h5"
                gutterBottom
                style={{
                  color: '#fff',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                }}
              >
                Find Us Here
              </Typography>
              <LoadScript googleMapsApiKey="AIzaSyBhJYhA-bRJgkniJETT1BY6I1C4fEexfdc">
                <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14}>
                  <Marker position={center} />
                </GoogleMap>
              </LoadScript>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box textAlign="center" marginTop="40px">
          <Typography
            variant="body2"
            style={{ color: '#fff', fontSize: '14px' }}
          >
            &copy; {new Date().getFullYear()} The Holiday Life. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Footer;
