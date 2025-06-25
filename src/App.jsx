import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CertificatesPage from "./pages/CertificatesPage";
import DistributorsPage from "./pages/DistributorsPage";
import OtherPage from "./pages/OtherPage";
import ContactPage from "./pages/ContactPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Routes>
      {/* Pages with Navbar */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />
        <Route path="/distributors" element={<DistributorsPage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productSlug" element={<ProductDetailPage />} />
      </Route>

      {/* Pages without Navbar */}
      {/* <Route path="/admin" element={<AdminPage />} /> */}
    </Routes>
  );
}

export default App;
