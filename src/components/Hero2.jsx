import React from "react";
import { Link } from "react-router-dom";
import gtaMapImage from "../assets/gtamap.png";

const Hero2 = () => {
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
    <div
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-12"
    >
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
        <img
          src={gtaMapImage}
          alt="GTA Map"
          className="w-full h-full object-cover object-center rounded-lg shadow-md scale-90 transform"
        />
      </div>
    </div>
  );
};

export default Hero2;
