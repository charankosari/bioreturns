import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  GiLeafSwirl,
  GiRecycle,
  GiWallet,
  GiEarthAmerica,
} from "react-icons/gi";

const ProductFeatures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const features = [
    {
      icon: <GiLeafSwirl className="text-green-600 text-5xl" />,
      title: "100% Biodegradable",
      subtitle: "Breaks down naturally without harming the environment.",
    },
    {
      icon: <GiRecycle className="text-blue-600 text-5xl" />,
      title: "Eco-Friendly",
      subtitle: "Zero toxic waste — safe for soil and water.",
    },
    {
      icon: <GiWallet className="text-orange-500 text-5xl" />,
      title: "Cost-Effective",
      subtitle: "Affordable alternative to harmful plastics.",
    },

    {
      icon: <GiEarthAmerica className="text-teal-600 text-5xl" />,
      title: "Nature Friendly",
      subtitle: "Supports a sustainable, greener future.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100">
      <div className=" px-6 max-w-7xl mx-auto pb-20 ">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Products Offer
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover the benefits of switching to biodegradable, nature-friendly
            alternatives that protect the planet and fit your lifestyle.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:scale-[1.03] transition duration-300 flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {item.icon}
              <h4 className="text-xl font-semibold text-gray-800 mt-4">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 mt-2">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
