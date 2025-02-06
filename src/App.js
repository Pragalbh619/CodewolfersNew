import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./screens/Home";
import Service from "./screens/Service";
import Careers from "./screens/Careers";
import NavHeader from "./components/NavHeader";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WeServe from "./screens/Industry";  
import OurClients from "./screens/Clients";
import Portfolio from "./screens/Portfolio";
import TermsAndConditions from "./screens/TermsAndConditions";
import Policy from "./screens/Policy";
import ContactUs from "./screens/ContactUs";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <NavHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Service />} />
          <Route path="/industries-we-serve" element={<WeServe />} />    
          <Route path="/careers" element={<Careers />} />
          <Route path="/our-clients" element={<OurClients />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<Policy />} />
        </Routes>
      </Router>
      <Footer />
    </HelmetProvider>
  );
};

export default App;
