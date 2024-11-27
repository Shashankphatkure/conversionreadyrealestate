"use client";

import "./PropertyPrice.css";
import { useState } from "react";
import PropertyPopup from "./PropertyPopup";

export default function PropertyPrice({ property }) {
  const [showPopup, setShowPopup] = useState(false);

  const formatPrice = (price) => {
    if (!price) return "Price on Request";
    return `₹ ${price}`;
  };

  const getFormattedArea = (area) => {
    if (!area) return "N/A";
    return `${area} sq.ft.`;
  };

  const triggerPopup = () => {
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 0);
  };

  const getConfigurations = () => {
    const carpetArea = property.carpet_area || {};
    return Object.keys(carpetArea).filter((key) => carpetArea[key]);
  };

  const formatConfigName = (configKey) => {
    return configKey.replace(/_/g, " ").toUpperCase();
  };

  return (
    <section
      id="pricing"
      className="section-2ot shadow-h9n p-4 md:p-6 lg:p-8 m-3 rounded-md"
    >
      <span className="section-bz2" />
      <span className="text-2xl md:text-3xl lg:text-4xl font-bold block mb-6 text-black">
        Price
      </span>

      <div className="overflow-x-auto mb-8">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="p-4 text-left border">Type</th>
              <th className="p-4 text-left border">Carpet Area</th>
              <th className="p-4 text-left border">Price</th>
              <th className="p-4 text-left border"></th>
            </tr>
          </thead>
          <tbody>
            {getConfigurations().map((config) => (
              <tr key={config} className="border-b">
                <td className="p-4 border">{formatConfigName(config)}</td>
                <td className="p-4 border">
                  {getFormattedArea(property.carpet_area[config])}
                </td>
                <td className="p-4 border">
                  {formatPrice(property.price_range?.[config])}
                </td>
                <td className="p-4 border">
                  <button
                    onClick={triggerPopup}
                    className="bg-[#c9b06b] text-white py-2 px-4 rounded-md
                    hover:bg-[#b39a5a] transition-colors"
                  >
                    Click Here
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
                <span className="px-6 py-2 bg-[#c9b06b] text-white rounded-md text-lg">
                  Enquire Now
                </span>
              </div>
            </div>
            <div className="p-4">
              <h5 className="text-xl font-semibold text-center">
                Complete Costing Details
              </h5>
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
