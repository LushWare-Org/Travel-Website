import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  InputBase,
  Select,
  MenuItem,
  useMediaQuery,
  useTheme,
  Divider
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { animated, useSpring } from 'react-spring';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


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


// ----------------------- AnimatedText -----------------------
const AnimatedText = ({ children }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 200);
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

// ----------------------- Home Tab Content (Slider) -----------------------
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

  const { isMobile, isTablet } = useDeviceType();

  return (
    <div style={{ position: 'relative', minHeight: '98vh', opacity: '0.9' }} >
      <Slider {...settings} dots={false}>
        <div style={{ position: 'relative' }}>
          <img
            src= {isMobile? 'https://i.postimg.cc/9ft5kn0j/Untitled-design-1.png' : "https://i.postimg.cc/8CYsNjcV/pexels-asadphoto-3426880.jpg"}
            alt="ocean"
            style={{ width: '100%', height: isMobile ? '92.5vh' : '100vh', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: isMobile? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.0), transparent 30%, transparent 10%, rgba(0, 0, 0, 0.6))' : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.5))',
            }}
          ></div>
        </div>
        <div>
          <img
            src={isMobile? 'https://i.postimg.cc/bJmXyS1C/Untitled-design-2.png'  :"https://i.postimg.cc/yY3gdh9r/maldives-2299563-1280.jpg"}
            alt="sea boat"
            style={{ width: '100%', height: isMobile ? '92.5vh' : '100vh' }}
          />
        </div>
        <div>
          <img
            src={isMobile? 'https://i.postimg.cc/JnrVC5HH/Untitled-design-3.png' : "https://i.postimg.cc/3RXf6xpz/Untitled-design-1.jpg"}
            alt="events"
            style={{ width: '100%', height:isMobile ? '92.5vh' : '100vh' }}
          />
        </div>
        <div>
          <img
            src={isMobile? 'https://i.postimg.cc/hGqRpBSr/Untitled-design.png' : "https://i.postimg.cc/3w8xg24h/pexels-asadphoto-3601440.jpg"}
            alt="ocean view"
            style={{ width: '100%', height:isMobile ? '92.5vh' :  '100vh' }}
          />
        </div>
        <div>
          <img
            src={ isMobile? 'https://i.postimg.cc/ZK4ZhNXS/Untitled-design-4.png':"https://i.postimg.cc/NfqxcS6C/ray-954355-1280.jpg"}
            alt="diving"
            style={{ width: '100%', height:isMobile ? '92.5vh' :  '100vh' }}
          />
        </div>
        <div>
          <img
            src={isMobile? 'https://i.postimg.cc/66dwScjc/Untitled-design-5.png' : "https://i.postimg.cc/2jhtt2mg/Untitled-design.jpg"}
            alt="Luxury hotel"
            style={{ width: '100%', height:isMobile ? '92.5vh' :  '100vh' }}
          />
        </div>
      </Slider>

      <div
        style={{
          alignContent: "center",
          textAlign: 'center' ,
          position: "absolute",
          bottom: isMobile? '6%' : "35%",
          left: isMobile? '50%' : isTablet? '50%' : "50%",
          transform: "translateX(-50%)",
          width: isMobile? '90%' : isTablet? '80%' : '65%',
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
              fontSize: isMobile? '30px' : "50px",
              textShadow: isMobile? 'none' : "0 8px 15px rgba(0, 0, 50, 0.8)",
              backgroundColor: isMobile? 'rgba(0, 62, 138,0)' : 'none',
              padding: isMobile? '7px 0' : '0' ,
              borderTop: isMobile? '1px solid white' : 'none',
              borderBottom: isMobile? '1px solid white': 'none',
            }}
          >
            Welcome to Your
          </Typography>
          {!isMobile && (<Typography
            variant="h1"
            component="div"
            style={{
              fontFamily: "Playfair Display",
              color: "white",
              fontWeight: "bolder",
              fontSize: isTablet? '100px' : isTablet? '100px' : "110px",
              marginTop: "-20px",
              textShadow: "0 8px 15px rgba(0, 0, 50, 0.8)",
            }}
          >
            Dream Holiday
            </Typography>)}
           {isMobile && (
            <Typography
              variant="h1"
              component="div"
              style={{
                fontFamily: "Playfair Display",
                color: "white",
                fontWeight: "bolder",
                fontSize:  '3.3rem' ,
                marginTop: "0px",
                textShadow: 'none',
              }}
            >
              Dream Holiday
            </Typography>)}
          <button
            style={{
              marginTop: "30px",
              padding: isMobile? "10px 15px" : "5px 10px",
              width: isMobile? '95vw' : '240px',
              fontSize: "20px",
              fontFamily: "Playfair Display, serif",
              color: "#fff",
              backgroundColor: "rgba(0, 62, 138,1)",
              borderRadius:  "10px",
              cursor: "pointer",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              position: "relative",
              top: isMobile? "-1vh" : isTablet? '-3vh' : "-5vh",
              left: isMobile? "-2.2vw" : isTablet? '0%' : "0%",
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
            Explore Tours
          </button>
          <button
            style={{
              marginTop: isMobile? '10px': "30px",
              padding: isMobile? "10px 15px" : "5px 10px",
              width: isMobile? '95vw' : '240px',
              fontSize: "20px",
              fontFamily: "Playfair Display, serif",
              color: "#fff",
              backgroundColor: "rgba(0, 37, 82,1)",
              borderRadius:  "10px",
              cursor: "pointer",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease",
              position: "relative",
              top: isMobile? "-1vh" : isTablet? '-3vh' : "-5vh",
              left: isMobile? "-2.2vw" : isTablet? '1%' : "1%",
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
          
        </AnimatedText>
      </div>

    </div>
  );
};

// ----------------------- Reusable TabContent for other pages -----------------------
const TabContent = ({ title, backgroundImage1, backgroundImage2 }) => {
  const { isMobile, isTablet } = useDeviceType();

  const overlayStyle = {
    background: isMobile
      ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.0), transparent 30%, transparent 10%, rgba(0, 0, 0, 0.6))'
      : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.5))',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  };

  const containerStyle = {
    backgroundImage: isMobile? `url(${backgroundImage2})` :`url(${backgroundImage1})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight: isMobile? '92.5vh' : '100vh',
    opacity: '0.9',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    position: 'relative',
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <AnimatedText>
          <Typography
            variant={ isMobile? "h2" : "h1"}
            component="div"
            style={{ textAlign: 'center' }}
            marginTop={11}
            fontFamily={'Playfair Display'}
            color={'white'}
            fontWeight={'bolder'}
          >
            {title}
          </Typography>
        </AnimatedText>
      </div>
    </div>
  );
};

// ----------------------- Other Pages/Tab contents -----------------------
export const ToursTabContent = () => (
  <TabContent
    title="Explore Tours"
    backgroundImage1= "https://i.postimg.cc/Wb5WNvG7/pexels-asadphoto-1483053.jpg"
    backgroundImage2= "https://i.postimg.cc/L5Db3GNy/Untitled-design-6.png"
  />
);

export const FacilitiesTabContent = () => (
  <TabContent
    title="Facilities we offer"
    backgroundImage1="https://firebasestorage.googleapis.com/v0/b/hotel-booking-system-35f4a.appspot.com/o/Public%20Folder%2FSwimming.png?alt=media&token=a8b2c994-cf8e-429c-b874-fd01b633a44e"
    backgroundImage2='https://i.postimg.cc/BbbxRyJ7/Untitled-design-10.png'
  />
);

export const ContactTabContent = () => (
  <TabContent
    title="Contact us"
    backgroundImage1="https://i.postimg.cc/Wb5WNvG7/pexels-asadphoto-1483053.jpg"
    backgroundImage2='https://i.postimg.cc/QMgk716m/Untitled-design-7.png'
  />
);

export const LoginTabContent = () => (
  <TabContent
    title="Login with us"
    backgroundImage1="https://firebasestorage.googleapis.com/v0/b/hotel-booking-system-35f4a.appspot.com/o/Public%20Folder%2Flogin.jpg?alt=media&token=a810ff0a-6305-4be3-8a40-d0abbb0b8875"
    backgroundImage2='https://i.postimg.cc/mDb3ykJs/Untitled-design-8.png'
  />
);

export const RegisterTabContent = () => (
  <TabContent
    title="Register with us"
    backgroundImage1="https://firebasestorage.googleapis.com/v0/b/hotel-booking-system-35f4a.appspot.com/o/Public%20Folder%2Flogin.jpg?alt=media&token=a810ff0a-6305-4be3-8a40-d0abbb0b8875"
    backgroundImage2='https://i.postimg.cc/4dB6LZRh/Untitled-design-9.png'
  />
);

export const AccountTabContent = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    setUser(currentUser);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/hotel-booking-system-35f4a.appspot.com/o/Public%20Folder%2FSpa.png?alt=media&token=f0e89146-dbfe-4a98-9eae-a1243bfb8de3')`,
        backgroundSize: 'cover',
        height: '100vh',
        opacity: 0.86
      }}
    >
      <TabContent
        title={user ? (user.isAdmin ? "Admin Dashboard" : "My Account") : "My Account"}
      />
    </div>
  );
};

// ----------------------- Main Navigation Component -----------------------
const Navigation = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [value, setValue] = useState(0);
  const [user, setUser] = useState();
  const location = useLocation();
  const [currency, setCurrency] = useState("LKR");

  // Drawer open state
  const [drawerOpen, setDrawerOpen] = useState(false);

  // For controlling the background color of the navbar on scroll
  const [scrollPosition, setScrollPosition] = useState(0);

  const { isMobile, isTablet } = useDeviceType();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    setUser(currentUser);
  }, []);

  useEffect(() => {
    // Highlight the correct tab depending on route
    if (location.pathname.startsWith('/tours')) {
      setValue(1);
    } else if (location.pathname === '/contact') {
      setValue(2);
    } else if (location.pathname === '/login') {
      setValue(3);
    } else if (location.pathname === '/register') {
      setValue(4);
    } else if (location.pathname === '/account') {
      setValue(5);
    } else if (location.pathname === '/facilities') {
      setValue(6);
    } else {
      setValue(0);
    }
  }, [location]);

  // Handle scroll changes to set top bar background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
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

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    console.log("Currency changed to:", event.target.value);
  };

  // Calculate dynamic background color based on scroll
  const opacity = Math.min(1, scrollPosition / 400);
  const backgroundColor = `rgba(0, 62, 138, ${opacity})`;

  const currencyOptions = [
    { value: "LKR", label: "LKR", flag: "🇱🇰" },
    { value: "USD", label: "USD", flag: "🇺🇸" },
    { value: "EUR", label: "EUR", flag: "🇪🇺" },
    { value: "GBP", label: "GBP", flag: "🇬🇧" },
    { value: "JPY", label: "JPY", flag: "🇯🇵" }
  ];

  // Toggle the Drawer
  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // ------------------- Drawer Content for Mobile -------------------
  const drawerContent = (
    <div
      style={{
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* NAV LIST */}
      <List style={{ flex: 1 }}>
        <ListItemButton component={Link} to="/" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="Home" />
        </ListItemButton>
        <Divider />

        <ListItemButton component={Link} to="/tours" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="Tours" />
        </ListItemButton>
        <Divider />

        <ListItemButton component={Link} to="/contact" onClick={() => setDrawerOpen(false)}>
          <ListItemText primary="Contact" />
        </ListItemButton>
        <Divider />

        {!user && (
          <>
            <ListItemButton component={Link} to="/login" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Login" />
            </ListItemButton>
            <Divider />
            <ListItemButton component={Link} to="/register" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Register" />
            </ListItemButton>
            <Divider />
          </>
        )}

        {/* If user is logged in */}
        {user && !user.isAdmin && (
          <>
            <ListItemButton component={Link} to="/account" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Account" />
            </ListItemButton>
            <Divider />
          </>
        )}

        {user && user.isAdmin && (
          <>
            <ListItemButton component={Link} to="/admin" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Admin Panel" />
            </ListItemButton>
            <Divider />
          </>
        )}

        {user && (
          <>
            <ListItemButton onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItemButton>
            <Divider />
          </>
        )}

        {/* SEARCH BAR (for mobile) */}
        <ListItemButton style={{ marginTop: '20px' }}>
          <form
            onSubmit={handleSearchSubmit}
            style={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '50px',
              border: "1.5px solid rgba(0,0,0,0.2)",
              padding: '0px 10px',
              width: '100%'
            }}
          >
            <InputBase
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={{
                width: '100%',
                outline: 'none',
              }}
            />
            <IconButton type="submit" size="small">
              <SearchIcon />
            </IconButton>
          </form>
        </ListItemButton>
      </List>

      {/* COMPANY IMAGE at the bottom */}
      <div
        style={{
          padding: '3vh 15vw',
          borderTop: '1px solid #ccc',
          textAlign: 'center'
        }}
      >
        <img
          src="https://i.postimg.cc/6Q1tcM0S/HL1.png"
          alt="Holiday Life Logo"
          style={{
            width: '120px',
            objectFit: 'contain',
            marginTop: '10px'
          }}
        />
      </div>
    </div>
  );

  return (
    <div>
      <AppBar
        position="fixed"
        left= "0"
        style={{
          backgroundColor: isMobile? 'rgba(0, 62, 138,1) ': backgroundColor,
          transition: 'background-color 0.3s ease-in-out',
          boxShadow: 'none',
          height: isMobile? '7.5vh': isTablet? '6.5vh' : '10vh',
          backdropFilter: 'blur(10px)',
        }}
      >
        <Toolbar>  
          {isMobile ? (
            <>
              <img
                  src="https://i.postimg.cc/6Q1tcM0S/HL1.png"
                  alt="Holiday Life Logo"
                  style={{ height: '60px', objectFit: 'contain', padding: '10px 5px' }}
                />
            </>
          ) : (
            <>
              {/* Desktop Tabs */}
              <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{ style: { backgroundColor: "rgba(255,255,255,0.9)", height: "2px", marginBottom: "0px" } }}
                textColor="inherit"
                style={{ marginLeft: isTablet? '0vw' : '6vw' }}
              >
                <Tab
                  label="Home"
                  component={Link}
                  to="/"
                  value={0}
                  style={{ color: 'rgba(255,255,255,0.9)', marginLeft: '0vw', padding: isTablet? '0px 0px' : '0px 10px' }}
                />
                <Tab
                  label="Tours"
                  component={Link}
                  to="/tours"
                  value={1}
                  style={{ color: 'rgba(255,255,255,0.9)', marginLeft: isTablet? '0vw' : '2vw', padding: isTablet? '0px 0px' : '0px 10px' }}
                />
                <Tab
                  label="Contact"
                  component={Link}
                  to="/contact"
                  value={2}
                  style={{ color: 'rgba(255,255,255,0.9)',marginLeft: isTablet? '0vw' : '2vw', padding: isTablet? '0px 0px' : '0px 10px' }}
                />
              </Tabs>

              <div style={{ margin: isTablet? '0 0vw' : '0 8vw', padding: isTablet? '0 2vw' :'0vh 4vw' }}>
                <img
                  src="https://i.postimg.cc/6Q1tcM0S/HL1.png"
                  alt="Holiday Life Logo"
                  style={{ height: isTablet? '60px' : '72px', objectFit: 'contain' }}
                />
              </div>

              {/* Search bar for desktop */}
              {!user && (
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
              )}

              <div style={{ marginLeft: '1vw' }}>
                <Select
                  value={currency}
                  onChange={handleCurrencyChange}
                  style={{
                    backgroundColor: 'transparent',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: 'rgba(255,255,255,0.9)',
                    padding: isTablet? '0px 0px' : '0px 10px',
                    borderRadius: '25px',
                    border: '1.5px solid rgba(255,255,255,0.7)',
                    height: '45px',
                    marginLeft: '0vw'
                  }}
                  disableUnderline
                >
                  {currencyOptions.map((option) => (
                    <MenuItem
                      key={option.value}
                      value={option.value}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <span style={{ marginRight: '8px' }}>{option.flag}</span>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </div>

              {/* Additional Tabs (Login, Account, etc.) on Desktop */}
              <Tabs
                value={false} // so it doesn't highlight extra tab
                textColor="inherit"
                TabIndicatorProps={{ style: { display: 'none' } }}
              >
                {user && !user.isAdmin && (
                  <Tab
                    label="Account"
                    component={Link}
                    to="/account"
                    style={{ fontWeight: 'bold', marginLeft: '2vw' }}
                  />
                )}
                {user && user.isAdmin && (
                  <Tab
                    label="Admin Panel"
                    component={Link}
                    to="/admin"
                    style={{ fontWeight: 'bold', marginLeft: '2vw' }}
                  />
                )}
                {user && (
                  <Tab
                    label="Logout"
                    onClick={handleLogout}
                    style={{ fontWeight: 'bold' }}
                  />
                )}
              </Tabs>
            </>
          )}

          {/* Currency Converter for mobile (optional if you want it in the same place) */}
          {isMobile && (
            <div style={{ marginLeft: 'auto' }}>
              <Select
                value={currency}
                onChange={handleCurrencyChange}
                style={{
                  backgroundColor: 'transparent',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'rgba(255,255,255,0.9)',
                  padding: '0px 5px',
                  borderRadius: '25px',
                  border: '1.5px solid rgba(255,255,255,0.7)',
                  height: '40px',
                }}
                disableUnderline
              >
                {currencyOptions.map((option) => (
                  <MenuItem
                    key={option.value}
                    value={option.value}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <span style={{ marginRight: '8px' }}>{option.flag}</span>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {isMobile && (
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer}
                    style={{ marginLeft: '5vw' }}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* -------------- Side Drawer for mobile -------------- */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {drawerContent}
      </Drawer>

      {/* Content area below the nav bar */}
      <div style={{ position: 'relative', height: isMobile? '94vh': '98vh', marginTop: isMobile ? '7.5vh' : '0' }}>
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
