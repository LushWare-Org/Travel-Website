
import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';

const ImageGal = () => {
  return (
    <Grid container justifyContent="flex-end" item xs={12}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              sx={{ height: 150 }}
              width="100%"
              image="https://i.postimg.cc/SNcbSBwn/image-1.png"
              alt="Image 1"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              sx={{ height: 200 }}
              width="100%"
              image="https://i.postimg.cc/RZRrfcC9/image-2.png"
              alt="Image 2"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              sx={{ height: 230 }}
              width="100%"
              image="https://i.postimg.cc/g0YMn4qw/Untitled-design-2.jpg"
              alt="Image 3"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardMedia
              component="img"
              sx={{ height: 250 }}
              width="100%"
              image="https://i.postimg.cc/59YM4N2h/Untitled-design-1.jpg"
              alt="Image 3"
            />
          </Card>
        </Grid>
        
      </Grid>
    </Grid>
  );
};

export default ImageGal;                   