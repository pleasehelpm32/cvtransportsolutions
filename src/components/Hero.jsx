import React from "react";
import { GoogleMap, useLoadScript, Polygon } from "@react-google-maps/api";
import { Link } from "react-router-dom";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 43.7,
  lng: -79.383,
};

const gtaCoordinates = [
  { lat: 43.580391, lng: -79.639297 },
  { lat: 43.855783, lng: -79.337229 },
  { lat: 43.855783, lng: -79.149323 },
  { lat: 43.580391, lng: -79.149323 },
  { lat: 43.580391, lng: -79.639297 },
];

const polygonOptions = {
  fillColor: "lightblue",
  fillOpacity: 0.3,
  strokeColor: "blue",
  strokeOpacity: 1,
  strokeWeight: 2,
};

const Hero = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const renderMap = () => {
    return (
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={9}>
        <Polygon paths={gtaCoordinates} options={polygonOptions} />
      </GoogleMap>
    );
  };
  const handleGetQuote = (e) => {
    e.preventDefault();
    const quoteSection = document.getElementById("get-quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const inquiryField = quoteSection.querySelector("#inquiry");
        if (inquiryField) {
          inquiryField.focus();
        }
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-12">
      {/* Left Column */}
      <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left space-y-6 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Fast & Reliable Appliance Delivery in the GTA
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          We understand the needs of our customers. That's why we offer fast,
          reliable, and professional delivery services tailored to your
          schedule.
        </p>
        <button
          onClick={handleGetQuote}
          className="bg-yellow-400 text-gray-800 mr-3 px-6 py-3 text-lg font-semibold rounded-md hover:bg-yellow-500 transition duration-300 ease-in-out shadow-md inline-block"
        >
          Get a Free Quote Today
        </button>
      </div>
      {/* Right Column */}
      <div className="md:w-1/2 w-full h-96">
        {loadError && <div>Error loading maps</div>}
        {!isLoaded && <div>Loading maps</div>}
        {isLoaded && renderMap()}
      </div>
    </div>
  );
};

export default Hero;
