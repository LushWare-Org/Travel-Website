import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ToursData from "./ToursData"; 
import { tourGallery } from "../components/Home/imageGalleryData"; 
import { Button, Typography, Box } from "@mui/material";
import { PhoneInTalk as PhoneInTalkIcon, ArrowForward as ArrowForwardIcon } from "@mui/icons-material";


const Itinerary = () => {
  const { id } = useParams(); 
  const [activeTab, setActiveTab] = useState("itinerary"); // State for the active tab

  const selectedTour = ToursData.find((tour) => tour._id.$oid === id);
  const matchingGallery = tourGallery.find(
    (gallery) => gallery._id.$oid === selectedTour?._id.$oid
  );

  const combinedTour = { ...selectedTour, ...matchingGallery }; // Merge the tour data with gallery data

  if (!combinedTour) {
    return <h2 className="text-center text-lg font-semibold">Tour not found. Please select a valid tour.</h2>;
  }
  const handleInquiryClick = () => {
    window.location.href = "tel:+1234567890"; 
  };
  
  return (
  <div className="itinerary-wrap flex flex-col w-full">
  <div className="tabs flex justify-between mb-6 gap-4 w-full">
  <div
    className={`tab flex items-center justify-center px-8 py-4 cursor-pointer text-xl font-semibold transition-all duration-300 transform flex-1 border-2 rounded-lg ${
      activeTab === "itinerary"
        ? "bg-blue-600 text-white scale-105 shadow-lg border-blue-600"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105 border-gray-300"
    } border-black hover:ring-2 hover:ring-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
    onClick={() => setActiveTab("itinerary")}
  >
    <i className="fas fa-map-marker-alt mr-2"></i> 
    Itinerary
  </div>
  <div
    className={`tab flex items-center justify-center px-8 py-4 cursor-pointer text-xl font-semibold transition-all duration-300 transform flex-1 border-2 rounded-lg ${
      activeTab === "summary"
        ? "bg-blue-600 text-white scale-105 shadow-lg border-blue-600"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105 border-gray-300"
    } border-black hover:ring-2 hover:ring-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
    onClick={() => setActiveTab("summary")}
  >
    <i className="fas fa-info-circle mr-2"></i> 
    Summary
  </div>
  <div
    className={`tab flex items-center justify-center px-8 py-4 cursor-pointer text-xl font-semibold transition-all duration-300 transform flex-1 border-2 rounded-lg ${
      activeTab === "finePrint"
        ? "bg-blue-600 text-white scale-105 shadow-lg border-blue-600"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105 border-gray-300"
    } border-black hover:ring-2 hover:ring-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
    onClick={() => setActiveTab("finePrint")}
  >
    <i className="fas fa-file-alt mr-2"></i> 
    Fine Print
  </div>
</div>
   {/* Tab Content */}
      <div className="tab-content p-6">
        {activeTab === "itinerary" && (
          <div className="itinerary-container">
            {Array.isArray(combinedTour.itinerary) &&
              combinedTour.itinerary.map((item, itemIndex) => (
                <div
                  className="itinerary-item flex flex-wrap border border-gray-300  p-6 mb-6 bg-white shadow-lg transform hover:scale-105 transition-all"
                  key={itemIndex}
                >
                  <div className="itinerary-desc-wrap flex flex-col gap-6 flex-1">
                    <div className="flex items-center ">
                      <div className="itinerary-day-box px-4 py-2 w-40 bg-blue-600 text-white font-semibold text-2xl">
                        {item.day}
                      </div>
                      <div className="itinerary-title bg-gray-200 px-6 py-2 w-[80%] text-2xl font-semibold text-blue-800">
                      {item.title}
                    </div>

                    </div>
                    <div className="itinerary-desc text-base leading-relaxed text-gray-700">
                      {item.description}
                    </div>
                    <div className="itinerary-features">
                      {Array.isArray(item.features) && (
                        <ul className="list-disc pl-6 text-lg text-gray-800">
                          {item.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                  {item.image && (
                  <div className="itinerary-item-img flex-shrink-0 w-64 h-60 rounded-xl overflow-hidden">
                    <img src={item.image} alt={item.alt} className="w-full h-full object-cover rounded-xl" />
                  </div>
                )}
                </div>
              ))}
          </div>
        )}

        {activeTab === "summary" && (
          <div className="summary-container">
            {Array.isArray(combinedTour.itinerary) &&
              combinedTour.itinerary.map((item, itemIndex) => (
                <div className="summary-item flex flex-wrap border border-gray-300 p-6 mb-6 bg-white shadow-lg transform hover:scale-105 transition-all" key={itemIndex}>
                  <div className="summary-desc-wrap flex flex-col gap-6 flex-1">
                    <div className="flex items-center">
                    <div className="itinerary-day-box px-4 py-2 w-40 bg-blue-600 text-white font-semibold text-2xl">
                        {item.day}
                      </div>
                      <div className="itinerary-title bg-gray-200 px-6 py-2 w-[80%] text-2xl font-semibold text-blue-800">
                      {item.title}
                    </div>
                    </div>
                    <div className="summary-icons flex gap-4 mb-6">
                      {item.summaryIcons && item.summaryIcons.map((icon, iconIndex) => (
                        <span key={iconIndex} className="text-3xl text-gray-600">
                          {icon}
                        </span>
                      ))}
                    </div>
                    <div className="summary-desc text-lg text-gray-700 leading-relaxed">
                      {item.summary || "No summary available."}
                    </div>
                  </div>
                  {item.image && (
                    <div className="summary-item-img flex-shrink-0 w-64 h-40 rounded-xl overflow-hidden">
                      <img src={item.image} alt={item.alt} className="w-full h-full object-cover rounded-xl" />
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}

        {activeTab === "finePrint" && (
          <div className="overflow-x-auto bg-white p-8 ">
              <Box className=" justify-center space-x-4 items-cente">
               <Box className="inline-block bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-3 px-8 mb-12 ml-4 shadow-xl">
              <Typography className="text-white text-7xl font-[Domine]">
                Price: USD {combinedTour.price.toLocaleString()}
              </Typography>
            </Box>
              <Button
                sx={{
                  background: "linear-gradient(to right, #1e3a8a, #4f46e5)",
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                  fontFamily: "Domine",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "auto",
                  "&:hover": {
                    background: "linear-gradient(to right, #1e40af, #3730a3)",
                  },
                }}
                onClick={handleInquiryClick}
              >
                <PhoneInTalkIcon sx={{ marginRight: "10px", fontSize: "inherit" }} />
                Inquiry Now
                <ArrowForwardIcon sx={{ marginLeft: "10px", fontSize: "inherit" }} />
              </Button>
            </Box>
            <h2 className="text-4xl font-semibold mb-6 text-center text-blue-900">What's Inside the Package?</h2>
            <table className="min-w-full table-auto border-separate border-spacing-0">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="px-8 py-6 text-center text-xl font-medium text-gray-600 border-r">Inclusions</th>
                  <th className="px-8 py-6 text-center text-xl font-medium text-gray-600">Exclusions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="min-h-[200px]">
                  <td className="px-8 py-6 border-b border-r">
                    {Array.isArray(combinedTour.inclusions) && combinedTour.inclusions.length > 0 ? (
                      <ul className="list-none gap-y-4 text-lg">
                        {combinedTour.inclusions.map((inc, incIndex) => (
                          <li key={incIndex} className="flex items-center text-green-500 mb-4">
                            <span className="mr-4 text-xl">&#10004;</span>{inc}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 text-lg">No inclusions available.</p>
                    )}
                  </td>
                  <td className="px-8 py-6 border-b">
                    {Array.isArray(combinedTour.exclusions) && combinedTour.exclusions.length > 0 ? (
                      <ul className="list-none gap-y-4 text-lg">
                        {combinedTour.exclusions.map((exc, excIndex) => (
                          <li key={excIndex} className="flex items-center text-red-500 mb-4">
                            <span className="mr-4 text-xl">&#10008;</span>{exc}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-700 text-lg">No exclusions available.</p>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>

            {/*Policies Section */}
            <div className="mt-12 space-y-12">
              <div>
                <h3 className="text-3xl font-semibold text-blue-900 mb-6">Refund Policies</h3>
                <p className="text-gray-700 text-lg mb-6 text-justify">
                  Refund policies are designed to uphold fairness and transparency, ensuring peace of mind for our valued travelers.
                </p>
                <ul className="list-disc pl-8 text-gray-800 text-lg leading-relaxed">
                  <li>Refunds are applicable under specific terms and conditions.</li>
                  <li>Review the cancellation policy before booking.</li>
                  <li>Refunds will be processed within 7–10 business days after confirmation.</li>
                </ul>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="text-3xl font-semibold text-blue-900 mb-6">Payment Methods</h3>
                <p className="text-gray-700 text-lg mb-6 text-justify">
                  We provide a variety of secure and convenient payment options..
                </p>
                <ul className="list-disc pl-8 text-gray-800 text-lg leading-relaxed">
                  <li>Credit cards and debit cards are accepted.</li>
                  <li>Secure online payment gateways available.</li>
                  <li>Bank transfers can be arranged for large amounts.</li>
                </ul>
              </div>

              {/* Payment Policies */}
              <div>
                <h3 className="text-3xl font-semibold text-blue-900 mb-6">Payment Policies</h3>
                <p className="text-gray-700 text-lg mb-6 text-justify">
                  To secure your booking, we require either full payment or a partial deposit.
                </p>
                <ul className="list-disc pl-8 text-gray-800 text-lg leading-relaxed">
                  <li>Full payment is required at the time of booking or as per the terms.</li>
                  <li>Deposits may be required for specific bookings.</li>
                  <li>Payments must be made according to the specified deadlines.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Itinerary;
