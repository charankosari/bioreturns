import { Link } from "react-router-dom";
import "../App.css";
import HomePagePic from "../assets/pic2.jpg";

function HomePage() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Background Image */}
      <img
        src={HomePagePic}
        alt="Plastic Waste Awareness"
        className="w-full h-full object-cover"
      />

      {/* Floating card on image */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 bg-white/60 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/30 max-w-xl">
        <h2 className="text-2xl font-bold mb-5 text-gray-900">
          BioReturns — A Biodegradable Product
        </h2>
        <p className="text-gray-800 mb-5 leading-relaxed">
          Every day, we use over <strong>5 crore plastic bags</strong> globally,
          harming our environment and wildlife. Plastic takes centuries to
          decompose, polluting our cities and oceans.
        </p>
        <p className="text-gray-800 mb-8 leading-relaxed">
          Switch to biodegradable, eco-friendly bags from{" "}
          <strong>BioReturns</strong>. Same price — but kind to nature and built
          for a sustainable, safe tomorrow.
        </p>
        <Link
          to="/products"
          className="inline-block px-6 py-3 rounded-lg bg-[#229000] text-white font-medium transition duration-300 hover:bg-[#228000]"
        >
          See Our Products
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
