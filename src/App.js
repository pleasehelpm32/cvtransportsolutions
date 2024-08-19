import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App({ apiKey }) {
  return (
    <Router>
      <div className="pt-24">
        <Helmet>
          <title>
            CV Transport Solutions - Fast & Reliable Appliance Delivery in the
            GTA
          </title>
          <meta
            name="description"
            content="CV Transport Solutions offers fast, reliable, and professional appliance delivery services in the Greater Toronto Area. Get a free quote today!"
          />
          <meta
            name="keywords"
            content="appliance delivery, GTA delivery, home delivery, e-commerce delivery, white glove service, last mile service"
          />
          <meta name="author" content="CV Transport Solutions" />
          <link rel="canonical" href="https://www.cvtransportsolutions.com" />
        </Helmet>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero apiKey={apiKey} />
                <Services />
                <Contact />
              </>
            }
          />
          {/* Add more routes here if you have other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
