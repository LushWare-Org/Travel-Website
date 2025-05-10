// // // import React, { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';

// // // const RoomDashboard = () => {
// // //     const { id } = useParams(); // Extract the room ID from the URL
// // //     const [room, setRoom] = useState(null);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState(null);

// // //     useEffect(() => {
// // //         // Fetch room data from the backend API
// // //         fetch(`http://localhost:5000/rooms/${id}`)
// // //             .then(response => {
// // //                 if (!response.ok) {
// // //                     throw new Error('Failed to fetch room data');
// // //                 }
// // //                 return response.json();
// // //             })
// // //             .then(data => {
// // //                 setRoom(data);
// // //                 setLoading(false);
// // //             })
// // //             .catch(err => {
// // //                 setError(err.message);
// // //                 setLoading(false);
// // //             });
// // //     }, [id]);

// // //     if (loading) {
// // //         return <div>Loading...</div>;
// // //     }

// // //     if (error) {
// // //         return <div>Error: {error}</div>;
// // //     }

// // //     return (
// // //         <div>
// // //             <h1>{room.name}</h1>
// // //             <img src={room.imageUrls} alt={room.name} />
// // //             <p>Type: {room.type}</p>
// // //             <p>Max Guests: {room.maxCount}</p>
// // //             <p>Phone Number: {room.phoneNumber}</p>
// // //             <p>Rent Per Day: ${room.rentPerDay}</p>
// // //             <p>{room.description}</p>

// // //             {/* Add booking functionality and calendar here */}
// // //             <button>Book Now</button>
// // //         </div>
// // //     );
// // // };

// // // export default RoomDashboard;




// // import React from 'react';

// // const experiences = [
// //   {
// //     id: 1,
// //     title: 'Serenity Spa',
// //     description:
// //       'A haven of relaxation, a sanctuary hidden in the trees – Serenity Spa invites you into a world of indulgent spa and beauty rituals.',
// //     imageUrl:
// //       'https://www.baros.com/wp-content/uploads/2021/05/8-2.jpg',
// //     link: 'https://www.baros.com/the-spa',
// //   },
// //   {
// //     id: 2,
// //     title: 'Destination Dining',
// //     description:
// //       'At Baros, you can dine literally anywhere – on the beach, offshore, in the lush foliage of the island’s heart, or in the privacy of your Villa.',
// //     imageUrl:
// //       'https://www.baros.com/wp-content/uploads/2021/08/destination-dining-710x770-1.jpg',
// //     link: 'https://www.baros.com/dining/destination-dining',
// //   },
// //   {
// //     id: 3,
// //     title: 'Divers Baros Maldives',
// //     description:
// //       'Immerse yourself in a world of underwater wonder and discover the Maldives’ vibrant marine life.',
// //     imageUrl:
// //       'https://www.baros.com/wp-content/uploads/2021/08/Baros-Underwater-710x770-1.jpg',
// //     link: 'https://www.baros.com/divers-baros-maldives',
// //   },
// //   {
// //     id: 4,
// //     title: 'Romance',
// //     description:
// //       'Romance is the essence of Baros Maldives and there are endless options to create unforgettable romantic moments together.',
// //     imageUrl:
// //       'https://www.baros.com/wp-content/uploads/2021/05/1-11.jpg',
// //     link: 'https://www.baros.com/romance',
// //   },
// // ];

// // const HomeExperience = () => {
// //   return (
// //     <div className="hm-experience">
// //       <div className="home-section">
// //         <div className="section-heading text-center">
// //           <h2 className="main-heading text-3xl font-semibold mb-2">INDULGE IN A BOUNTIFUL WORLD</h2>
// //           <span className="sub-heading text-xl text-gray-500">Boundless Adventures</span>
// //         </div><br></br>

// //         <div className="hm-experience-sliders-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {experiences.map((experience) => (
// //             <div key={experience.id} className="common-block overflow-hidden rounded-lg shadow-lg group">
// //               <div
// //                 className="image-wrapper h-72 bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
// //                 style={{ backgroundImage: `url(${experience.imageUrl})` }}
// //               ></div>

// //               <div className="block-more-details p-6 bg-white">
// //                 <div className="block-title text-xl font-bold">{experience.title}</div>
// //                 <div className="block-description text-gray-600 mt-2">{experience.description}</div>
// //                 <div className="block-link-wrapper mt-4">
// //                   <a
// //                     href={experience.link}
// //                     className="btn btn-ghost text-sm text-blue-500 hover:text-blue-700"
// //                   >
// //                     Discover More
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HomeExperience;





// .experience-container {
//     display: flex;
//     flex-wrap: wrap; 
//     justify-content: center;
//     gap: 30px; 
//     padding: 40px;
//     background-color: #f9f9f9;
//   }
  
//   .experience-block {
//     flex: 1 1 calc(45% - 30px); 
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//     background-color: #fff;
//     border-radius: 10px;
//     overflow: hidden;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
//   }
  
//   .experience-block:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }
  
//   .experience-image {
//     width: 100%;
//     height: 250px;
//     background-size: cover;
//     background-position: center;
//   }
  
//   .experience-details {
//     padding: 20px;
//   }
  
//   .experience-details h2 {
//     font-size: 1.8rem;
//     color: #333;
//     margin-bottom: 10px;
//   }
  
//   .experience-details p {
//     font-size: 1rem;
//     color: #555;
//     line-height: 1.5;
//   }
  