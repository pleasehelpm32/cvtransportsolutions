import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiry: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);
  const inquiryRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");
    try {
      await axios.post("/.netlify/functions/send-email", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", inquiry: "" });
      if (typeof window.fbq === "function") {
        window.fbq("track", "Lead");
      }
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "YOUR_GOOGLE_ADS_ID/YOUR_CONVERSION_LABEL",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    }
  };

  useEffect(() => {
    if (inquiryRef.current && window.location.hash === "#get-quote") {
      inquiryRef.current.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inquiryRef.current.focus(), 100);
    }
  }, []);

  const inputClasses =
    "w-full px-4 py-3 text-gray-900 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-shadow duration-200 text-sm sm:text-base";
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <section id="contact" className="section-padding bg-amber-50/60">
      <div id="get-quote" className="section-container">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="section-heading">Get in Touch</h2>
          <p className="section-subheading">
            Ready for a quote? Fill out the form or give us a call.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className={labelClasses}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelClasses}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="(123) 456-7890"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="inquiry" className={labelClasses}>How can we help?</label>
                <textarea
                  id="inquiry"
                  name="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  required
                  rows="5"
                  ref={inquiryRef}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your delivery needs..."
                />
              </div>
              <button
                type="submit"
                disabled={submitStatus === "sending"}
                className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 text-gray-900 font-bold py-3.5 px-8 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {submitStatus === "sending" ? "Sending..." : "Send Message"}
              </button>
              {submitStatus === "success" && (
                <p className="text-green-600 text-sm font-medium mt-4">
                  Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-sm font-medium mt-4">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}
            </form>

            {/* Contact info */}
            <div className="lg:col-span-2 flex flex-col gap-4 sm:gap-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Contact Info</h3>
                <div className="space-y-4">
                  <a
                    href="tel:6475602808"
                    className="flex items-start gap-3 text-gray-600 hover:text-yellow-600 transition-colors group"
                  >
                    <svg className="w-5 h-5 mt-0.5 text-gray-400 group-hover:text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm sm:text-base font-medium">(647) 560-2808</span>
                  </a>
                  <a
                    href="mailto:contact@cvtransportsolutions.com"
                    className="flex items-start gap-3 text-gray-600 hover:text-yellow-600 transition-colors group"
                  >
                    <svg className="w-5 h-5 mt-0.5 text-gray-400 group-hover:text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm sm:text-base font-medium break-all">contact@cvtransportsolutions.com</span>
                  </a>
                </div>
              </div>

              <div className="bg-gray-900 p-6 sm:p-8 rounded-2xl text-white">
                <h3 className="font-bold mb-2 text-lg">Prefer to call?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Talk directly to the owner. No call centres, no waiting.
                </p>
                <a
                  href="tel:6475602808"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold text-sm py-3 px-6 rounded-xl hover:bg-yellow-300 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
