import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './OffersSection.css';


function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}

const offers = [
  {
    title: "Maldives",
    description: "Explore pristine beaches, vibrant coral reefs, and luxurious overwater villas.",
    imageUrl: "https://i.postimg.cc/50Fkmt7h/Home-Tab-1.png",
    link: "none",
  },
  {
    title: "Sri Lanka",
    description: "Discover ancient temples, lush tea plantations, and stunning wildlife safaris.",
    imageUrl: "https://i.postimg.cc/cHyK45NY/Sri-Lanka.jpg",
    link: "none",
  },
  {
    title: "India",
    description: "Witness historic landmarks, diverse traditions, and flavorful culinary delights.",
    imageUrl: "https://i.postimg.cc/xTbP6B1D/India.jpg",
    link: "none",
  },
  {
    title: "Malaysia",
    description: "Experience iconic skyscrapers, rich cultural diversity, and breathtaking rainforests.",
    imageUrl: "https://i.postimg.cc/63r87L9P/Malaysia.jpg",
    link: "none",
  },
  {
    title: "Thailand",
    description: "Enjoy vibrant street markets, golden temples, and idyllic tropical islands.",
    imageUrl: "https://i.postimg.cc/0j9b7Mjy/Thailand.jpg",
    link: "none",
  },
  {
    title: "Vietnam",
    description: "Cruise through Ha Long Bay, savor street food, and explore charming ancient towns.",
    imageUrl: "https://i.postimg.cc/xdg79Bmp/Vietnam.jpg",
    link: "none",
  },
];


const OffersSection = () => {
  const isMobile = useIsMobile()
  return (
    <div className="offers-section-wrapper">
      <div className="offers-section">
        <div className="offers-header">
          <h2 className="offers-title">Exclusive Tour Collection</h2>
          <p className="offers-subtitle">
            Over a Variety of Destinations
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={isMobile? 1 : 3}
          navigation
          pagination={{ clickable: true }}
          loop={true} // Enables infinite looping
          className="swiper-container"
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              <a href={offer.link} className="offer-link" title={offer.title}>
                <div className="offer-image">
                  <img src={offer.imageUrl} alt={offer.title} className="offer-img" />
                </div>
                <div className="offer-text">
                  <h3 className="offer-title">{offer.title}</h3>
                  <p className="offer-description">{offer.description}</p>
                  <a href={offer.link} className="offer-btn">Discover Tours</a>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OffersSection;
