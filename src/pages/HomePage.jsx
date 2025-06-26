import { Link } from "react-router-dom";
import "../App.css";
import ProductFeatures from "../components/ProductFeatures";
import PlasticAwarenessSection from "../components/PlasticPage";
import BiodegradableAwarenessSection from "../components/BiodegradableAwarenessSection";
import OurClients from "../components/OurClients";
import AboutUs from "../components/AboutUs";
import OnlinePlatforms from "../components/OnlinePlatforms";

function HomePage() {
  return (
    <div>
      <div className="relative w-full h-[700px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <img
          src="https://res.cloudinary.com/charankosari77/image/upload/v1750914533/bioreturns/homepage-pic_n2wvkm.jpg"
          alt="Plastic Waste Awareness"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient + Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/10 backdrop-blur-xs"></div>

        {/* Text content directly on the image */}
        <div className="relative z-10 text-white text-center max-w-3xl mx-auto px-6 py-10">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight drop-shadow-2xl">
            BioReturns — A Biodegradable Product
          </h2>
          <p className="text-base sm:text-lg mb-6 leading-relaxed drop-shadow-lg">
            Every day, we use over <strong>5 crore plastic bags</strong>{" "}
            globally, harming our environment and wildlife. Plastic takes
            centuries to decompose, polluting our cities and oceans.
          </p>
          <p className="text-base sm:text-lg mb-8 leading-relaxed drop-shadow-lg">
            Switch to biodegradable, eco-friendly bags from{" "}
            <strong>BioReturns</strong>. Same price — but kind to nature and
            built for a sustainable, safe tomorrow.
          </p>
          <Link
            to="/products"
            className="inline-block px-8 sm:px-10 py-3 sm:py-4 rounded-lg bg-[#228000] text-white text-lg sm:text-xl font-semibold transition duration-300 hover:bg-[#229000] shadow-xl"
          >
            See Our Products
          </Link>
        </div>
      </div>
      <PlasticAwarenessSection />
      <BiodegradableAwarenessSection />
      <ProductFeatures />
      <OurClients />
      <AboutUs />
      <OnlinePlatforms />
    </div>
  );
}

export default HomePage;
