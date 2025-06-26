import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

function OnlinePlatforms() {
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    fetch("https://my-hono-app.shivacharankosari099.workers.dev/platforms")
      .then((res) => res.json())
      .then((data) => setPlatforms(data))
      .catch((err) => console.error("Failed to fetch platforms:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-12 bg-gradient-to-br from-green-100 via-green-50 to-green-100 overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="text-center mb-8" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Available On
        </h2>
        <div className="mt-4 flex justify-center">
          <span className="block w-16 h-1 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      {platforms.length > 0 && (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          centeredSlides={platforms.length < 5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {platforms.map((platform) => (
            <SwiperSlide
              key={platform.id}
              className="flex items-center justify-center px-6"
            >
              <div
                className="w-32 h-20 flex items-center justify-center p-2 rounded-md"
                data-aos="fade-up"
              >
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={platform.image}
                    alt={platform.name}
                    className="h-16 w-auto object-contain"
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default OnlinePlatforms;
