import React from 'react';
import Slider from 'react-slick';
import './Experience.css';

const experiences = [
  { id: 1, imageUrl: 'https://i.postimg.cc/Sxqxyv9S/2.png' },
  { id: 2, imageUrl: 'https://i.postimg.cc/NG9MbTYc/4.png' },
  { id: 3, imageUrl: 'https://i.postimg.cc/J4jhCLGY/3.png' },
  { id: 4, imageUrl: 'https://i.postimg.cc/8k2CY5Pr/5.png' },
  { id: 5, imageUrl: 'https://i.postimg.cc/rpwy4Rg7/1.png' },
  { id: 6, imageUrl: 'https://i.postimg.cc/BngQtB5x/6.png' },
];

const Experience = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 6, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="hm-experience">
      <div className="home-section">
        <div className="section-heading text-center">
        </div>
        <br />

        <div className="hm-experience-slider">
          <Slider {...settings}>
            {experiences.map((experience) => (
              <div key={experience.id} className="slider-item">
                <img
                  src={experience.imageUrl}
                  alt={`Experience ${experience.id}`}
                  className="slider-image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Experience;
