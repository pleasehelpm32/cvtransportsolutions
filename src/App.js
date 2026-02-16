import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Navbar from "./components/Navbar";
import Hero2 from "./components/Hero2";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import CookiePreferencesModal from "./components/CookieConsent";

function App({ apiKey }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Router>
      <div className="pt-[4.5rem]">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero2 />
                <Services />
                <Testimonials />
                <About />
                <FAQ />
                <Contact />
                {/* Footer */}
                <footer className="bg-gray-950 text-gray-500 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
                  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; {new Date().getFullYear()} CV Transport Solutions. All rights reserved.</p>
                    <a
                      href="tel:6475602808"
                      className="text-gray-400 hover:text-yellow-400 transition-colors font-medium"
                    >
                      (647) 560-2808
                    </a>
                  </div>
                </footer>
              </main>
            }
          />
        </Routes>
        <CookieConsent
          location="bottom"
          buttonText="Accept All"
          declineButtonText="Reject All"
          cookieName="myWebsiteCookieConsent"
          style={{
            background: "#111827",
            borderTop: "1px solid #1f2937",
            padding: "12px 16px",
            fontSize: "13px",
            alignItems: "center",
          }}
          buttonStyle={{
            background: "#fbbf24",
            color: "#111827",
            fontSize: "13px",
            fontWeight: "600",
            borderRadius: "8px",
            padding: "8px 16px",
            marginLeft: "8px",
          }}
          declineButtonStyle={{
            background: "transparent",
            border: "1px solid #374151",
            color: "#9ca3af",
            fontSize: "13px",
            borderRadius: "8px",
            padding: "8px 16px",
            marginLeft: "8px",
          }}
          enableDeclineButton
          onDecline={() => {}}
        >
          <span style={{ color: "#d1d5db" }}>
            We use cookies to improve your experience.{" "}
          </span>
          <button
            style={{
              textDecoration: "underline",
              color: "#fbbf24",
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
          }}
        />
      </div>
    </Router>
  );
}

export default App;
