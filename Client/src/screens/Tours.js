import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import Footer from '../components/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import ImageGallery from '../components/Home/ImageGallery';

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

const Tours = () => {
  const { isMobile, isTablet } = useDeviceType();

  return (
    <div>
    <Box bgcolor="#ffffff"  mt="30px" sx={{ width: '90%',  position: 'relative', left: '5vw' , boxSizing: 'border-box',}} >
      <Typography variant="h3" component="div"
            sx={{
              color: '#0A369D',
              marginBottom: '10px',
              padding: '20px',
              fontFamily: 'Dancing Script',
              textAlign: 'center',}}> Maldives Tour Packages </Typography>
        <Typography variant="body1"  color="#4472CA"  marginBottom={3} align="justify"  fontFamily="Domine"  fontSize={17} padding={3} >
        Our tour packages offer a seamless blend of luxury, adventure, and tranquility, making it the ultimate tropical escape. These packages typically include stays in overwater villas or beachfront resorts, where you can wake up to panoramic ocean views and enjoy private access to crystal-clear lagoons. Whether you're snorkeling amidst vibrant coral reefs, indulging in rejuvenating spa treatments, or savoring gourmet meals at underwater restaurants, every moment is designed for unforgettable memories. With options like sunset cruises, island-hopping excursions, and water sports, Maldives tour packages cater to honeymooners, families, and solo travelers alike, ensuring a stress-free journey in paradise.
        </Typography>
        <br />
        <ImageGallery />
      </Box><br/><br />
     <Footer/>
    </div>
  );
};

export default Tours;
