import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

function App({ apiKey }) {
  return (
    <div>
      <Navbar />
      <Hero apiKey={apiKey} />
      <Contact />
    </div>
  );
}

export default App;
