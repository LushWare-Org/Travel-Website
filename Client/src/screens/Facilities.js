import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Footer from '../components/Footer';

const Facilities = () => {

  const facilities = [
    { 
      id: 1,
      name: 'Luxurious Accommodations',
      image: 'https://i.postimg.cc/DyNWdT8x/c.png',
      description: 'Provide well-appointed rooms, Suites with quality furnishings.'
    },
    { 
      id: 2,
      name: 'Fine Dining Restaurants',
      image: 'https://i.postimg.cc/d1Rd4SzL/Dining.png',
      description: 'Indulge in rejuvenating spa treatments for ultimate relaxation.'
    },
    { 
      id: 3,
      name: 'Swimming Pools',
      image: 'https://i.postimg.cc/yxQDGqnY/swi.png',
      description: 'Feature of outdoor or indoor swimming pools for relaxation.'
    },
    { 
      id: 4,
      name: 'Spa & Wellness Center',
      image: 'https://i.postimg.cc/1536rBM3/Spa.png',
      description: 'Indulge in rejuvenating spa treatments for ultimate relaxation.'
    },
    { 
      id: 5,
      name: 'Business and Event Spaces',
      image: 'https://i.postimg.cc/MTYMyfQB/Business.png',
      description: 'Offer conference rooms and meeting facilities, and event spaces.'
    },
    { 
      id: 6,
      name: 'Concierge Services',
      image: 'https://i.postimg.cc/Z5yWwMN4/Coin.png',
      description: 'Assistance with reservations, transportation, bookings & more.'
    },
    { 
      id: 7,
      name: '24-Hour Room Service',
      image: 'https://i.postimg.cc/85GfJmjD/24-Hour.png',
      description: 'Allowing guests to enjoy meals, beverages in the comfort zone.'
    },
    { 
      id: 8,
      name: 'Childcare and Babysitting Services',
      image: 'https://i.postimg.cc/yxYJn6mb/Child.png',
      description: 'These allow parents to enjoy leisure time or attend meetings.'
    },
    { 
      id: 9,
      name: 'Recreational Activities',
      image: 'https://i.postimg.cc/SRD9pYQ4/Re.png',
      description: 'Facilities such as tennis courts, golf courses, jogging tracks.'
    },
  ];

  const handleFacilityClick = (facility) => {
    console.log(`Clicked facility: ${facility.name}`);
  };

  return (
    <div><br></br><br></br>
      <Grid container spacing={3} marginTop={'1px'} sx={{ paddingLeft: '80px', paddingRight: '80px' }}>
        {facilities.map((facility) => (
          <Grid item xs={12} sm={4} key={facility.id}>
            <Card sx={{ 
              '&:hover': {
                transform: 'scale(1.05)', 
                transition: 'transform 0.3s ease-in-out',
                boxShadow: 6,  // Adding more prominent shadow
              }, 
              marginBottom: '16px', // Space between rows
            }}>
              <CardActionArea onClick={() => handleFacilityClick(facility)}>
                <CardMedia
                  component="img"
                  height="200"  
                  image={facility.image}
                  alt={facility.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div" color= "#0A369D" align='center'>
                    {facility.name}
                  </Typography>
                  <Typography variant="body2" color="black" align='center'>
                    {facility.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid><br></br><br></br>

      <Footer />
    </div>
  );
};

export default Facilities;
