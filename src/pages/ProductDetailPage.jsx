import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    fetch("https://my-hono-app.shivacharankosari099.workers.dev/products")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
        if (found) {
          setActiveImage(JSON.parse(found.image_urls)[0]);
        }
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, [id]);

  if (!product)
    return <div className="p-8 text-center">Loading product...</div>;

  const images = JSON.parse(product.image_urls);

  return (
    <div className="py-16 px-6 md:px-16 bg-green-50">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow p-8 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Image thumbnails + main image */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              {images.map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`${product.name} ${idx + 1}`}
                  onClick={() => setActiveImage(url)}
                  className={`w-20 h-20 object-cover rounded border cursor-pointer transition ${
                    activeImage === url
                      ? "ring-2 ring-[#229000] scale-105"
                      : "hover:scale-105"
                  }`}
                />
              ))}
            </div>

            <div className="flex-1">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-[450px] object-cover rounded-lg shadow"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      {/* Remaining products */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          See Our Other Products
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts
            .filter((p) => p.id !== parseInt(id))
            .map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                className="block bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={JSON.parse(item.image_urls)[0]}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
