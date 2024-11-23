"use client";

import { useState } from "react";
import "./PropertySiteTour.css";
import PropertyPopup from "./PropertyPopup";

export default function PropertySiteTour({ property }) {
  const [showPopup, setShowPopup] = useState(false);

  const triggerPopup = (e) => {
    e.preventDefault();
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 0);
  };

  return (
    <section
      id="sitevisit"
      className="section-lw2 shadow-pfo p-4 md:p-6 lg:p-8"
    >
      <span className="hea-6e1 text-vx6 pr-5 text-2xl md:text-3xl lg:text-4xl font-bold block mb-6">
        Virtual Site Tour
      </span>

      <div
        onClick={triggerPopup}
        className="cursor-pointer transition-transform hover:scale-[1.02] duration-300"
      >
        <div className="my-e8o relative overflow-hidden rounded-lg shadow-lg">
          <div className="at-property-sjq vsv-jgs aspect-video">
            <picture className="w-full h-full">
              <img
                src="https://newprojectsonline.com/assets/uploads/virtualTour/1719553101-ashar-merac-mulund-site-visit.webp"
                alt="Virtual Tour"
                className="w-full h-full object-cover"
              />
            </picture>

            <div className="text-cdb absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-7x8 text-center">
                <span className="text-mi7 jxlqo font-bold mb-2 block text-white text-xl md:text-2xl">
                  Virtual Tour
                </span>
                <span className="text-vx6 text-white text-lg md:text-xl block">
                  {property.name} At {property.location}
                </span>
              </div>
            </div>
          </div>

          <span className="md:hidden block text-center py-4 text-lg font-medium">
            {property.name} At {property.location}
          </span>
        </div>
      </div>

      <PropertyPopup
        property={property}
        trigger={showPopup}
        title="Virtual Site Visit"
      />
    </section>
  );
}
