"use client";

import { useState } from "react";
import "./PropertySitePlan.css";
import PropertyPopup from "./PropertyPopup";

export default function PropertySitePlan({ property }) {
  const [showPopup, setShowPopup] = useState(false);

  const triggerPopup = (e) => {
    e.preventDefault(); // Prevent default anchor tag behavior
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 0);
  };

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
      <div className="row-fx7 row-ebz row-735">
        <div className="col-gco">
          <a className="text-oid" onClick={triggerPopup}>
            <div className="item-3xt shadow-y88 bor-5eh mt-asz">
              <div className="at-property-etq">
                <picture>
                  <img
                    className="floor-plan-tp3 blu-ao1"
                    src="https://newprojectsonline.com/assets/uploads/floor_plans/1719552954-mer_1_bhk_thumb.webp"
                  />
                </picture>
                <div className="overlay-bhv" />
                <span className="btn-26v btn-g38">Enquire Now</span>
              </div>
              <div className="at-property-hx9 eff-4gn">
                <h5>1 BHK</h5>
              </div>
            </div>
          </a>
        </div>
        <div className="col-gco">
          <a className="text-oid" onClick={triggerPopup}>
            <div className="item-3xt shadow-y88 bor-5eh mt-asz">
              <div className="at-property-etq">
                <picture>
                  <img
                    className="floor-plan-tp3 blu-ao1"
                    src="https://newprojectsonline.com/assets/uploads/floor_plans/1719552962-merac_2_bhk_thumb.webp"
                  />
                </picture>
                <div className="overlay-bhv" />
                <span className="btn-26v btn-g38">Enquire Now</span>
              </div>
              <div className="at-property-hx9 eff-4gn">
                <h5>2 BHK</h5>
              </div>
            </div>
          </a>
        </div>
        <div className="col-gco">
          <a className="text-oid" onClick={triggerPopup}>
            <div className="item-3xt shadow-y88 bor-5eh mt-asz">
              <div className="at-property-etq">
                <picture>
                  <img
                    className="floor-plan-tp3 blu-ao1"
                    src="https://newprojectsonline.com/assets/uploads/floor_plans/1719552968-merac_3bhk_thumb.webp"
                  />
                </picture>
                <div className="overlay-bhv" />
                <span className="btn-26v btn-g38">Enquire Now</span>
              </div>
              <div className="at-property-hx9 eff-4gn">
                <h5>3 BHK</h5>
              </div>
            </div>
          </a>
        </div>
      </div>
      <PropertyPopup property={property} trigger={showPopup} />
    </section>
  );
}
