"use client";

import { useState } from "react";
import "./PropertySitePlan.css";
import PropertyPopup from "./PropertyPopup";

export default function PropertySitePlan({ property }) {
  const [showPopup, setShowPopup] = useState(false);

  const triggerPopup = (e) => {
    e.preventDefault();
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 0);
  };

  // Get configurations from price_range
  const getConfigurations = () => {
    const priceRange = property.price_range || {};
    return Object.keys(priceRange).filter((key) => priceRange[key]);
  };

  // Format configuration name
  const formatConfigName = (configKey) => {
    return configKey.replace(/_/g, " ").toUpperCase();
  };

  // Get floor plan images or use first image as fallback
  const getFloorPlanImage = (index) => {
    const images = [
      "https://newprojectsonline.com/assets/uploads/floor_plans/1719552954-mer_1_bhk_thumb.webp",
      "https://newprojectsonline.com/assets/uploads/floor_plans/1719552962-merac_2_bhk_thumb.webp",
      "https://newprojectsonline.com/assets/uploads/floor_plans/1719552968-merac_3bhk_thumb.webp",
    ];
    // Return the image at index or fallback to first image
    return images[index] || images[0];
  };

  const configurations = getConfigurations();

  return (
    <section id="sitefloorplan" className="section-vhg shadow-y88">
      <span className="section-ara" />
      <span className="hea-xq2 text-vmg pr-5">Site &amp; Floor Plan</span>
      <span
        className="block-ifq section-7vm text-vmg"
        style={{ textAlign: "left" }}
      >
        Master Plan
      </span>
      <a className="text-oid" onClick={triggerPopup}>
        <div className="item-3xt mt-asz">
          <div className="at-property-etq master-5v7 text-5rz">
            <picture>
              <img
                className="shadow-y88 bor-5eh"
                src="https://newprojectsonline.com/assets/uploads/floor_plans/1719552913-ashar-merac-mulund-masterplan.webp"
              />
            </picture>
            <div className="overlay-bhv" />
            <span className="btn-g38">View Master Plan</span>
          </div>
        </div>
      </a>
      <span
        className="block-ifq section-7vm text-vmg mt-4am"
        style={{ textAlign: "left" }}
      >
        Floor Plan
      </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-asz">
        {configurations.map((config, index) => (
          <div key={config} className="w-full max-w-sm mx-auto">
            <a className="text-oid" onClick={triggerPopup}>
              <div className="item-3xt shadow-y88 bor-5eh">
                <div className="at-property-etq" style={{ aspectRatio: "4/3" }}>
                  <picture>
                    <img
                      className="floor-plan-tp3 blu-ao1 w-full h-full object-cover"
                      src={getFloorPlanImage(index)}
                      alt={formatConfigName(config)}
                    />
                  </picture>
                  <div className="overlay-bhv" />
                  <span className="btn-26v btn-g38">Enquire Now</span>
                </div>
                <div className="at-property-hx9 eff-4gn">
                  <h5 className="text-lg font-medium">
                    {formatConfigName(config)}
                  </h5>
                  <p className="text-sm text-gray-600 mt-1">
                    {property.price_range[config]
                      ? `₹ ${property.price_range[config]}`
                      : "Price on Request"}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <PropertyPopup
        property={property}
        trigger={showPopup}
        title="Send me plan details"
      />
    </section>
  );
}
