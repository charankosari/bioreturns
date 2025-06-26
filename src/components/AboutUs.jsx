import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-20 bg-gradient-to-r from-green-50 to-green-100 overflow-hidden px-4 sm:px-8 md:px-16 lg:px-32">
      {/* PC / Desktop view */}
      <div className="max-w-7xl mx-auto hidden lg:flex items-center gap-10">
        {/* Text Section */}
        <div className="flex-1" data-aos="fade-up">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-orange-500">BioReturns</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At <span className="font-semibold text-gray-900">BioReturns</span>,
            we’re on a mission to reduce plastic waste and promote biodegradable
            alternatives. Every product is designed with nature in mind,
            ensuring it’s safe for the environment and contributes towards a
            sustainable future.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We use eco-friendly materials like plant-based fibers, biodegradable
            polymers, and natural resources to create durable, earth-friendly
            products. By choosing{" "}
            <span className="font-semibold text-gray-900">BioReturns</span>,
            you’re supporting a cleaner, greener planet for generations to come.
          </p>
          <button className="px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-full shadow hover:bg-orange-600 transition duration-300">
            Explore Our Products
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-between" data-aos="fade-up">
          <img
            src="https://res.cloudinary.com/charankosari77/image/upload/v1750918396/bioreturns.png"
            alt="About BioReturns"
            className="w-full max-w-md rounded-2xl shadow-xl object-contain"
          />
        </div>
      </div>

      {/* Mobile / Tablet view */}
      <div className="max-w-4xl mx-auto flex flex-col lg:hidden gap-8">
        <h2
          className="text-4xl font-bold text-gray-900 text-center"
          data-aos="fade-up"
        >
          About <span className="text-orange-500">BioReturns</span>
        </h2>

        <div className="w-full flex justify-center" data-aos="fade-up">
          <img
            src="https://res.cloudinary.com/charankosari77/image/upload/v1750918396/bioreturns.png"
            alt="About BioReturns"
            className="w-full max-w-xs sm:max-w-sm rounded-2xl shadow-xl object-contain"
          />
        </div>

        <div data-aos="fade-up">
          <p className="text-base text-gray-700 leading-relaxed mb-4 text-center">
            At <span className="font-semibold text-gray-900">BioReturns</span>,
            we’re on a mission to reduce plastic waste and promote biodegradable
            alternatives. Every product is designed with nature in mind,
            ensuring it’s safe for the environment and contributes towards a
            sustainable future.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-6 text-center">
            We use eco-friendly materials like plant-based fibers, biodegradable
            polymers, and natural resources to create durable, earth-friendly
            products. By choosing{" "}
            <span className="font-semibold text-gray-900">BioReturns</span>,
            you’re supporting a cleaner, greener planet for generations to come.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-3 bg-orange-500 text-white text-base font-semibold rounded-full shadow hover:bg-orange-600 transition duration-300">
              Explore Our Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
