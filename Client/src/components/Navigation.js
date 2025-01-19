import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import Slider from "react-slick";  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Select, MenuItem } from '@mui/material';


const AnimatedText = ({ children }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const props = useSpring({
    opacity: visible ? 1 : 0,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(1.5)' }
  });

  return <animated.div style={props}>{children}</animated.div>;
};

// Image Slider for Home Tab
const HomeTabContent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };
  

  return (
    <div style={{ position: 'relative', minHeight: '98vh', opacity: '0.9' }}>
      <Slider {...settings} dots={false}>
      <div style={{ position: 'relative' }}>
        <img
          src="https://i.postimg.cc/8CYsNjcV/pexels-asadphoto-3426880.jpg"
          alt="ocean"
          style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.5))',
          }}
        ></div>
        </div>
        <div>
          <img src="https://i.postimg.cc/yY3gdh9r/maldives-2299563-1280.jpg" alt="sea boat" style={{ width: '100%', height: '100vh' }} />
        </div>
        <div>
          <img src="https://i.postimg.cc/3RXf6xpz/Untitled-design-1.jpg" alt="events" style={{ width: '100%', height: '100vh' }} />
        </div>
        <div>
          <img src="https://i.postimg.cc/3w8xg24h/pexels-asadphoto-3601440.jpg" alt="ocean view" style={{ width: '100%', height: '100vh' }} />
        </div>
        <div>
          <img src="https://i.postimg.cc/NfqxcS6C/ray-954355-1280.jpg" alt="diving" style={{ width: '100%', height: '100vh' }} />
        </div>
        <div>
          <img src="https://i.postimg.cc/2jhtt2mg/Untitled-design.jpg" alt="Luxury hotel" style={{ width: '100%', height: '100vh' }} />
        </div>
      </Slider>

      <div
        style={{
          alignContent: "center",
          position: "absolute",
          top: "35%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <AnimatedText>
          <Typography
            variant="h1"
            component="div"
            style={{
              fontFamily: "Playfair Display",
              color: "white",
              fontWeight: "bolder",
              fontSize: "50px",
              textShadow: "0 8px 15px rgba(0, 0, 50, 0.8)",
            }}
          >
            Welcome to Your
          </Typography>
          <Typography
            variant="h1"
            component="div"
            style={{
              fontFamily: "Playfair Display",
              color: "white",
              fontWeight: "bolder",
              fontSize: "110px",
              marginTop: "-20px",
              textShadow: "0 8px 15px rgba(0, 0, 50, 0.8)",
            }}
          >
            Dream Holiday
          </Typography>
          <button
            style={{
              marginTop: "30px",
              padding: "5px 15px",
              fontSize: "18px",
              fontFamily: "Playfair Display, serif",
              color: "#fff",
              backgroundColor: "rgba(0, 62, 138, 0.9)",
              border: "none",
              borderRadius: "30px",
              cursor: "pointer",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              position: "relative",
              top: "-6vh",
              left: "49%",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
            }}
          >
            Connect with US
          </button>
          <button
            style={{
              marginTop: "30px",
              padding: "5px 15px",
              fontSize: "18px",
              fontFamily: "Playfair Display, serif",
              color: "rgba(0, 62, 138, 0.9)",
              backgroundColor: "rgba(222, 222, 255, 0.3)",
              border: "1px solid rgba(0, 62, 138, 0.9)",
              borderRadius: "30px",
              cursor: "pointer",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              position: "relative",
              top: "-6vh",
              left: "50%",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
              e.target.style.boxShadow = "0 12px 20px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
            }}
          >
            Learn More...
          </button>
        </AnimatedText>
      </div>

    </div>
  );
};

// Tab Content Component to be used for Rooms, Facilities, Contact, Login, etc.
const TabContent = ({ title, backgroundImage }) => (
  <div
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: '98vh',
      opacity: '0.9',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
    }}
  >
    <AnimatedText>
      <Typography variant="h1" component="div" style={{ textAlign: 'center' }} marginTop={11} fontFamily={'Playfair Display'}>
        {title}
      </Typography>
    </AnimatedText>
  </div>
);

export const ToursTabContent = () => (
  <TabContent title="Explore Tours" backgroundImage="https://i.postimg.cc/Wb5WNvG7/pexels-asadphoto-1483053.jpg" />
);

export const FacilitiesTabContent = () => (
  <TabContent title="Facilities we offer" backgroundImage="https://firebasestorage.googleapis.com/v0/b/hotel-booking-system-35f4a.appspot.com/o/Public%20Folder%2FSwimming.png?alt=media&token=a8b2c994-cf8e-429c-b874-fd01b633a44e" />
);

export const ContactTabContent = () => (
  <TabContent title="Contact us" backgroundImage="https://i.postimg.cc/Wb5WNvG7/pexels-asadphoto-1483053.jpg" />
);

export const LoginTabContent = () => (
  <TabContent title="Login with us" backgroundImage="https://firebasestorage.googleapis.com/v0/b/hotel-booking-system-35f4a.appspot.com/o/Public%20Folder%2Flogin.jpg?alt=media&token=a810ff0a-6305-4be3-8a40-d0abbb0b8875" />
);

export const RegisterTabContent = () => (
  <TabContent title="Register with us" backgroundImage="https://firebasestorage.googleapis.com/v0/b/hotel-booking-system-35f4a.appspot.com/o/Public%20Folder%2Flogin.jpg?alt=media&token=a810ff0a-6305-4be3-8a40-d0abbb0b8875" />
);



export const AccountTabContent = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    setUser(currentUser);
  }, []);

  return (
    <div style={{ 
      position: 'relative', 
      backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/hotel-booking-system-35f4a.appspot.com/o/Public%20Folder%2FSpa.png?alt=media&token=f0e89146-dbfe-4a98-9eae-a1243bfb8de3')`,
      backgroundSize: 'cover',
      height: '100vh', 
      opacity: 0.86  
    }}>
      <TabContent
        title={user ? (user.isAdmin ? "Admin Dashboard" : "My Account") : "My Account"}
      />
    </div>
  );
};

const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState(0);
  const [user, setUser] = useState();
  const location = useLocation();
  const [currency, setCurrency] = useState("LKR");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    setUser(currentUser);
  }, []);

  useEffect(() => {
    if (location.pathname === '/tours') {
      setValue(1);
    } else if (location.pathname === '/contact') {
      setValue(2);
    } else if (location.pathname === '/login') {
      setValue(3);
    } else if (location.pathname === '/register') {
      setValue(4);
    } else if (location.pathname === '/account') {
      setValue(5);
    }else if (location.pathname === '/facilities') {
      setValue(6);
    } else {
      setValue(0);
    }
  }, [location]);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    console.log("Currency changed to:", event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
    // Implement search logic here
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  };

  const opacity = Math.min(1, (scrollPosition / 400)); 
  const backgroundColor = `rgba(0, 62, 138, ${opacity})`;

  const currencyOptions = [
    { value: "LKR", label: "LKR", flag: "🇱🇰" },
    { value: "USD", label: "USD", flag: "🇺🇸" },
    { value: "EUR", label: "EUR", flag: "🇪🇺" },
    { value: "GBP", label: "GBP", flag: "🇬🇧" },
    { value: "JPY", label: "JPY", flag: "🇯🇵" }
  ];

  return (
    <div>
      <AppBar 
        position="fixed" 
        style={{
          backgroundColor,
          transition: 'background-color 0.3s ease-in-out',
          boxShadow: 'none',
          height: '80px',
          backdropFilter: 'blur(10px)',
      }}>
        <Toolbar className="flex justify-start items-center h-full px-6">
          <div className="flex items-center">
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{ style: { backgroundColor: "rgba(255,255,255,0.9)", height: "2px", marginBottom: "15px" } }}
              textColor="white"
              style={{ marginLeft: '0px', marginRight: '2vw', marginLeft: '9vw'}}
            >
              <Tab
                label="Home"
                component={Link}
                to="/"
                value={0}
                style={{ ontSize: '1rem',marginRight: '2vw', color: 'rgba(255,255,255,0.9)' }}  
              />
              <Tab
                label="Tours"
                component={Link}
                to="/tours"
                value={1}
                style={{ fontSize: '1rem',marginRight: '2vw', color: 'rgba(255,255,255,0.9)' }}
              />
              <Tab
                label="Contact"
                component={Link}
                to="/contact"
                value={2}
                style={{ ffontSize: '1rem', color: 'rgba(255,255,255,0.9)' }}
              />
              <div style={{ marginLeft: '8vw', marginRight: '8vw', padding: '0 3.5vw' }}>
                <img
                  src="https://i.postimg.cc/6Q1tcM0S/HL1.png" 
                  alt="Holiday Life Logo"
                  style={{ height: '72px', objectFit: 'contain' }}
                />
              </div>
              {!user && (
                <div style={{ marginRight: '1vw', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <form
                  onSubmit={handleSearchSubmit}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    borderRadius: '50px',
                    border: "1.5px solid rgba(255,255,255,0.7)",
                    padding: '0px 10px',
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease-in-out', 
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,1)';
                    e.currentTarget.style.boxShadow = '0px 6px 8px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.7)';
                    e.currentTarget.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <InputBase
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{
                      backgroundColor: 'transparent',
                      borderRadius: '25px',
                      padding: '0px 10px',
                      width: '13vw',
                      color: 'white',
                      outline: 'none',
                    }}
                  />
                  <IconButton type="submit">
                    <SearchIcon style={{ color: 'rgba(255,255,255,0.7)', background: 'transparent', borderRadius: '25px', padding: '0px' }} />
                  </IconButton>
                </form>
              </div>
              
              )}
              {!user && (
                <div style={{ marginRight: '', display: 'flex', alignItems: 'center', backgroundColor: 'transparent', padding: '0px 10px' }}>
                <Select
                  value={currency}
                  onChange={handleCurrencyChange}
                  style={{
                    backgroundColor: 'transparent',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: 'rgba(255,255,255,0.9)',
                    padding: '0px 10px',
                    borderRadius: '25px',
                    border: '1.5px solid rgba(255,255,255,0.7)',
                    height: '45px',
                  }}
                  disableUnderline
                >
                  {currencyOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value} style={{ display: 'flex', alignItems: 'center', paddingTop: '0px' }}>
                      <span style={{ marginRight: '8px', padding: '-10px 0px' }}>{option.flag}</span> {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              
              )}
              {user && !user.isAdmin && (
                <Tab
                  label="Account"
                  component={Link}
                  to="/account"
                  value={7}
                  style={{ fontWeight: 'bold', fontSize: '1.05rem', marginRight: '50px' }}
                  className="hover:text-gray-300"
                />
              )}
              {user && user.isAdmin && (
                <Tab
                  label="Admin Panel"
                  component={Link}
                  to="/admin"
                  value={8}
                  style={{ fontWeight: 'bold', fontSize: '1.05rem', marginRight: '50px' }}
                  className=" hover:text-gray-300"
                />
              )}
              {user && (
                <Tab
                  label="Logout"
                  onClick={handleLogout}
                  value={9}
                  style={{ fontWeight: 'bold', fontSize: '1.05rem', marginRight: '50px' }}
                  className="hover:text-gray-300"
                />
              )}

            </Tabs>
          </div>
        </Toolbar>
      </AppBar>

      <div style={{ position: 'relative', minHeight: '98vh' }}>
        {value === 0 && <HomeTabContent />}
        {value === 1 && <ToursTabContent />}
        {value === 2 && <ContactTabContent />}
        {value === 3 && <LoginTabContent />}
        {value === 4 && <RegisterTabContent />}
        {value === 5 && <AccountTabContent />}
        {value === 6 && <FacilitiesTabContent />}
      </div>
    </div>
  );
};

export default Navigation;
