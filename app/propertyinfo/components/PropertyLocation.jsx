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

  // Helper function to format nearby places with time
  const formatNearbyPlaces = () => {
    if (!property.location_details?.nearby) return [];

    const places = [];
    // Add schools
    property.location_details.nearby.schools?.forEach((school) =>
      places.push({ name: school.name, time: school.distance_time })
    );
    // Add shopping
    property.location_details.nearby.shopping?.forEach((shop) =>
      places.push({ name: shop.name, time: shop.distance_time })
    );
    // Add hospitals
    property.location_details.nearby.hospitals?.forEach((hospital) =>
      places.push({ name: hospital.name, time: hospital.distance_time })
    );
    // Add transport
    property.location_details.nearby.transport?.forEach((transport) =>
      places.push({ name: transport.name, time: transport.distance_time })
    );

    return places;
  };

  const nearbyPlaces = formatNearbyPlaces();

  return (
    <section id="location" className="section-9de shadow-8vf p-4 md:p-6 lg:p-8">
      <span className="hea-6ig text-lxi pr-5 text-2xl md:text-3xl lg:text-4xl font-bold block mb-6">
        Location
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
        <div className="w-full">
          <span className="block-lob section-jdn text-lxi text-xl md:text-2xl font-semibold mb-4 block">
            Map View
          </span>
          <div className="map-qda w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={property.location_details?.mapEmbed}
              className="w-full h-full border-0"
              title="Property Location Map"
              loading="lazy"
            />
          </div>
        </div>

        <div className="w-full">
          <span className="block-lob section-jdn text-lxi text-xl md:text-2xl font-semibold mb-4 block">
            Location Map
          </span>

          {property.location_details?.address && (
            <p className="mb-4 text-base md:text-lg">
              {property.location_details.address}
            </p>
          )}

          <div
            onClick={triggerPopup}
            className="cursor-pointer transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              {property.location_details?.staticMap && (
                <div className="aspect-video">
                  <img
                    src={property.location_details.staticMap}
                    alt="Location Map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <span className="btn-w1o text-white text-lg md:text-xl font-medium">
                      View Location Map
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
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
