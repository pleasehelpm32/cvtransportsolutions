import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Services from "./components/Services";
import CookiePreferencesModal from "./components/CookieConsent";

function App({ apiKey }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <div className="pt-24">
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
        <CookieConsent
          location="bottom"
          buttonText="Accept All"
          declineButtonText="Reject All"
          cookieName="myWebsiteCookieConsent"
          style={{ background: "#2B373B" }}
          buttonStyle={{
            color: "#4e503b",
            fontSize: "13px",
            borderRadius: "3px",
            padding: "5px 10px",
            marginLeft: "10px",
          }}
          declineButtonStyle={{
            color: "#4e503b",
            fontSize: "13px",
            borderRadius: "3px",
            padding: "5px 10px",
            marginLeft: "10px",
          }}
          enableDeclineButton
          onDecline={() => {
            // Handle decline logic here
          }}
        >
          We value your privacy. We use cookies to enhance your browsing
          experience, serve personalized ads or content, and analyze our
          traffic. By clicking "Accept All", you consent to our use of cookies.{" "}
          <button
            style={{
              textDecoration: "underline",
              color: "#fff",
              background: "none",
              border: "none",
              padding: 0,
              font: "inherit",
              cursor: "pointer",
            }}
            onClick={() => setShowModal(true)}
          >
            Customize
          </button>
        </CookieConsent>
        <CookiePreferencesModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSave={(preferences) => {
            console.log(preferences);
            setShowModal(false);
            // Handle saving preferences here
          }}
        />
      </div>
    </Router>
  );
}

export default App;
