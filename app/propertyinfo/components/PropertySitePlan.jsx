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

  return (
    <section
      id="sitefloorplan"
      className="section-vhg shadow-y88 p-4 md:p-6 lg:p-8 rounded-md m-3"
    >
      <span className="section-ara" />
      <span className="hea-xq2 text-black text-2xl md:text-3xl lg:text-4xl font-bold block mb-6">
        Site &amp; Floor Plan
      </span>

      <span className="block text-xl md:text-2xl font-semibold mb-4 text-gray-800">
        Master Plan
      </span>

      <a className="text-oid cursor-pointer block" onClick={triggerPopup}>
        <div className="mt-4">
          <div className="at-property-etq master-5v7 relative overflow-hidden rounded-lg">
            <picture className="block w-full">
              <img
                className="shadow-y88 w-full h-auto object-cover"
                src="https://newprojectsonline.com/assets/uploads/floor_plans/1719552913-ashar-merac-mulund-masterplan.webp"
                alt="Master Plan"
              />
            </picture>
            <div className="overlay-bhv absolute inset-0 bg-black/50" />
            <span
              className="btn-g38 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
              bg-[#c9b06b] text-white px-4 py-2 rounded-md hover:bg-[#b39a5a] transition-colors"
            >
              View Master Plan
            </span>
          </div>
        </div>
      </a>

      <span className="block text-xl md:text-2xl font-semibold mt-8 mb-4 text-gray-800">
        Floor Plan
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1 BHK */}
        <div className="w-full">
          <a className="text-oid cursor-pointer block" onClick={triggerPopup}>
            <div className="shadow-y88 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="at-property-etq relative">
                <picture>
                  <img
                    className="w-full h-auto object-cover"
                    src="https://newprojectsonline.com/assets/uploads/floor_plans/1719552954-mer_1_bhk_thumb.webp"
                    alt="1 BHK Floor Plan"
                  />
                </picture>
                <div className="overlay-bhv absolute inset-0 bg-black/50" />
                <span
                  className="btn-g38 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  bg-[#c9b06b] text-white px-4 py-2 rounded-md hover:bg-[#b39a5a] transition-colors"
                >
                  Enquire Now
                </span>
              </div>
              <div className="p-3 text-center bg-white border-t border-[#c9b06b]/20">
                <h5 className="text-lg font-semibold text-[#c9b06b]">1 BHK</h5>
              </div>
            </div>
          </a>
        </div>

        {/* 2 BHK */}
        <div className="w-full">
          <a className="text-oid cursor-pointer block" onClick={triggerPopup}>
            <div className="shadow-y88 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="at-property-etq relative">
                <picture>
                  <img
                    className="w-full h-auto object-cover"
                    src="https://newprojectsonline.com/assets/uploads/floor_plans/1719552962-merac_2_bhk_thumb.webp"
                    alt="2 BHK Floor Plan"
                  />
                </picture>
                <div className="overlay-bhv absolute inset-0 bg-black/50" />
                <span
                  className="btn-g38 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  bg-[#c9b06b] text-white px-4 py-2 rounded-md hover:bg-[#b39a5a] transition-colors"
                >
                  Enquire Now
                </span>
              </div>
              <div className="p-3 text-center bg-white border-t border-[#c9b06b]/20">
                <h5 className="text-lg font-semibold text-[#c9b06b]">2 BHK</h5>
              </div>
            </div>
          </a>
        </div>

        {/* 3 BHK */}
        <div className="w-full">
          <a className="text-oid cursor-pointer block" onClick={triggerPopup}>
            <div className="shadow-y88 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="at-property-etq relative">
                <picture>
                  <img
                    className="w-full h-auto object-cover"
                    src="https://newprojectsonline.com/assets/uploads/floor_plans/1719552968-merac_3bhk_thumb.webp"
                    alt="3 BHK Floor Plan"
                  />
                </picture>
                <div className="overlay-bhv absolute inset-0 bg-black/50" />
                <span
                  className="btn-g38 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                  bg-[#c9b06b] text-white px-4 py-2 rounded-md hover:bg-[#b39a5a] transition-colors"
                >
                  Enquire Now
                </span>
              </div>
              <div className="p-3 text-center bg-white border-t border-[#c9b06b]/20">
                <h5 className="text-lg font-semibold text-[#c9b06b]">3 BHK</h5>
              </div>
            </div>
          </a>
        </div>
      </div>

      <PropertyPopup
        property={property}
        trigger={showPopup}
        title="Send me plan details"
      />
    </section>
  );
}
