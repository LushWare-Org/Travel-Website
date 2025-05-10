import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
import Swal from 'sweetalert2';
import AdminPanel from './AdminPanel';
import Footer from '../components/Footer';

const useStyles = styled('div')({
  card: {
    minWidth: 275,
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  content: {
    textAlign: 'left',
  },
  cancelBtn: {
    marginTop: 10,
  },
});

const Account = () => {
  const classes = useStyles;
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const { _id: id, name, email, isAdmin: admin } = currentUser;

  const [myBookings, setMyBookings] = useState([]);

  // Fetch booking data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/book/${id}`);
        if (!response.ok) throw new Error('Failed to fetch booking data');
        const data = await response.json();
        setMyBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchData();
  }, [id]);

  // Cancel booking handler
  const handleCancelBooking = (bookingId) => {
    fetch(`http://localhost:8000/book/cancel/${bookingId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => response.json())
      .then(() => {
        Swal.fire('Success', 'Your booking has been cancelled.', 'success').then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.error('Error canceling booking:', error);
        Swal.fire('Error', 'Something went wrong.', 'error');
      });
  };

  // Get time-based greeting
  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div>
      <br />
      <h1 className="welcome-message" style={{ textAlign: 'center', fontSize: '30px' }}>
  {getTimeBasedGreeting()}, <span className="user-name" style={{ color: 'red', fontSize: '40px' }}>
    {name}
  </span>! Welcome to{' '}
  <span className="brand-name" style={{ color: 'darkblue', fontSize: '36px' }}>
    THE LUXURY
  </span>.
</h1>

      <p style={{ textAlign: 'center' }}>Your User Name is: {email}</p><br></br>
      <p style={{ textAlign: 'left', marginLeft: '20px' , fontSize: '25px'}}>Your booking details are as follows:</p>

      <Grid container spacing={2} style={{ padding: '20px' , marginLeft: '300px', color: 'Highlight'}}>
        {myBookings.length > 0 ? (
          myBookings.map((booking) => (
            <Grid item xs={12} sm={6} md={4} key={booking.transaction_id}>
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Typography variant="h6">Booking Details</Typography>
                  <Typography>Date Range: {booking.from_date} to {booking.to_date}</Typography>
                  <Typography>Room: {booking.room}</Typography>
                  <Typography>Status: {booking.status}</Typography>
                  <Typography>Total Amount: ${booking.total_amount}</Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.cancelBtn}
                    onClick={() => handleCancelBooking(booking._id)}
                  >
                    Cancel Booking
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography style={{ marginLeft: '20px' }}>You have no bookings at the moment.</Typography>
        )}
      </Grid>

      <br />
      {admin && (
        <div style={{ marginTop: '20px' }}>
          <AdminPanel />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Account;
