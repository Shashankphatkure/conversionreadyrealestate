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

  // Updated helper function to format nearby places
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
    <section
      id="location"
      className="section-9de shadow-8vf p-4 md:p-6 lg:p-8 rounded-md m-3"
    >
      <span className="hea-6ig text-lxi pr-5 text-2xl md:text-3xl lg:text-4xl font-bold block mb-6">
        Location
      </span>

      <div className="w-full mb-8">
        <span className="block-lob section-jdn text-lxi text-xl md:text-2xl font-semibold mb-4 block">
          Request Location Map
        </span>
        <div className="w-full aspect-[16/9] relative">
          <iframe
            src={property.map_embed}
            className="absolute inset-0 w-full h-full border-0"
            title="Property Location Map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen=""
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nearbyPlaces.map((location, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 p-3 rounded-lg bg-gray-50 shadow-sm"
          >
            <MapPinIcon className="h-5 w-5 text-primary flex-shrink-0" />
            <span className="text-sm md:text-base">
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
