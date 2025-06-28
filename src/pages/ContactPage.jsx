import React, { useEffect, useState } from "react";

function ContactUsPage() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    product: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Fetch product names for dropdown
  useEffect(() => {
    fetch("https://my-hono-app.shivacharankosari099.workers.dev/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://your-api-endpoint/contact-queries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitted(true);
        setForm({
          name: "",
          email: "",
          number: "",
          product: "",
          location: "",
          message: "",
        });
      })
      .catch((err) => console.error("Failed to submit query:", err));
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
          Contact BioReturns
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
          Have a question, feedback, or business inquiry? Reach out to us — we’d
          love to connect.
        </p>
      </div>

      {/* Contact Info */}
      <div className="grid sm:grid-cols-2 gap-6 text-gray-700 text-base sm:text-lg mb-14">
        <div className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl shadow-sm bg-white">
          <div className="text-green-600 text-2xl">📧</div>
          <div>
            <div className="font-semibold">Email</div>
            <div>support@bioreturns.com</div>
          </div>
        </div>

        <div className="flex items-start gap-4 p-5 border border-gray-200 rounded-xl shadow-sm bg-white">
          <div className="text-green-600 text-2xl">📍</div>
          <div>
            <div className="font-semibold">Location</div>
            <div>3rd Floor, BioReturns HQ, Hyderabad</div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-14">
        <iframe
          src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="border border-gray-300 p-3 rounded-lg"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={form.number}
            onChange={(e) => setForm({ ...form, number: e.target.value })}
            required
            className="border border-gray-300 p-3 rounded-lg"
          />
          <select
            value={form.product}
            onChange={(e) => setForm({ ...form, product: e.target.value })}
            required
            className="border border-gray-300 p-3 rounded-lg"
          >
            <option value="">Select a Product</option>
            {products.map((product) => (
              <option key={product.id} value={product.name}>
                {product.name}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Your Location"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            required
            className="border border-gray-300 p-3 rounded-lg col-span-1 md:col-span-2"
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            className="border border-gray-300 p-3 rounded-lg col-span-1 md:col-span-2 min-h-[120px]"
          ></textarea>

          <button
            type="submit"
            className="bg-green-600 text-white rounded-lg p-3 col-span-1 md:col-span-2 hover:bg-green-700 transition"
          >
            Submit Query
          </button>
        </form>
      ) : (
        <div className="text-center text-green-700 text-lg font-medium mt-6">
          Thank you for contacting us! We’ll get back to you shortly. 🙌
        </div>
      )}
    </div>
  );
}

export default ContactUsPage;
