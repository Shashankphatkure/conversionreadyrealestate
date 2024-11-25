"use client";

import { useState } from "react";
import "./PropertyLocation.css";
import { MapPinIcon } from "@heroicons/react/24/solid";
import PropertyPopup from "./PropertyPopup";

export default function PropertyLocation({ property }) {
  const [showPopup, setShowPopup] = useState(false);

  const triggerPopup = (e) => {
    e.preventDefault();
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 0);
  };

  // Helper function to format landmarks
  const formatNearbyPlaces = () => {
    if (!property.location_details?.landmarks) return [];

    return property.location_details.landmarks.map((landmark) => {
      // Split landmark string into name and time/distance
      const [name, time] = landmark.split(/(?=\d)(.+)/).filter(Boolean);
      return {
        name: name.trim(),
        time: time?.trim() || "",
      };
    });
  };

  const nearbyPlaces = formatNearbyPlaces();

  return (
    <section id="location" className="section-9de shadow-8vf">
      <span />
      <span className="hea-6ig text-lxi pr-5">Location</span>
      <br />

      {/* Updated Map Container */}
      <div className="w-full ">
        <span className="block-lob section-jdn text-lxi ">
          Request Location Map
        </span>
        <div className="w-full aspect-[16/9] relative">
          <iframe
            src={property.map_embed}
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Landmarks Section */}
      <div className="location-list" style={{ textAlign: "left" }}>
        {nearbyPlaces.map((location, index) => (
          <div key={index} className="location-item">
            <MapPinIcon className="location-icon" />
            <span className="location-text">
              {location.name} - {location.time}
            </span>
          </div>
        ))}
      </div>

      <PropertyPopup
        property={property}
        trigger={showPopup}
        title="Send me Location Map"
      />
    </section>
  );
}
