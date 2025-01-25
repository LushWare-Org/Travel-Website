import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Rating, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PhoneIcon from '@mui/icons-material/Phone';

const ImageGallery = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/tours'); // Replace with your API endpoint
        setTours(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch tours. Please try again later.');
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const handleClick = (id) => {
    navigate(`/tours/${id}`);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="70vh">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', minHeight: '65vh', padding: '20px 30px', backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={5}>
        {tours.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item._id}>
            <Card
              sx={{
                borderRadius: '16px',
                height: '580px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                },
                overflow: 'hidden',
              }}
            >
              <Box sx={{ position: 'relative' }}>
                {/* Check if images array is empty and use a default placeholder image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={item.tour_image}
                  alt={item.title}
                  sx={{
                    cursor: 'pointer',
                    '&:hover': {
                      filter: 'brightness(0.85)',
                    },
                  }}
                  onClick={() => handleClick(item._id)}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#fff',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body2" fontWeight="bold">
                  {item.nights + 1} days & {item.nights} nights
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ backgroundColor: '#fff', padding: '20px' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <Typography variant="h1" fontWeight="bold" fontSize={24}>
                    {item.title}
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
                    USD {item.price && !isNaN(item.price) ? item.price.toLocaleString() : 'N/A'} {' '}
                    {item.price && !isNaN(item.price) && (
                      <Typography
                        component="span"
                        variant="body1"
                        sx={{ textDecoration: 'line-through', marginLeft: 1, color: 'text.secondary' }}
                      >
                        USD {(item.price + 500).toLocaleString()}
                      </Typography>
                    )}
                    {item.price && !isNaN(item.price) && (
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageGallery;
