import React from "react";
import { motion } from "framer-motion";
import "./Preloader.css";

function Preloader() {
  const title = "BioReturns";

  return (
    <motion.div
      className="preloader-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className="spinner"></div>
      <div className="preloader-text">
        {title.split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default Preloader;
