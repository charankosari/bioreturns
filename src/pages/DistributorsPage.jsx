import React, { useState } from "react";

function BecomeDistributorPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://my-hono-app.shivacharankosari099.workers.dev/distributors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then(() => {
        setSubmitted(true);
        setForm({ name: "", email: "", number: "", location: "" });
      })
      .catch((err) => console.error("Submission failed:", err));
  };

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Become a BioReturns Distributor
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
          Join our growing network of eco-friendly distributors. Submit your
          details below and we’ll connect with you soon!
        </p>
      </div>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">
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
          <input
            type="text"
            placeholder="Location / City"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            required
            className="border border-gray-300 p-3 rounded-lg"
          />

          <button
            type="submit"
            className="bg-green-600 text-white rounded-lg p-3 hover:bg-green-700 transition"
          >
            Submit Application
          </button>
        </form>
      ) : (
        <div className="text-center text-green-700 text-lg font-medium mt-6">
          Thank you! We’ll reach out to you soon. 🚀
        </div>
      )}
    </div>
  );
}

export default BecomeDistributorPage;
