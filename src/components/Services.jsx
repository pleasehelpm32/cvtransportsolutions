import React from "react";
import ecommerce from "../assets/ecommerce.webp";
import homedelivery from "../assets/homedelivery.avif";
import lastmileservice from "../assets/lastmileservice.jpg";
import whitegloveservice from "../assets/whitegloveservice.jpg";

const scrollToInquiry = () => {
  const inquiryElement = document.getElementById("get-quote");
  if (inquiryElement) {
    inquiryElement.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const inquiryField = inquiryElement.querySelector("#inquiry");
      if (inquiryField) {
        inquiryField.focus();
      }
    }, 500);
  }
};

const ServiceItem = ({
  title,
  subtitle,
  description,
  imageSrc,
  isReversed,
}) => (
  <div
    className={`flex flex-col ${
      isReversed ? "md:flex-row-reverse" : "md:flex-row"
    } items-center mb-24 bg-gray-900 rounded-lg overflow-hidden shadow-2xl`}
  >
    <div className="md:w-1/2 p-8">
      <h2 className="text-3xl font-bold mb-2 text-yellow-400">{title}</h2>
      <h3 className="text-xl font-semibold mb-4 text-white">{subtitle}</h3>
      <p className="text-lg text-gray-300 mb-8">{description}</p>
      <div className="flex justify-center">
        <button
          onClick={scrollToInquiry}
          className="bg-yellow-400 text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition duration-300 transform hover:scale-105 shadow-lg"
        >
          Get a Quote
        </button>
      </div>
    </div>
    <div className="md:w-1/2">
      <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Home Delivery",
      subtitle: "Reliable Service, Right to Your Door",
      description:
        "From our warehouse to your front door, we ensure a seamless delivery process that's both timely and precise. With full visibility every step of the way, you can trust that your product will arrive safely, right to you.",
      imageSrc: homedelivery,
    },
    {
      title: "E-commerce Delivery",
      subtitle: "Tailored Delivery Solutions, Every Day",
      description:
        "We go beyond the standard approach, customizing our delivery solutions to meet your specific needs—something our larger competitors can't always offer. By managing every detail of the delivery process, we ensure your products reach your customers smoothly and efficiently, giving you the freedom to focus on what matters most: growing your business.",
      imageSrc: ecommerce,
    },
    {
      title: "White Glove Service",
      subtitle: "Premium Care for Your Most Valuable Deliveries",
      description:
        "Our white glove service is designed for those special deliveries that require extra attention. Whether it's a high-value item or something delicate, we handle every aspect with precision—from careful handling to installation and setup. We're committed to providing an exceptional, personalized experience that leaves your most discerning customers delighted.",
      imageSrc: whitegloveservice,
    },
    {
      title: "Last Mile Service",
      subtitle: "The Final Step in Delivery, Perfected",
      description:
        "In the crucial last mile of delivery, we excel. Our last mile service is dedicated to ensuring your products reach their final destination swiftly and securely. By focusing on this essential step, we help you enhance customer satisfaction and build lasting loyalty.",
      imageSrc: lastmileservice,
    },
  ];

  return (
    <div id="services" className="bg-black py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-yellow-400 mb-16">
          Our Services
        </h1>
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            imageSrc={service.imageSrc}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
