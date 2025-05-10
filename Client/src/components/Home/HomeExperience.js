import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';

const experiences = [
  {
    title: 'Overwater Bungalow Stay',
    description:
      'Wake up to panoramic ocean views, step directly into the sea from your private deck, and soak in an infinity pool.',
    imageUrl: 'https://i.postimg.cc/50Fkmt7h/Home-Tab-1.png',
  },
  {
    title: 'Exclusive Dining Experiences',
    description:
      'Savor gourmet meals in breathtaking locations—from private beaches to secluded spots in the heart of the island’s lush paradise.',
    imageUrl:
      'https://i.postimg.cc/c1MkzY62/Anantara20-Maldives20ishan-seefromthesky-gtt803-Wswn-A-unsplash.webp',
  },
  {
    title: 'Luxury Island Excursions',
    description:
      'Embark on unforgettable journeys aboard a traditional dhoni or a luxury yacht, exploring the pristine beauty of the Maldives.',
    imageUrl:
      'https://i.postimg.cc/63PXn7g5/606e8ca07ac5d175-1-1wt4mcwxvxeqzscqkzr6sq.jpg',
  },
  {
    title: 'Premium Diving Adventures',
    description:
      'Immerse yourself in a spectacular underwater world with vibrant coral reefs and an abundance of marine life.',
    imageUrl: 'https://i.postimg.cc/rw7xng4S/diving-689831-1280.jpg',
  },
];

/**
 * Determines width/height per block index (desktop) and returns a consistent size if mobile
 */
const getBlockDimensions = (index, isMobile) => {
  if (isMobile) {
    // On mobile, all blocks have the same style (stacked layout)
    return { width: '90%', height: '320px' };
  }
  // Desktop: custom sizes for each block
  switch (index) {
    case 0:
      return { width: '35%', height: '420px' };
    case 1:
      return { width: '50%', height: '420px' };
    case 2:
      return { width: '50%', height: '500px' };
    case 3:
      return { width: '35%', height: '500px' };
    default:
      return { width: '45%', height: '400px' };
  }
};

const HomeExperience = () => {
  // Use a breakpoint around 768px
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        justifyContent: 'center',
        // Increase overall padding for a more spacious, premium feel
        padding: isMobile ? '20px' : '40px',
        // Slightly lighter background color for elegance
        backgroundColor: '#e2f5fa',
      }}
    >
      {experiences.map((experience, index) => (
        <ExperienceBlock
          key={index}
          experience={experience}
          index={index}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

const ExperienceBlock = ({ experience, index, isMobile }) => {
  const [hovered, setHovered] = useState(false);

  const { width, height } = getBlockDimensions(index, isMobile);

  // Container around each image block
  const blockStyle = {
    position: 'relative',
    overflow: 'hidden',
    width: isMobile? '95vw' : width,
    height,
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease',
  };

  // Background image
  const imageStyle = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${experience.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    // Slight scale on hover
    transform: hovered ? 'scale(1.03)' : 'scale(1)',
    transition: 'transform 0.4s ease-in-out',
  };

  // Title text on the image
  const titleStyle = {
    position: 'absolute',
    bottom: isMobile ? '1rem' : '1.5rem',
    left: '1rem',
    color: 'white',
    fontSize: isMobile ? '1.3rem' : '2rem',
    fontWeight: '600',
    margin: 0,
    padding: 0,
    // We'll keep the title from sliding up too far
    transform: hovered ? 'translateY(-15px)' : 'translateY(0)',
    transition: 'transform 0.3s ease',
    zIndex: 2,
  };

  // Overlay for description + button
  const overlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: hovered ? '100%' : '0%',
    // We'll use a gradient overlay for a 'premium' effect
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))',
    color: '#fff',
    overflow: 'hidden',
    transition: 'height 0.4s ease',
    zIndex: 1,
  };

  // Container for the actual description text and button inside the overlay
  const overlayContentStyle = {
    position: 'absolute',
    bottom: '1rem',
    left: '1rem',
    right: '1rem',
    opacity: hovered ? 1 : 0,
    transform: hovered ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  };

  // Description text
  const descStyle = {
    fontSize: isMobile ? '0.9rem' : '1rem',
    lineHeight: 1.5,
    marginBottom: '1rem',
    marginTop: '0.5rem',
  };

  // "Discover More" button
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: isMobile ? '0.9rem' : '1rem',
    border: '1px solid white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  };

  const handleButtonMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = 'white';
    e.currentTarget.style.color = '#3b8ca7';
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleButtonMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.color = 'white';
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div
      style={blockStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* The background image */}
      <div style={imageStyle}>
        <h2 style={titleStyle}>{experience.title}</h2>
      </div>

      {/* Overlay that appears on hover */}
      <div style={overlayStyle}>
        <div style={overlayContentStyle}>
          <p style={descStyle}>{experience.description}</p>
          <button
            style={buttonStyle}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          >
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeExperience;
