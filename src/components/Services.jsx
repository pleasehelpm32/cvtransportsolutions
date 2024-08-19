import React from "react";
import ecommerce from "../assets/ecommerce.webp";
import homedelivery from "../assets/homedelivery.avif";
import lastmileservice from "../assets/lastmileservice.jpg";
import whitegloveservice from "../assets/whitegloveservice.jpg";

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
    } items-center mb-16`}
  >
    <div className="md:w-1/2 px-4 mb-6 md:mb-0">
      <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
      <h3 className="text-xl font-semibold mb-4 text-yellow-400">{subtitle}</h3>
      <p className="text-lg text-white mb-6">{description}</p>
      <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-500 transition duration-300">
        Learn More
      </button>
    </div>
    <div className="md:w-1/2">
      <img src={imageSrc} alt={title} className="rounded-lg shadow-lg" />
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
    <div className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
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
