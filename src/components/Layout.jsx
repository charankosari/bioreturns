import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../pages/FooterPage";
function Layout() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://my-hono-app.shivacharankosari099.workers.dev/products"
        );
        const data = await res.json();
        setProducts(data);
        console.log("Fetched Products:", data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Navbar products={products} />
      </motion.div>

      {/* Page transitions — opacity only */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Outlet context={{ products }} />
        </motion.main>
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>
    </>
  );
}

export default Layout;
