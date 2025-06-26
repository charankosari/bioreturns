import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
function OurClients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("https://my-hono-app.shivacharankosari099.workers.dev/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error("Failed to fetch clients:", err));
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="py-12 bg-gradient-to-br from-green-100 via-green-50 to-green-100 overflow-hidden px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
      <div className="text-center mb-8" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Our Clients
        </h2>
        <div className="mt-4 flex justify-center">
          <span className="block w-16 h-1 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      {clients.length > 0 && (
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          centeredSlides={clients.length < 5}
          slidesPerView={5}
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
          {clients.map((client) => (
            <SwiperSlide
              key={client.id}
              className="flex items-center justify-center px-6"
            >
              <div
                className="w-32 h-20 flex items-center justify-center p-2  rounded-md "
                data-aos="fade-up"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="h-16 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default OurClients;
