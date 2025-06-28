import React, { useEffect, useState } from "react";

function CertificatesPage() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetch("https://my-hono-app.shivacharankosari099.workers.dev/certificates")
      .then((res) => res.json())
      .then((data) => setCertificates(data))
      .catch((err) => console.error("Failed to fetch certificates:", err));
  }, []);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
          BioReturns Certifications & Affiliations
        </h1>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-5xl mx-auto leading-relaxed">
          BioReturns, a leading bio-degradable bag manufacturing company, boasts
          a rich tapestry of affiliations and certifications, signifying our
          commitment to sustainable practices and quality. Aligned with DRDO, we
          showcase dedication to cutting-edge research in our field. ISO
          certification underscores our adherence to international standards,
          ensuring the eco-friendliness of our products. FSSAI certification
          guarantees the safety and compliance of our bio-degradable materials
          with food packaging regulations. MSME affiliation reflects our support
          for small and medium enterprises, fostering economic growth
          responsibly. CIPET accreditation acknowledges our expertise in polymer
          technology, while endorsement by the Telangana State Government
          signifies our role in regional development. Our certificate of
          incorporation solidifies our legal standing, emphasizing transparency
          and accountability in producing environmentally conscious solutions.
        </p>
      </div>

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            onClick={() => window.open(cert.url, "_blank")}
            className="cursor-pointer group transition-all duration-300 hover:scale-[1.03] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl"
          >
            <div className="p-4 sm:p-6 bg-gray-50 flex items-center justify-center h-48 sm:h-56 md:h-64 lg:h-72">
              <img
                src={cert.image}
                alt={cert.name}
                className="max-h-full max-w-full object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </div>
            <div className="py-3 px-3 text-center bg-white">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                {cert.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CertificatesPage;
