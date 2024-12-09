"use client";

import React, { useState } from "react";
import "./PropertyModal.css";
import PropertyPopup from "./PropertyPopup";

export default function PropertyModal({ property }) {
  const [showPopup, setShowPopup] = useState(false);

  const triggerPopup = () => {
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 0);
  };

  if (!property) return null;

  const {
    name,
    location,
    developer,
    configurations,
    price,
    overview,
    highlights,
    price_details,
  } = property;

  return (
    <div className="info-wod p-4 md:p-6 lg:p-8 rounded-md shadow-lg bg-white m-3">
      {/* Header Section */}
      <div className="space-y-2 md:space-y-3 mb-6">
        <span className="pro-anw inline-block bg-[#c9b06b] text-white px-3 py-1 rounded-md text-sm md:text-base">
          BOOKINGS OPEN
        </span>

        <h1 className="title-ytn text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
          {name}
        </h1>

        <div className="space-y-1">
          <h2 className="pro-xrg text-lg md:text-xl text-gray-700">
            At {location}
          </h2>
          <p className="pro-arw text-base md:text-lg text-gray-600">
            by {developer}
          </p>
        </div>
      </div>

      {/* Property Details Block */}
      <div className="block-zzx bg-gray-50 p-4 md:p-6 rounded-lg mb-6">
        <div className="space-y-2 mb-4">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
            {name}
          </h3>
          <p className="text-gray-600 text-base md:text-lg">
            At {location} by {developer}
          </p>
        </div>

        <ul className="animate-wxt space-y-3">
          <li className="flex items-start gap-2">
            <span className="hea-1z7 text-[#c9b06b] font-medium min-w-[120px] md:min-w-[140px]">
              ✓ Configurations
            </span>
            <span className="text-gray-700">: {configurations}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="hea-1z7 text-[#c9b06b] font-medium min-w-[120px] md:min-w-[140px]">
              ✓ Location
            </span>
            <span className="text-gray-700">: {location}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="hea-1z7 text-[#c9b06b] font-medium min-w-[120px] md:min-w-[140px]">
              ✓ Price
            </span>
            <span className="text-gray-700">: {price}</span>
          </li>
        </ul>
      </div>

      {/* Highlights Section */}
      <div className="mb-6">
        <div className="bg-[#c9b06b] text-white p-4 md:p-6 rounded-lg">
          <div className="border-2 border-white border-dashed p-4 rounded-lg">
            <h4 className="text-center text-lg md:text-xl font-bold mb-4">
              Project Highlights
            </h4>
            <div className="space-y-2">
              {highlights?.map((highlight, index) => (
                <p key={index} className="text-center text-base md:text-lg">
                  {highlight}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="tag-kh5 text-center space-y-4 mb-6">
        <p className="text-lg md:text-xl font-bold text-gray-800">
          {configurations}
        </p>
        <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#c9b06b]">
          Starts {price}
        </h4>
        <p className="text-lg md:text-xl font-semibold text-gray-700">
          Book Online Presentation Today!
        </p>
      </div>

      {/* CTA Button */}
      <button
        className="btn-cgc w-full md:w-auto md:min-w-[200px] px-6 py-3 
          bg-[#c9b06b] hover:bg-[#b39a5a] text-white rounded-lg 
          text-lg font-semibold transition-colors duration-200
          flex items-center justify-center mx-auto"
        onClick={triggerPopup}
      >
        Enquire Now
      </button>

      <PropertyPopup
        property={property}
        trigger={showPopup}
        title="Mail me pricing details"
      />
    </div>
  );
}
