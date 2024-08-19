import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App({ apiKey }) {
  return (
    <Router>
      <div className="pt-24">
        {" "}
        {/* Add padding-top to account for fixed navbar */}
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
