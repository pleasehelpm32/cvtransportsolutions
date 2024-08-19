import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App({ apiKey }) {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero apiKey={apiKey} />
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
