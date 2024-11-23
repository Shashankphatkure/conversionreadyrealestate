"use client";

import "./PropertyPrice.css";
import { useState } from "react";
import PropertyPopup from "./PropertyPopup";

export default function PropertyPrice({ property }) {
  const [showPopup, setShowPopup] = useState(false);

  const formatPrice = (price) => {
    if (!price) return "Price on Request";
    return `₹ ${price} ${price >= 10000000 ? "Cr*" : "Lacs*"} + Onwards`;
  };

  const getFormattedArea = (area) => {
    if (!area) return "N/A";
    return `${area} sq.ft.`;
  };

  const triggerPopup = () => {
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 0);
  };

  return (
    <section
      id="pricing"
      className="section-2ot shadow-h9n p-4 md:p-6 lg:p-8 m-3 rounded-md"
    >
      <span className="section-bz2" />
      <span className="text-2xl md:text-3xl lg:text-4xl font-bold block mb-6 text-[#c9b06b]">
        Price
      </span>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {property.carpet_area?.["1_bhk"] && (
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-[#c9b06b]/20">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              1 BHK
            </h3>
            <p className="text-gray-600 text-lg mb-2">
              {getFormattedArea(property.carpet_area["1_bhk"])}
            </p>
            <p className="text-xl font-semibold text-[#c9b06b] mb-4">
              {formatPrice(property.price_range?.["1_bhk"]?.min)}
            </p>
            <button
              onClick={triggerPopup}
              className="w-full bg-[#c9b06b] text-white py-2 px-4 rounded-md
                hover:bg-[#b39a5a] transition-colors text-base md:text-lg"
            >
              Get Details
            </button>
          </div>
        )}

        {property.carpet_area?.["2_bhk"] && (
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-[#c9b06b]/20">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              2 BHK
            </h3>
            <p className="text-gray-600 text-lg mb-2">
              {getFormattedArea(property.carpet_area["2_bhk"])}
            </p>
            <p className="text-xl font-semibold text-[#c9b06b] mb-4">
              {formatPrice(property.price_range?.["2_bhk"]?.min)}
            </p>
            <button
              onClick={triggerPopup}
              className="w-full bg-[#c9b06b] text-white py-2 px-4 rounded-md
                hover:bg-[#b39a5a] transition-colors text-base md:text-lg"
            >
              Get Details
            </button>
          </div>
        )}

        {property.carpet_area?.["3_bhk"] && (
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-[#c9b06b]/20">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              3 BHK
            </h3>
            <p className="text-gray-600 text-lg mb-2">
              {getFormattedArea(property.carpet_area["3_bhk"])}
            </p>
            <p className="text-xl font-semibold text-[#c9b06b] mb-4">
              {formatPrice(property.price_range?.["3_bhk"]?.min)}
            </p>
            <button
              onClick={triggerPopup}
              className="w-full bg-[#c9b06b] text-white py-2 px-4 rounded-md
                hover:bg-[#b39a5a] transition-colors text-base md:text-lg"
            >
              Get Details
            </button>
          </div>
        )}

        {property.carpet_area?.["4_bhk"] && (
          <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow border border-[#c9b06b]/20">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              4 BHK
            </h3>
            <p className="text-gray-600 text-lg mb-2">
              {getFormattedArea(property.carpet_area["4_bhk"])}
            </p>
            <p className="text-xl font-semibold text-[#c9b06b] mb-4">
              {formatPrice(property.price_range?.["4_bhk"]?.min)}
            </p>
            <button
              onClick={triggerPopup}
              className="w-full bg-[#c9b06b] text-white py-2 px-4 rounded-md
                hover:bg-[#b39a5a] transition-colors text-base md:text-lg"
            >
              Get Details
            </button>
          </div>
        )}
      </div>

      <div className="max-w-2xl mx-auto">
        <button
          onClick={triggerPopup}
          className="w-full block transition-transform hover:scale-[1.02]"
        >
          <div className="rounded-lg overflow-hidden shadow-lg border border-[#c9b06b]/20 bg-white">
            <div className="relative">
              <img
                className="w-full h-48 object-cover"
                src="https://newprojectsonline.com/assets/img/comman/sample/costing-details-320w.jpg"
                alt="Complete Costing Details"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span
                  className="px-6 py-2 bg-[#c9b06b] text-white rounded-md text-lg 
                  hover:bg-[#b39a5a] transition-colors"
                >
                  Get Complete Details
                </span>
              </div>
            </div>
            <div className="p-4">
              <h5 className="text-xl md:text-2xl font-semibold text-center text-[#c9b06b]">
                Complete Costing Details
              </h5>
              <p className="text-gray-600 text-center mt-2">
                Get detailed pricing information including floor plans, payment
                plans, and more
              </p>
            </div>
          </div>
        </button>
      </div>

      <PropertyPopup
        property={property}
        trigger={showPopup}
        title="Send me costing details"
      />
    </section>
  );
}
