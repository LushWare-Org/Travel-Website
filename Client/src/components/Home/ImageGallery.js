import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Box, Rating, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { tourGallery } from './imageGalleryData';
import PhoneIcon from '@mui/icons-material/Phone';


const ImageGallery = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/rooms/${id}`);
  };

  return (
    <Box sx={{ width: '100%', minHeight: '70vh', padding: '20px 30px', backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={5}>
        {tourGallery.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: '16px',
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
                <CardMedia
                  component="img"
                  height="200"
                  image={item.images[0]}
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
                    {item.days} days & {item.days - 1} nights
                  </Typography>
                </Box>
              </Box>
              <CardContent sx={{ backgroundColor: '#fff', padding: '20px' }}>
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                  <Typography variant="h6" fontWeight="bold" fontSize={20}>
                    {item.title}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    <Rating name="read-only" value={4.5} precision={0.1} readOnly size="small" />
                    <Typography variant="body2" color="textSecondary" ml={1}>
                      (23)
                    </Typography>
                  </Box>
                </Box>
                <Box >
                  <Typography
                    variant="body1" 
                    sx={{
                      color: 'text.primary',
                      fontWeight: 'bold',
                    }}
                    gutterBottom
                    display="flex" justifyContent="space-between" mb={1}
                  >
                    USD {item.price.toLocaleString()} {' '}
                    <Typography
                      component="span"
                      variant="body1"
                      sx={{ textDecoration: 'line-through', marginLeft: 1, color: 'text.secondary' }}
                    >
                      USD {(item.price + 500).toLocaleString()}
                    </Typography>{' '}
                    <Typography component="span" variant="body2" color="error" fontWeight="bold" backgroundColor="rgba(76, 175, 80, 0.1)" padding={0.5}> 
                      SAVE USD 500
                    </Typography>
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

