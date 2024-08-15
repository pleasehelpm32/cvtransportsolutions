import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // New field for phone number
    inquiry: "",
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("sending");
    try {
      await axios.post("http://localhost:3001/send-email", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", inquiry: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    }
  };

  return (
    <div className="w-full bg-yellow py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-4xl font-bold mb-8 text-center text-black">
          Contact Us
        </h3>
        <div className="flex flex-col lg:flex-row gap-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg flex-grow"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  htmlFor="name"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-yellow"
                  placeholder="John Doe"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  htmlFor="email"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-yellow"
                  placeholder="johndoe@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block text-black text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-yellow"
                placeholder="(123) 456-7890"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="inquiry"
                className="block text-black text-sm font-bold mb-2"
              >
                Inquiry
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-3 py-2 text-black border border-gray-300 rounded-lg focus:outline-none focus:border-yellow"
                placeholder="How can we help you?"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                disabled={submitStatus === "sending"}
              >
                {submitStatus === "sending" ? "Sending..." : "Submit"}
              </button>
            </div>
            {submitStatus === "success" && (
              <p className="text-green-600 text-center mt-4">
                Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 text-center mt-4">
                Error sending message. Please try again.
              </p>
            )}
          </form>
          <div className="bg-white p-8 rounded-lg shadow-lg lg:w-1/3">
            <h4 className="text-2xl font-bold mb-4 text-black">Get in Touch</h4>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:contact@cvtransportsolutions.com"
                className="text-blue-600 hover:underline"
              >
                contact@cvtransportsolutions.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:6475602808"
                className="text-blue-600 hover:underline"
              >
                647 560 2808
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
