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
    <section id="location" className="section-9de shadow-8vf">
      <span />
      <span className="hea-6ig text-lxi pr-5">Location</span>
      <br />
      <div className="row-fv6 mb-d67">
        <div className="col-dpq col-353">
          <span className="block-lob section-jdn text-lxi">Map View</span>
          <div className="map-qda">
            <iframe
              src={property.location_details?.mapEmbed}
              width={400}
              height={450}
              style={{ border: "0" }}
            />
          </div>
        </div>
        <div className="col-ofk col-353 map-8tm text-zgr">
          <span className="block-lob section-jdn text-lxi text-zgr">
            Location Map
          </span>
          {property.location_details?.address && (
            <p className="mb-4">{property.location_details.address}</p>
          )}
          <a
            className="text-wix"
            onClick={triggerPopup}
            style={{ cursor: "pointer" }}
          >
            <div className="item-sxo mb-p1y">
              <div className="at-property-beb master-gz3">
                {property.location_details?.staticMap && (
                  <picture>
                    <img
                      src={property.location_details.staticMap}
                      alt="Location Map"
                      className="shadow-8vf bor-k37"
                    />
                  </picture>
                )}
                <div className="overlay-532" />
                <span className="btn-w1o">View Location Map</span>
              </div>
            </div>
          </a>
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
      <PropertyPopup property={property} trigger={showPopup} />
    </section>
  );
}
