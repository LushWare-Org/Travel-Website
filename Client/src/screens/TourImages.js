import React, { useState } from 'react';

const TourImages = () => {
  const destinationsImages = [
    'https://i.postimg.cc/Wb5WNvG7/pexels-asadphoto-1483053.jpg',
    'https://i.postimg.cc/50Fkmt7h/Home-Tab-1.png',
    'https://i.postimg.cc/cHyK45NY/Sri-Lanka.jpg',
    'https://i.postimg.cc/xTbP6B1D/India.jpg',
    'https://i.postimg.cc/63r87L9P/Malaysia.jpg',
    'https://i.postimg.cc/0j9b7Mjy/Thailand.jpg',
    'https://i.postimg.cc/GhnbSNpf/santorini-416136-1280.jpg',
    'https://i.postimg.cc/xdg79Bmp/Vietnam.jpg',
    'https://i.postimg.cc/150yxHn3/lake-6526995-1280.jpg',
    
  ];

  const activitiesImages = [
    'https://i.postimg.cc/rw7xng4S/diving-689831-1280.jpg',
    'https://i.postimg.cc/63PXn7g5/606e8ca07ac5d175-1-1wt4mcwxvxeqzscqkzr6sq.jpg',
    'https://i.postimg.cc/05Dr15qL/pexels-asadphoto-1430676.jpg',
    'https://i.postimg.cc/tgPPLPd8/diver-79597-1280.jpg',
    'https://i.postimg.cc/jjQ9RWtk/4.png',
    'https://i.postimg.cc/LXpfRXN5/sea-684351-1280.jpg',
    'https://i.postimg.cc/MpQGdvLv/pexels-francesco-ungaro-3420262.jpg',
    'https://i.postimg.cc/ZRTKbj5d/pexels-richard-segal-732340-1645028.jpg',

  ];

  const hotelsImages = [
    'https://i.postimg.cc/YqvgFBcR/pexels-asadphoto-3319704.jpg',
    'https://i.postimg.cc/nz3PQ6s4/2.png',
    'https://i.postimg.cc/jdmBc0Mv/1.png',
    'https://i.postimg.cc/MTzVfcxf/pexels-asadphoto-28843911.jpg',
    'https://i.postimg.cc/hGB7NJXZ/maldives-3220681-1280.jpg',
    'https://i.postimg.cc/c1MkzY62/Anantara20-Maldives20ishan-seefromthesky-gtt803-Wswn-A-unsplash.webp',
    'https://i.postimg.cc/gJMXwNN1/maldives-1973322-1280.jpg',
  ];

  const galleryDetails = [
    {
      title: 'Destinations',
      description: 'Discover breathtaking landscapes, pristine beaches, and captivating cultural landmarks at some of the most iconic destinations around the globe.',
      images: destinationsImages,
    },
    {
      title: 'Activities',
      description: 'Engage in thrilling adventures and immersive experiences, from underwater diving to mountain treks, designed to make your journey unforgettable.',
      images: activitiesImages,
    },
    {
      title: 'Hotels',
      description: 'Stay in luxurious accommodations that offer stunning views, world-class amenities, and exceptional hospitality for a truly relaxing experience.',
      images: hotelsImages,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);

  const openModal = (index) => {
    setSelectedSection(galleryDetails[index]); 
    setIsModalOpen(true);
  };

  const closeModal = (event) => {
    event.stopPropagation(); 
    setIsModalOpen(false);
  };

  const handleModalClick = (event) => {
    event.stopPropagation(); 
  };

  return (
    <div className="tour-images-container">
      <style>
        {`
          .tour-images-grid {
              display: flex;
              flex-direction: column;
              gap: 20px;
              width: 100%;
          }

          .tour-image-item {
              position: relative;
              width: 100%;
              max-width: 600px;
              overflow: hidden;
              border-radius: 10px;
              cursor: pointer;
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          }

          .tour-image-item img {
              width: 100%;
              height: auto;
              border-radius: 10px;
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .tour-image-item:hover img {
              transform: scale(1.05);
              box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
          }

          .image-overlay {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: rgba(0, 0, 0, 0.6);
              color: white;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              padding: 20px;
              opacity: 0;
              transition: opacity 0.3s ease;
          }

          .tour-image-item:hover .image-overlay {
              opacity: 1;
          }

          .tour-image-item h3 {
              font-size: 1.5rem;
              margin-bottom: 10px;
          }

          .tour-image-item p {
              font-size: 1rem;
              margin-bottom: 10px;
          }

          .modal {
            display: ${isModalOpen ? 'block' : 'none'};
            position: fixed;
            top: 65px;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            z-index: 1000;
            padding: 30px;
          }

          .modal-content {
            background: white;
            border-radius: 10px;
            padding: 20px;
            max-width: 900px;
            max-height: 800px;
            margin: auto;
            position: relative;
          }

          .modal-content img {
            width: 100%;
            height: auto;
            border-radius: 10px;
          }

          .modal-close {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 1.5rem;
            color: black;
            cursor: pointer;
          }

          .modal-gallery-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-top: 20px;
            max-height: 450px; 
            overflow-y: auto; /* Enable vertical scrolling */
          }

          .modal-gallery-grid img {
            width: 100%;
            height: auto;
            border-radius: 8px;
            transition: transform 0.3s ease;
          }

          .modal-gallery-grid img:hover {
            transform: scale(1.05);
          }
          
          .button-overlay {
          position: absolute;
          top: 46%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10; /* Ensures the button appears above the image */
        }

        .view-images-button {
          background-color: #007BFF;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          font-size: 1rem;
          cursor: pointer;
          border: none;

        }

        .view-images-button:hover {
          background-color: #0056b3;
          transform: scale(1.05);
        }
          
        `}
      </style>

      <div className="tour-images-grid">
        {galleryDetails.map((section, index) => (
          <div
            className="tour-image-item"
            key={index}
            onClick={() => openModal(index)} 
          >
            <img
              src={section.images[0]} 
              alt={`Preview of ${section.title}`}
              loading="lazy"
              className="w-full h-auto rounded-md object-cover"
              style={{
                width: '100%',
                borderRadius: '8px',
                objectFit: 'cover',
                height: '200px',
              }}
            />
            {/* Add the button directly over the image */}
            <div className="button-overlay">
              <button
                className="view-images-button bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                onClick={() => openModal(index)} // Open modal on button click
              >
                View Images
              </button>
            </div>
              
            <div className="image-overlay">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedSection && (
        <div className="modal" onClick={closeModal}> {/* Close modal if clicking outside the content */}
          <div
            className="modal-content"
            onClick={handleModalClick} 
          >
            <span className="modal-close" onClick={closeModal}>
              &times;
            </span>
            <h3 className="text-3xl font-extrabold text-center text-blue-800 mb-4 transform scale-110 transition-transform duration-500 ease-in-out hover:scale-105">
              {selectedSection.title}
            </h3>            
            <p className="text-lg text-center text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              {selectedSection.description}
            </p>
            <div className="modal-gallery-grid">
              {selectedSection.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Scenic view of ${selectedSection.title} (${index + 1})`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourImages;
