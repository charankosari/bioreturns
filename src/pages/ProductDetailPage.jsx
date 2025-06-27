import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [activeImage, setActiveImage] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    fetch("https://my-hono-app.shivacharankosari099.workers.dev/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
        if (found) {
          const images = JSON.parse(found.image_urls);
          setActiveImage(images[0]);
          setActiveIndex(0);
        }
      })
      .catch(console.error);
  }, [id]);

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading product...</p>
        </div>
      </div>
    );

  const images = JSON.parse(product.image_urls);
  const otherProducts = allProducts.filter((p) => p.id !== parseInt(id));

  // Function to format description with proper line breaks and spacing
  const formatDescription = (description) => {
    if (!description) return "";

    // Split by newlines and filter out empty lines
    const lines = description.split("\n").filter((line) => line.trim() !== "");

    return lines.map((line, index) => (
      <React.Fragment key={index}>
        {line.trim()}
        {index < lines.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Product Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative bg-gray-50 p-4 sm:p-6 lg:p-8">
              {/* Mobile/Tablet Swiper */}
              <div className="lg:hidden">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={0}
                  slidesPerView={1}
                  pagination={{
                    clickable: true,
                    el: ".main-swiper-pagination",
                  }}
                  className="main-product-swiper"
                >
                  {images.map((url, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="relative">
                        <img
                          src={url}
                          alt={`${product.name} - Image ${idx + 1}`}
                          className="w-full h-[300px] sm:h-[400px] object-cover rounded-xl shadow-lg"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                {/* Mobile/Tablet Pagination */}
                <div className="main-swiper-pagination flex justify-center gap-2 mt-4"></div>
              </div>

              {/* Desktop Image with Thumbnails */}
              <div className="hidden lg:block">
                <div className="relative group">
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-[500px] object-cover rounded-xl shadow-lg"
                  />
                </div>

                {/* Desktop Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-3 mt-6 justify-center">
                    {images.map((url, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveImage(url);
                          setActiveIndex(idx);
                        }}
                        className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          activeImage === url
                            ? "border-green-500 scale-110 shadow-md"
                            : "border-gray-200 hover:border-green-300 hover:scale-105"
                        }`}
                      >
                        <img
                          src={url}
                          alt={`Thumbnail ${idx}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Info Section */}
            <div className="p-4 sm:p-6 lg:p-12 flex flex-col justify-center">
              <div className="mb-4 sm:mb-6">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  {product.name}
                </h1>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4 sm:mb-6"></div>
              </div>

              <div className="prose prose-gray max-w-none">
                <div className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg whitespace-pre-line">
                  {formatDescription(product.description)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Products Section */}
        {otherProducts.length > 0 && (
          <div className="mb-16">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                Explore More Products
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Discover our complete range of sustainable and biodegradable
                solutions
              </p>
            </div>

            {/* Swiper Carousel */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={16}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                pagination={{
                  clickable: true,
                  el: ".swiper-pagination",
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                  },
                }}
                className="overflow-hidden"
              >
                {otherProducts.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link
                      to={`/product/${item.id}`}
                      className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-green-200 transform hover:-translate-y-1 block"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={JSON.parse(item.image_urls)[0]}
                          alt={item.name}
                          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-4 sm:p-6">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                          {item.name}
                        </h4>
                        <div className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                          {formatDescription(item.description)}
                        </div>
                        <div className="mt-3 sm:mt-4 flex items-center text-green-600 font-medium text-xs sm:text-sm">
                          View Details
                          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
              </button>
              <button className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110">
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-700" />
              </button>

              {/* Custom Pagination */}
              <div className="swiper-pagination flex justify-center gap-2 mt-6 sm:mt-8"></div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: all 0.2s ease;
        }

        @media (min-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 48px;
            height: 48px;
          }
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: white;
          transform: translateY(-50%) scale(1.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          display: none;
        }

        .swiper-pagination {
          position: relative;
          bottom: 0;
          left: 0;
          right: 0;
          margin-top: 1.5rem;
        }

        @media (min-width: 640px) {
          .swiper-pagination {
            margin-top: 2rem;
          }
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            border-radius: 6px;
          }
        }

        .swiper-pagination-bullet-active {
          background: #10b981;
          width: 24px;
        }

        @media (min-width: 640px) {
          .swiper-pagination-bullet-active {
            width: 32px;
          }
        }

        .swiper-slide {
          height: auto;
        }

        /* Main product swiper styles */
        .main-product-swiper {
          border-radius: 12px;
          overflow: hidden;
        }

        .main-swiper-pagination {
          margin-top: 1rem;
        }

        .main-swiper-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          opacity: 1;
          border-radius: 4px;
          transition: all 0.2s ease;
        }

        .main-swiper-pagination .swiper-pagination-bullet-active {
          background: #10b981;
          width: 24px;
        }
      `}</style>
    </div>
  );
}

export default ProductDetailPage;
