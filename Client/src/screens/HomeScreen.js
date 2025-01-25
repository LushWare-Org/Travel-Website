import React from 'react';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
import ImageGallery from '../components/Home/ImageGallery';
import Footer from '../components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAQAccordion from './FAQAccordion';
import ImageGal from '../components/Home/ImageGal';
import LiveChat from '../components/Home/LiveChat';
import Experience from '../components/Home/Experience';
import HomeExperience from '../components/Home/HomeExperience';
import OffersSection from '../components/Home/OffersSection';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PhoneIcon from '@mui/icons-material/Phone';

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

const HomeScreen = () => {
  const { isMobile, isTablet } = useDeviceType();
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/tours'); // Replace with your API endpoint
        setTours(response.data.slice(0, 3)); // Fetch only the first 3 tours
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch tours:', err);
        setLoading(false);
      }
    };
  
    fetchTours();
  }, []);
  
  const handleNavigate = () => {
    navigate('/tours'); 
  };

  return (
    <div style={{ backgroundColor: '#caf0f8' }}>
      <LiveChat />

      <Box bgcolor="#ffffff" padding={isMobile ? '10px' : '35px'} mt="30px" minWidth='98vw' marginTop={'1px'}><br></br>
        <div style={{ display: 'flex', flexDirection: isMobile || isTablet? 'column' : 'row' , marginBottom: '30px' }}>
          {/* Left Block: Image */}
          <div
            style={{
              flex: 1,
              backgroundImage: "url('https://i.postimg.cc/Cxf0chWC/Untitled-design.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '550px',
              minHeight: '550px',
              transition: 'transform 0.3s ease, background-color 0.3s ease, opacity 0.8s ease', 
              cursor: 'pointer', 
            }}
            
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.04)'; 
              e.target.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
            }}
            
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)'; 
              e.target.style.backgroundColor = 'transparent';
            }}
            
          ></div>

          <div
            style={{
              flex: 1,
              backgroundColor: '#caf0f8',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginLeft: isMobile || isTablet? '0' : '20px',
              justifyContent: 'center',
              border: '1px solid rgba(54, 160, 226, 0.71)',
            }}
          >
            <h2
              style={{
                fontFamily: 'Dancing Script',
                color: '#0A369D',
                textAlign: 'center',
                fontSize: '40px',
                fontWeight: 'bold',
              }}
            >
              About<br />Holiday Life
            </h2>
            <br />
            <p
              style={{
                fontFamily: 'Domine',
                fontSize: '20px',
                lineHeight: '1.8',
                color: '#4472CA',
                margin: '5px',
                textAlign: 'justify',
                padding: '0 30px',
              }}
            >
              Holiday Life Travel Agency is your premier partner in crafting unforgettable travel experiences. Specializing in bespoke itineraries and personalized service, we offer curated journeys to destinations worldwide, ensuring every detail of your holiday is meticulously planned. Whether you seek a relaxing beach getaway, an adventurous expedition, or a cultural exploration, Holiday Life Travel Agency turns your dreams into reality with expertise and passion, making every trip a journey to remember. </p>
            <a
              href="none"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '10px 20px',
                fontSize: '16px',
                color: '#ffffff',
                backgroundColor: '#023e8a',
                textDecoration: 'none',
                border: 'solid 1px',
                borderRadius: '10px',
                borderColor: '#0A369D',
                margin: isMobile || isTablet? '20px 0' : '20px 0 0 0',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.04)'; 
                e.target.style.backgroundColor = '#022859';
              }}
              
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)'; 
                e.target.style.backgroundColor = '#023e8a';
              }}
            >
              Discover Tours
            </a>
          </div>
        </div>
      </Box>

      <Container>
        <Typography variant="h3" component="div" sx={{ color: '#0A369D', marginBottom: '20px', fontFamily: 'Dancing Script', textAlign: 'center', fontWeight: 'semibold' }}>
          <br />
          Experience the Essence of The Ocean
        </Typography><br />
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="#4472CA" marginBottom={3} align="justify" fontFamily='Domine' fontSize={18} padding='0 10px'>
            The Maldives, with its turquoise waters, pristine beaches, and vibrant marine life, is a dream destination for travelers seeking a slice of tropical paradise. This archipelago in the Indian Ocean offers more than just breathtaking views; it provides a plethora of unique experiences that cater to adventure seekers, relaxation enthusiasts, and nature lovers alike. Here's a guide to the top activities to experience in the Maldives.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" color="#4472CA" marginBottom={3} align="justify" fontFamily='Domine' fontSize={18} padding='0 10px'>
            The Maldives is more than just a destination; it’s an experience. From its stunning natural beauty to its luxurious offerings and rich culture, there’s something for everyone in this tropical paradise. Whether you’re seeking adventure, romance, or tranquility, the Maldives promises memories that will last a lifetime. So, pack your sunscreen, grab your snorkeling gear, and get ready to immerse yourself in the wonders of the Maldives!
            </Typography>
          </Grid>
        </Grid>
        <br />
      </Container>

      <HomeExperience /><br />

      <Box
        bgcolor="#ffffff"
        padding="30px"
        mt="30px"
        sx={{
          width: '90%',
          position: 'relative',
          left: '80px' ,
          boxSizing: 'border-box',
        }}
      >
        <Typography
          variant="h3"
          component="div"
          sx={{
            color: '#0A369D',
            marginBottom: '30px',
            fontFamily: 'Dancing Script',
            textAlign: 'center',
          }}
        >
         Our Tour Packages
        </Typography>
        <Typography
          variant="body1"
          color="#4472CA"
          marginBottom={3}
          align="justify"
          fontFamily="Domine"
          fontSize={17}
        >
          Our tour packages offer a seamless blend of luxury, adventure, and tranquility, making it the ultimate tropical escape. These packages typically include stays in overwater villas or beachfront resorts, where you can wake up to panoramic ocean views and enjoy private access to crystal-clear lagoons. Whether you're snorkeling amidst vibrant coral reefs, indulging in rejuvenating spa treatments, or savoring gourmet meals at underwater restaurants, every moment is designed for unforgettable memories. With options like sunset cruises, island-hopping excursions, and water sports, Maldives tour packages cater to honeymooners, families, and solo travelers alike, ensuring a stress-free journey in paradise.
        </Typography>
        <br />
        <Container>
          <Grid container spacing={4}>
            {loading ? (
              <Typography variant="h6" align="center">
                Loading tours...
              </Typography>
            ) : (
              tours.map((tour) => (
                <Grid item xs={12} md={4} key={tour._id}>
                  <Box
                    sx={{
                      border: '1px solid #ddd',
                      borderRadius: '8px',
                      backgroundColor: '#fff',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <img
                      src={tour.tour_image}
                      alt={tour.title}
                      style={{
                        width: '100%',
                        height: '200',
                        objectFit: 'cover',
                        borderRadius: '8px 8px 0 0',
                      }}
                    />
                    <div style={{ padding: '20px' }}>
                      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                        <Typography variant="h1" fontWeight="bold" fontSize={24}>
                          {tour.title}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: 'text.primary',
                            fontWeight: 'bold',
                          }}
                          gutterBottom
                          display="flex"
                          justifyContent="space-between"
                          mb={1}
                        >
                          {/* Check if price exists and is a valid number before calling toLocaleString */}
                          USD {tour.price && !isNaN(tour.price) ? tour.price.toLocaleString() : 'N/A'} {' '}
                          {tour.price && !isNaN(tour.price) && (
                            <Typography
                              component="span"
                              variant="body1"
                              sx={{ textDecoration: 'line-through', marginLeft: 1, color: 'text.secondary' }}
                            >
                              USD {(tour.price + 500).toLocaleString()}
                            </Typography>
                          )}
                          {tour.price && !isNaN(tour.price) && (
                            <Typography component="span" variant="body2" color="error" fontWeight="bold" backgroundColor="rgba(76, 175, 80, 0.1)" padding={0.5}>
                              SAVE USD 500
                            </Typography>
                          )}
                        </Typography>
                      </Box>
                      <Box display="flex" gap={2} mt={3}>
                      <Button
                        variant="outlined"
                        startIcon={<PhoneIcon />}
                        sx={{
                          borderColor: '#4CAF50',
                          color: '#4CAF50',
                          '&:hover': {
                            backgroundColor: 'rgba(76, 175, 80, 0.1)',
                            borderColor: '#4CAF50',
                          },
                        }}
                      >
                        Call
                      </Button>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: '#2196F3',
                          color: '#fff',
                          '&:hover': {
                            backgroundColor: '#1976D2',
                          },
                        }}
                      >
                        Request Callback
                      </Button>
                    </Box>
                    </div>
                  </Box>
                </Grid>
              ))
            )}
          </Grid>
          <Box display="flex" justifyContent="center" mt={4}>
            <Button variant="contained" color="primary" onClick={handleNavigate}>
              View More Tours
            </Button>
          </Box>
        </Container>
      </Box>

      <br /><br />

      <OffersSection />

      <Box bgcolor="#ffffff" padding="40px" mt="30px" minWidth='100vw'>
        <Container>
          <Typography variant="h3" component="div" sx={{ color: '#0A369D', marginBottom: '30px', fontFamily: 'Dancing Script', textAlign: 'center' }}>
            Learn More About HOLIDAY LIFE
          </Typography>
          <Typography variant="body1" color="#4472CA" marginBottom={3} align="justify" fontFamily='Domine' fontSize={17}>
            Holiday Life Travel Agency is committed to delivering top-notch facilities, exceptional travel experiences, and uncompromising safety for every journey. Our curated packages include luxurious accommodations, seamless transportation, and exclusive access to premium attractions, ensuring comfort and convenience throughout your trip. With a team of experienced travel experts, we craft personalized itineraries that cater to your preferences, making each journey unique and memorable. Safety is our utmost priority, with reliable partners, 24/7 assistance, and adherence to global travel standards to ensure peace of mind. With Holiday Life, your travels are enriched with ease, excellence, and assurance at every step.
          </Typography>
          <ImageGal />
          <br /><br />
        </Container>
      </Box>
      <FAQAccordion/>
      <Experience /><br></br><br></br>
      <Footer />
    </div>
  );
};

export default HomeScreen;
