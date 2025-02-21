import React from "react";
import { motion } from "framer-motion";

const LoadingMotion = ({ isAnimating }) => {
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "24px",
      }}
      initial={{ opacity: 0 }} // Start invisible
      animate={{ opacity: isAnimating ? 1 : 0 }} // Fade in, then fade out
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
    >
      Loading...
    </motion.div>
  );
};

export default LoadingMotion;
