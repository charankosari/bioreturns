import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductVideo from "../assets/productvideo.mp4";

const BiodegradableAwarenessSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-100 via-green-50 to-green-100 py-16 lg:py-20">
      {/* PC Layout (Video Left, Text Right) */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-6 grid-cols-2 gap-14 items-center">
        <div data-aos="fade-up">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:scale-[1.01] transition">
            <video
              src={ProductVideo}
              autoPlay
              muted
              loop
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        <div data-aos="fade-up">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Meet BioReturns — Nature's Alternative
          </h1>
          <div className="w-16 h-1 bg-green-600 rounded mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At BioReturns, we’re changing the way the world handles waste. Our
            products are made from natural materials like corn starch and plant
            fibers — completely biodegradable and eco-friendly.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Unlike traditional plastics, these alternatives break down naturally
            without releasing harmful toxins, preserving the planet’s health
            while offering the same durability and convenience.
          </p>
        </div>
      </div>

      {/* Mobile & Tab Layout */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <div data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            Meet BioReturns — Nature's Alternative
          </h1>
          <div className="w-14 h-1 bg-green-600 rounded mb-5"></div>
        </div>

        <div data-aos="fade-up">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <video
              src={ProductVideo}
              autoPlay
              muted
              loop
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        <div data-aos="fade-up">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            At BioReturns, we’re changing the way the world handles waste. Our
            products are made from natural materials like corn starch and plant
            fibers — completely biodegradable and eco-friendly.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Unlike traditional plastics, these alternatives break down naturally
            without releasing harmful toxins, preserving the planet’s health
            while offering the same durability and convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BiodegradableAwarenessSection;
