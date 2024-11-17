"use client";

import "./PropertyPrice.css";
import { useState } from "react";
import PropertyPopup from "./PropertyPopup";

export default function PropertyPrice({ property }) {
  const [showPopup, setShowPopup] = useState(false);

  const formatPrice = (price) => {
    if (!price) return "Price on Request";
    return `₹ ${price} ${price >= 10000000 ? "Cr*" : "Lacs*"} + Onwards`;
  };

  const getFormattedArea = (area) => {
    if (!area) return "N/A";
    return `${area} sq.ft.`;
  };

  const triggerPopup = () => {
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 0);
  };

  return (
    <section id="pricing" className="section-2ot shadow-h9n">
      <span className="section-bz2" />
      <span className="hea-z85 text-w9d pr-5">Price</span>
      <div className="row-3b7">
        <div className="col-3ym">
          <table className="table-j4y table-k76 table-hwc bor-pz1">
            <thead>
              <tr>
                <th
                  className="bor-pz1 border-bottom-9fg"
                  style={{ textAlign: "left" }}
                >
                  Type
                </th>
                <th
                  className="bor-pz1 border-bottom-9fg"
                  style={{ textAlign: "left" }}
                >
                  Carpet Area
                </th>
                <th
                  className="bor-pz1 border-bottom-9fg border-right-yw4"
                  style={{ textAlign: "left" }}
                >
                  Price
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {property.carpet_area?.["1_bhk"] && (
                <tr>
                  <td
                    className="bor-pz1 border-left-coa border-top-4v4 border-bottom-9fg"
                    style={{ textAlign: "left" }}
                  >
                    1 BHK
                  </td>
                  <td
                    className="bor-pz1 border-left-coa border-top-4v4 border-bottom-9fg"
                    style={{ textAlign: "left" }}
                  >
                    {getFormattedArea(property.carpet_area["1_bhk"])}
                  </td>
                  <td className="price-rit" style={{ textAlign: "left" }}>
                    {formatPrice(property.price_range?.["1_bhk"]?.min)}
                  </td>
                  <td>
                    <button
                      className="btn-rwp btn-ljg info-q8m eff-lgs eff-asa"
                      onClick={triggerPopup}
                    >
                      Click Here
                    </button>
                  </td>
                </tr>
              )}

              {property.carpet_area?.["2_bhk"] && (
                <tr>
                  <td
                    className="bor-pz1 border-left-coa border-top-4v4 border-bottom-9fg"
                    style={{ textAlign: "left" }}
                  >
                    2 BHK
                  </td>
                  <td
                    className="bor-pz1 border-left-coa border-top-4v4 border-bottom-9fg"
                    style={{ textAlign: "left" }}
                  >
                    {getFormattedArea(property.carpet_area["2_bhk"])}
                  </td>
                  <td className="price-rit" style={{ textAlign: "left" }}>
                    {formatPrice(property.price_range?.["2_bhk"]?.min)}
                  </td>
                  <td>
                    <button
                      className="btn-rwp btn-ljg info-q8m eff-lgs eff-asa"
                      onClick={triggerPopup}
                    >
                      Click Here
                    </button>
                  </td>
                </tr>
              )}

              {property.carpet_area?.["3_bhk"] && (
                <tr>
                  <td
                    className="bor-pz1 border-left-coa border-top-4v4 border-bottom-9fg"
                    style={{ textAlign: "left" }}
                  >
                    3 BHK
                  </td>
                  <td
                    className="bor-pz1 border-left-coa border-top-4v4 border-bottom-9fg"
                    style={{ textAlign: "left" }}
                  >
                    {getFormattedArea(property.carpet_area["3_bhk"])}
                  </td>
                  <td className="price-rit" style={{ textAlign: "left" }}>
                    {formatPrice(property.price_range?.["3_bhk"]?.min)}
                  </td>
                  <td>
                    <button
                      className="btn-rwp btn-ljg info-q8m eff-lgs eff-asa"
                      onClick={triggerPopup}
                    >
                      Click Here
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="col-p53">
          <a
            className="text-zmc"
            onClick={triggerPopup}
            style={{ cursor: "pointer" }}
          >
            <div className="item-d4w shadow-h9n bor-pz1 mt-cqm">
              <div className="at-property-ow5">
                <picture>
                  <img
                    className="w-oyr"
                    src="https://newprojectsonline.com/assets/img/comman/sample/costing-details-320w.jpg"
                  />
                </picture>
                <div className="overlay-y7c" />
                <span className="btn-rwp btn-b5b" onClick={triggerPopup}>
                  Enquire Now
                </span>
              </div>
              <div className="at-property-jcf eff-lgs">
                <h5 style={{ cursor: "pointer" }}>Complete Costing Details</h5>
              </div>
            </div>
          </a>
        </div>
      </div>

      <PropertyPopup property={property} trigger={showPopup} />
    </section>
  );
}
