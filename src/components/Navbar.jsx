import React, { useState, useEffect } from "react";
import logo from "../assets/cvtransportlogo.jpeg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NAV_LINKS = [
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Why Us" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = nav ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [nav]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setNav(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-[4.5rem] px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img className="w-10 h-10 rounded-lg" src={logo} alt="CV Transport Solutions logo" />
          <span className="hidden sm:block font-bold text-gray-900 text-lg tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
            CV Transport
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Phone CTA — desktop */}
        <a
          href="tel:6475602808"
          className="hidden md:inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-yellow-300 transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          (647) 560-2808
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setNav(!nav)}
          className="md:hidden p-2 -mr-2 text-gray-700"
          aria-label="Toggle menu"
        >
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {nav && (
        <div className="fixed inset-0 bg-white z-40 md:hidden flex flex-col">
          <div className="flex justify-between items-center h-[4.5rem] px-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <img className="w-10 h-10 rounded-lg" src={logo} alt="CV Transport Solutions logo" />
              <span className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                CV Transport
              </span>
            </div>
            <button onClick={() => setNav(false)} className="p-2 -mr-2" aria-label="Close menu">
              <AiOutlineClose size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            {[{ id: "hero", label: "Home" }, ...NAV_LINKS].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-semibold text-gray-900 hover:text-yellow-500 transition-colors py-3 px-6"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="p-6 border-t border-gray-100">
            <a
              href="tel:6475602808"
              className="flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 font-bold text-lg py-4 rounded-xl hover:bg-yellow-300 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (647) 560-2808
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
