import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PlasticVideo from "../assets/plasticvideo.mp4";

const PlasticAwarenessSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-100 via-green-50 to-green-100 py-16 lg:py-20">
      {/* Large Screens (PC only) */}
      <div className="hidden lg:grid max-w-7xl mx-auto px-6 grid-cols-2 gap-14 items-center">
        <div data-aos="fade-up">
          <span className="text-green-600 uppercase tracking-wide text-sm font-semibold">
            Environmental Impact
          </span>
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            What Happens to Plastic Waste?
          </h1>
          <div className="w-16 h-1 bg-green-600 rounded mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every day, massive amounts of plastic waste pile up in open fields,
            streets, and dumping grounds. These heaps choke water drains, clog
            empty lands, and turn cities into waste zones.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Eventually, these plastic dumps are burned in the open, releasing
            thick, poisonous smoke into the air. The toxic gases pollute our
            atmosphere, harming human health, wildlife, and contaminating nearby
            soil and water sources.
          </p>
        </div>

        <div data-aos="fade-up">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:scale-[1.01] transition">
            <video
              src={PlasticVideo}
              autoPlay
              muted
              loop
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <div data-aos="fade-up">
          <span className="text-green-600 uppercase tracking-wide text-xs font-semibold">
            Environmental Impact
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            What Happens to Plastic Waste?
          </h1>
          <div className="w-14 h-1 bg-green-600 rounded mb-5"></div>
        </div>

        <div data-aos="fade-up">
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <video
              src={PlasticVideo}
              autoPlay
              muted
              loop
              className="w-full h-auto rounded-2xl"
            />
          </div>
        </div>

        <div data-aos="fade-up">
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
            Every day, massive amounts of plastic waste pile up in open fields,
            streets, and dumping grounds. These heaps choke water drains, clog
            empty lands, and turn cities into waste zones.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Eventually, these plastic dumps are burned in the open, releasing
            thick, poisonous smoke into the air. The toxic gases pollute our
            atmosphere, harming human health, wildlife, and contaminating nearby
            soil and water sources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlasticAwarenessSection;
