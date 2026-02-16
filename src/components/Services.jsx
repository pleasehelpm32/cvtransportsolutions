import React from "react";
import { Helmet } from "react-helmet";
import ecommerce from "../assets/ecommerce-delivery.png";
import homedelivery from "../assets/home-delivery.png";
import lastmileservice from "../assets/lastmile-delivery.png";
import whitegloveservice from "../assets/whiteglove-service.png";

const CheckIcon = () => (
  <svg className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const scrollToInquiry = () => {
  const el = document.getElementById("get-quote");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const field = el.querySelector("#inquiry");
      if (field) field.focus();
    }, 500);
  }
};

const ServiceCard = ({ title, subtitle, description, includes, pricing, imageSrc, isReversed }) => (
  <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-stretch bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300`}>
    <div className="lg:w-1/2 relative">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-56 sm:h-64 lg:absolute lg:inset-0 lg:h-full object-cover"
        loading="lazy"
      />
    </div>
    <div className="lg:w-1/2 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
      <p className="text-xs sm:text-sm font-semibold text-yellow-600 uppercase tracking-wider mb-2">
        {subtitle}
      </p>
      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed mb-5 sm:mb-6 text-sm sm:text-base">
        {description}
      </p>
      {includes && (
        <ul className="space-y-2.5 mb-5 sm:mb-6">
          {includes.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      )}
      {pricing && (
        <p className="text-sm text-gray-400 mb-5 sm:mb-6">{pricing}</p>
      )}
      <button
        onClick={scrollToInquiry}
        className="self-start bg-gray-900 text-white font-semibold text-sm py-3 px-6 sm:px-8 rounded-xl hover:bg-gray-800 active:bg-gray-950 transition-colors duration-200"
      >
        Get a Quote
      </button>
    </div>
  </div>
);

const SERVICES = [
  {
    title: "Home Appliance Delivery",
    subtitle: "From Store to Your Door",
    description:
      "Bought a new fridge, washer, or dishwasher? We'll pick it up and deliver it right to the room of your choice. Serving homeowners across Toronto, Mississauga, Brampton, Oakville, and the entire GTA.",
    includes: [
      "Delivery to room of choice",
      "Unpacking and packaging removal",
      "Careful handling of stairs and tight spaces",
      "Old appliance haul-away available",
    ],
    pricing: "Contact us for a free quote",
    imageSrc: homedelivery,
  },
  {
    title: "E-Commerce & Retailer Delivery",
    subtitle: "Your Delivery Partner for Every Order",
    description:
      "We partner with appliance retailers and e-commerce businesses across the GTA. Unlike big carriers, we offer personalized service with real communication — your customers get a delivery experience that reflects well on your brand.",
    includes: [
      "Scheduled delivery windows",
      "Direct communication with driver",
      "Careful, professional handling",
      "Volume and recurring rates available",
    ],
    pricing: "Contact us to discuss your needs",
    imageSrc: ecommerce,
  },
  {
    title: "White Glove Service",
    subtitle: "Premium Delivery with Extra Care",
    description:
      "Our white glove service goes beyond standard delivery. We handle your appliance with extra attention — unpacking, placement, and cleanup so you don't have to lift a finger.",
    includes: [
      "Careful placement in room of choice",
      "Full unpacking and setup",
      "Packaging removal and cleanup",
      "Old appliance haul-away available",
    ],
    pricing: "Contact us for a free quote",
    imageSrc: whitegloveservice,
  },
  {
    title: "Last Mile Delivery",
    subtitle: "The Final Step, Done Right",
    description:
      "We handle the last mile for distributors and warehouses across the GTA. We know the tricky deliveries — condos, walk-ups, and tight suburban driveways.",
    includes: [
      "Warehouse pickup and final delivery",
      "Proof of delivery provided",
      "Condo and apartment building experience",
      "Flexible scheduling",
    ],
    pricing: "Contact us for a free quote",
    imageSrc: lastmileservice,
  },
];

const CITIES = ["Toronto", "Mississauga", "Brampton", "Oakville", "Vaughan", "Markham"];

const Services = () => (
  <>
    <Helmet>
      <title>CV Transport Solutions — Appliance Delivery in the GTA</title>
      <meta
        name="description"
        content="Professional appliance delivery services in the GTA. Home delivery, white glove service, e-commerce delivery, and last mile service in Toronto, Mississauga, Brampton."
      />
    </Helmet>
    <section id="services" className="section-padding bg-gray-50/50">
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            Professional appliance delivery across the Greater Toronto Area.
            From a single fridge to a full truckload — we handle it all.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>

        <p className="text-center text-gray-400 mt-12 sm:mt-16 text-sm sm:text-base">
          Serving{" "}
          {CITIES.map((city, i) => (
            <span key={city}>
              <span className="font-semibold text-gray-600">{city}</span>
              {i < CITIES.length - 1 ? ", " : ""}
            </span>
          ))}
          , and the entire GTA
        </p>
      </div>
    </section>
  </>
);

export default Services;
