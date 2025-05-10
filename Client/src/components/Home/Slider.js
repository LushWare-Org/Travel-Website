// import React, { useState, useEffect } from "react";
// import "./Slider.css"; 

// const Slider = () => {
//   const slides = [
//     {
//       imgDesktop:
//         "https://www.baros.com/wp-content/uploads/2021/05/home-thingstodo-new-feat-2.jpg",
//       title: "HONEYMOONS",
//       description:
//         "Embrace the magic of a truly unforgettable honeymoon in one of the world’s most romantic resorts; Baros Maldives.",
//     },
//     {
//       imgDesktop:
//         "https://www.baros.com/wp-content/uploads/2021/05/romantic-main-1920x865-1.jpg",
//       title: "ROMANTIC ACTIVITIES",
//       description:
//         "Romance is the essence of Baros Maldives and there are endless options to create unforgettable romantic moments together.",
//     },
//     {
//       imgDesktop:
//         "https://www.baros.com/wp-content/uploads/2021/05/reneval-of-vows-1920-main.jpg",
//       title: "RENEWAL OF VOWS",
//       description:
//         "The natural beauty of a ceremony by the sea, the pure romance of a wedding in the Maldives.",
//     },
//   ];

//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
//     }, 5000); 

//     return () => clearInterval(interval); // Cleanup on component unmount
//   }, [slides.length]);

//   const handlePrev = () => {
//     setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   const handleNext = () => {
//     setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   return (
//     <div className="slider">
//       <div
//         className="slider-container"
//         style={{ transform: `translateX(-${currentSlideIndex * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className="slider-item"
//             style={{ backgroundImage: `url(${slide.imgDesktop})` }}
//           >
//             <div className="slider-content">
//               <h3>{slide.title}</h3>
//               <p>{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="slider-controls">
//         <button className="prev" onClick={handlePrev}>
//           &#8592;
//         </button>
//         <button className="next" onClick={handleNext}>
//           &#8594;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slider;
