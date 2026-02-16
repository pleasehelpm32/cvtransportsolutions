import React from "react";

const VALUE_PROPS = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Talk to a Real Person",
    description:
      "When you call, you talk directly to the owner — not a call centre or automated system. Real answers, real accountability.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Insured",
    description:
      "We carry commercial vehicle and liability insurance so you can have peace of mind on every delivery.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "GTA Coverage",
    description:
      "From Mississauga to Scarborough, Brampton to Oakville — we know the GTA and can get to you.",
  },
];

const BADGES = [
  "Fully Insured",
  "Licensed & Registered",
  "Serving GTA Since 2024",
  "Owner-Operated",
];

const Testimonials = () => (
  <section id="testimonials" className="section-padding bg-white">
    <div className="section-container">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="section-heading">Why Choose CV Transport</h2>
        <p className="section-subheading">
          Professional, insured, and built for the GTA
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
        {VALUE_PROPS.map((prop) => (
          <div
            key={prop.title}
            className="bg-gray-50 rounded-2xl p-6 sm:p-8 hover:bg-yellow-50/50 transition-colors duration-300"
          >
            <div className="w-12 h-12 bg-yellow-400/10 text-yellow-600 rounded-xl flex items-center justify-center mb-5">
              {prop.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              {prop.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {prop.description}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        {BADGES.map((badge) => (
          <span
            key={badge}
            className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-gray-700"
          >
            <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {badge}
          </span>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400">
        Had a great experience?{" "}
        <a
          href="https://www.google.com/search?q=CV+Transport+Solutions+Reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-600 font-medium hover:text-yellow-700 underline underline-offset-2"
        >
          Leave us a Google review
        </a>{" "}
        — it helps other customers find us.
      </p>
    </div>
  </section>
);

export default Testimonials;
