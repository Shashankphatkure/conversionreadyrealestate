"use client";

import React, { useState } from "react";
import "./PropertyModal.css";
import PropertyPopup from "./PropertyPopup";

export default function PropertyModal({ property }) {
  const [showPopup, setShowPopup] = useState(false);

  const triggerPopup = () => {
    setShowPopup(false);
    setTimeout(() => setShowPopup(true), 0);
  };

  if (!property) return null;

  const {
    name,
    location,
    developer,
    configurations,
    price,
    overview,
    highlights,
    price_details,
  } = property;

  return (
    <div className="info-wod overflow-7fp">
      <span className="pro-anw">BOOKINGS OPEN </span>
      <span className="title-ytn">{name}</span>
      <span className="pro-xrg">At {location}</span>
      <span className="pro-arw">by {developer}</span>
      <div className="block-zzx d-lg-y8h">
        <span>{name}</span>
        <span>
          At {location} by {developer}
        </span>
        <ul className="animate-wxt">
          <li>
            <span className="hea-1z7">✓ Configurations</span> : {configurations}
          </li>
          <li>
            <span className="hea-1z7">✓ Location</span> : {location}
          </li>
          <li>
            <span className="hea-1z7">✓ Price </span> : {price}
          </li>
        </ul>
      </div>
      <span
        className="block-vis mb-tv4"
        style={{
          background: "var(--colorPrimary)",
          color: "#fff",
          fontSize: "18px",
          textAlign: "center",
          padding: "5px",
          display: "block",
          margin: "25px 0px",
        }}
      >
        <span
          className="ani-2zn bou-35v inf-b1c"
          style={{
            display: "block",
            animationDuration: "3s",
            fontSize: "16px",
            border: "2px solid #fff",
            borderStyle: "dashed",
            color: "#fff",
          }}
        >
          <h5 style={{ textAlign: "center" }}>
            <b>
              {highlights?.map((highlight, index) => (
                <React.Fragment key={index}>
                  &nbsp;{highlight}
                  <br />
                </React.Fragment>
              ))}
            </b>
          </h5>
        </span>
      </span>
      <span className="tag-kh5">
        <p style={{ textAlign: "center" }}>
          <b>{configurations}</b>
        </p>
        <p style={{ textAlign: "center" }}>
          <b>Starts ₹ {price_details?.["Starting Price"]}</b>
        </p>
        <p style={{ textAlign: "center", fontSize: "14px" }}>
          <b>Book Online Presentation Today!</b>
        </p>
      </span>
      <button
        className="btn-cgc info-8ch form-4fj eff-rbw eff-1ot"
        onClick={triggerPopup}
      >
        Enquire Now
      </button>

      <PropertyPopup
        property={property}
        trigger={showPopup}
        title="Mail me pricing details"
      />
    </div>
  );
}
