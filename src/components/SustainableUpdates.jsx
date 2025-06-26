import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function SustainableUpdates() {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    fetch("https://my-hono-app.shivacharankosari099.workers.dev/updates")
      .then((res) => res.json())
      .then((data) => setUpdates(data))
      .catch((err) => console.error("Failed to fetch updates:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const getShortDescription = (desc) => {
    try {
      const parsed = JSON.parse(desc);
      const text = parsed.paragraphs.map((p) => p.text).join(" ");
      return text.length > 90 ? text.slice(0, 90) + "..." : text;
    } catch (err) {
      return desc.length > 90 ? desc.slice(0, 90) + "..." : desc;
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 via-green-100 to-green-50 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="text-center mb-10" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Sustainable Updates
        </h2>
        <div className="mt-4 flex justify-center">
          <span className="block w-16 h-1 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      {updates.length > 0 && (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={updates.length > 3}
          centeredSlides={updates.length < 3}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {updates.map((update) => (
            <SwiperSlide key={update.id} data-aos="fade-up">
              <Link
                to={`/sustainable-updates/${update.id}`}
                state={{ update }}
                className="block group h-full"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
                  <div className="overflow-hidden">
                    <img
                      src={update.image}
                      alt={update.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {update.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">
                      {update.created_at}
                    </p>
                    <p className="text-gray-600 text-sm flex-1 leading-relaxed line-clamp-3">
                      {getShortDescription(update.description)}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default SustainableUpdates;
