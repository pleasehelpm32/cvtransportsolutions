import React, { useState } from "react";

const FAQS = [
  {
    question: "How much does delivery cost?",
    answer:
      "Pricing depends on distance, number of items, and any additional services you need. Contact us for a free, no-obligation quote — we'll give you an honest price upfront.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve the Greater Toronto Area including Toronto, Mississauga, Brampton, Oakville, Burlington, Vaughan, Richmond Hill, Markham, Scarborough, Pickering, Ajax, Whitby, and Oshawa. If your area isn't listed, give us a call — we may still be able to help.",
  },
  {
    question: "How quickly can you deliver?",
    answer:
      "It depends on our schedule and your location. Give us a call and we'll let you know the earliest available time. We do our best to accommodate tight timelines when we can.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes, we carry commercial vehicle and liability insurance. If you have questions about specific coverage, feel free to ask when you call.",
  },
  {
    question: "What if something goes wrong during delivery?",
    answer:
      "We take every precaution — professional wrapping, secure loading, and careful handling. If anything does go wrong, call us right away and we'll work with you to make it right.",
  },
  {
    question: "How do I book a delivery?",
    answer:
      "Call us at (647) 560-2808, fill out the contact form on this page, or email contact@cvtransportsolutions.com. We'll get back to you quickly with availability and pricing.",
  },
  {
    question: "What's included in a standard delivery?",
    answer:
      "We pick up your appliance, transport it, and deliver it to your door or room of choice. We can also unpack, remove packaging, and haul away old appliances — just let us know what you need when you call.",
  },
  {
    question: "Do you work with businesses?",
    answer:
      "Yes — we work with appliance retailers, e-commerce businesses, and property managers. Contact us to discuss your delivery needs and we'll put together a solution that works for you.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      onClick={onClick}
      className="w-full py-5 sm:py-6 flex justify-between items-center text-left group"
    >
      <span className="text-base sm:text-lg font-semibold text-gray-900 pr-4 group-hover:text-yellow-600 transition-colors duration-200">
        {question}
      </span>
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
          isOpen
            ? "bg-yellow-400 text-gray-900 rotate-45"
            : "bg-gray-100 text-gray-500 group-hover:bg-yellow-100"
        }`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 opacity-100 pb-5 sm:pb-6" : "max-h-0 opacity-0"
      }`}
    >
      <p className="text-gray-600 leading-relaxed text-sm sm:text-base pr-12">
        {answer}
      </p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Everything you need to know about our delivery service
          </p>
        </div>
        <div className="bg-gray-50 rounded-2xl px-5 sm:px-8">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
