import React from "react";
import heroBanner from "../assets/hero-banner.png";

const Hero2 = () => {
  const handleGetQuote = (e) => {
    e.preventDefault();
    const quoteSection = document.getElementById("get-quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const inquiryField = quoteSection.querySelector("#inquiry");
        if (inquiryField) inquiryField.focus();
      }, 1000);
    }
  };

  return (
    <section id="hero" className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] flex items-center hero-grain">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-900/70 to-gray-900/40" />

      {/* Content */}
      <div className="relative z-10 section-container w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="max-w-xl lg:max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
            Serving the entire GTA
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6">
            Your Appliance
            <br />
            Delivered <span className="text-yellow-400">Today</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg mb-6 sm:mb-8 leading-relaxed">
            Professional appliance delivery across Toronto, Mississauga, Brampton,
            and the entire GTA. Local, owner-operated, and built to get it done right.
          </p>

          <a
            href="tel:6475602808"
            className="inline-block text-xl sm:text-2xl lg:text-3xl font-bold text-white hover:text-yellow-400 transition-colors duration-200 mb-6 sm:mb-8"
          >
            (647) 560-2808
          </a>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a
              href="tel:6475602808"
              className="bg-yellow-400 text-gray-900 px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-bold rounded-xl hover:bg-yellow-300 transition-all duration-200 shadow-lg shadow-yellow-400/20 text-center"
            >
              Call Now
            </a>
            <button
              onClick={handleGetQuote}
              className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg font-semibold rounded-xl hover:bg-white/20 transition-all duration-200 text-center"
            >
              Get a Free Quote
            </button>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm text-gray-400">
            {["Owner-Operated", "Insured", "White Glove Available"].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
