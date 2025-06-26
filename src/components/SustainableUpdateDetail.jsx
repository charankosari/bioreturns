import React from "react";
import { useLocation, useParams } from "react-router-dom";

function SustainableUpdateDetails() {
  const { state } = useLocation();
  const { id } = useParams();

  if (!state || !state.update) {
    return <div className="p-8 text-center">No update data found.</div>;
  }

  const { update } = state;

  const renderDescription = (desc) => {
    try {
      const parsed = JSON.parse(desc);
      return parsed.paragraphs.map((p, idx) => (
        <p key={idx} className="text-gray-700 mb-4 text-lg">
          {p.text}
        </p>
      ));
    } catch (err) {
      return <p className="text-gray-700">{desc}</p>;
    }
  };

  return (
    <div className="max-w-5xl mx-auto pt-24 px-4 sm:px-8 md:px-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{update.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{update.created_at}</p>
      <img
        src={update.image}
        alt={update.title}
        className="w-full h-80 object-cover rounded-lg shadow mb-8"
      />
      {renderDescription(update.description)}
    </div>
  );
}

export default SustainableUpdateDetails;
