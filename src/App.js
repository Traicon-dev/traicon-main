import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Csr from "./components/Csr";
import ContactUs from "./components/ContactUs";
import Careers from "./components/Careers";
import Events from "./components/Events";
import PaymentsPolicies from "./components/PaymentsPolicies";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import Peoples from "./components/Peoples";
import BlogList from './components/BlogList';
import BlogPage from './components/BlogPage';
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const location = useLocation();


  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500); // 0.5s delay
  
    return () => clearTimeout(timer); // Cleanup the timeout on unmount
  }, [location]);
  

  return (
    <>
      <NavBar />
      <WhatsAppButton />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={<PageWrapper><Home /></PageWrapper>}
          />
          <Route
            path="/about"
            element={<PageWrapper><About /></PageWrapper>}
          />
          <Route
            path="/events"
            element={<PageWrapper><Events /></PageWrapper>}
          />
          <Route
            path="/csr"
            element={<PageWrapper><Csr /></PageWrapper>}
          />
          <Route
            path="/people"
            element={<PageWrapper><Peoples /></PageWrapper>}
          />
          <Route
            path="/careers"
            element={<PageWrapper><Careers /></PageWrapper>}
          />
          <Route
            path="/contactus"
            element={<PageWrapper><ContactUs /></PageWrapper>}
          />
             <Route
            path="/blog/:id"
            element={<PageWrapper><BlogPage /></PageWrapper>}
          />
             <Route
            path="/blogs"
            element={<PageWrapper><BlogList /></PageWrapper>}
          />
          <Route
            path="/payment"
            element={<PageWrapper><PaymentsPolicies /></PageWrapper>}
          />
          <Route
            path="/privacy"
            element={<PageWrapper><PrivacyPolicy /></PageWrapper>}
          />
          <Route
            path="/terms"
            element={<PageWrapper><TermsOfUse /></PageWrapper>}
          />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

// Page Wrapper for Fade Effect
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Start hidden
      animate={{ opacity: 1 }} // Fade in
      exit={{ opacity: 0 }} // Fade out
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth fade
    >
      {children}
    </motion.div>
  );
};

export default App;
