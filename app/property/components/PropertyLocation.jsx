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
      <div className="row-fv6 mb-d67">
        <div className="col-dpq col-353">
          <span className="block-lob section-jdn text-lxi">
            Request Map View
          </span>
          <div className="map-qda">
            <iframe
              src={property.map_embed}
              width={600}
              height={450}
              style={{ border: "0" }}
            />
          </div>
        </div>
      </div>
      <p />
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
