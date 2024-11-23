"use client";

import "./PropertyOverview.css";
import { useState } from "react";
import { DocumentIcon } from "@heroicons/react/24/outline";
import PropertyPopup from "./PropertyPopup";

export default function PropertyOverview({ property }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      id="home"
      className="section-nkt shadow-c1i p-4 md:p-6 lg:p-8 rounded-md m-3"
    >
      <span className="hea-njg text-56r d-8lo block-kvs pr-5 text-2xl md:text-3xl lg:text-4xl font-bold">
        Overview
      </span>
      <h1 className="block-qo4 section-fnm col-qgi text-xl md:text-2xl lg:text-3xl mb-2">
        {property.name}
      </h1>
      <h2 className="block-qo4 section-29f col-qgi text-lg md:text-xl lg:text-2xl mb-4">
        At {property.location}
      </h2>
      <div className="space-y-4 text-base md:text-lg">
        <p>{property.description}</p>
        <p className="text-justify">Wagle Estate is in a good position...</p>
      </div>

      <button
        className="btn-zi3 info-jp8 form-z8s eff-byd eff-onq"
        onClick={() => {
          setShowPopup(false);
          setTimeout(() => setShowPopup(true), 0);
        }}
      >
        Read More
      </button>

      <center>
        <button
          className="btn-zi3 btn-foh info-aro btn-xr8 overflow-a2r"
          onClick={() => {
            setShowPopup(false);
            setTimeout(() => setShowPopup(true), 0);
          }}
        >
          <DocumentIcon className="h-5 w-5 inline-block" /> Download Brochure
        </button>
      </center>

      <PropertyPopup
        property={property}
        trigger={showPopup}
        title="Download Brochure"
      />

      <span className="block-qo4 section-29f text-xl md:text-2xl lg:text-3xl mt-8 mb-4 block">
        About {property.builder?.name}
      </span>

      {property.builder?.logo && (
        <img
          height={200}
          width={200}
          src={property.builder.logo}
          alt={`${property.builder.name} logo`}
          className="pb-3 max-w-[150px] md:max-w-[200px] h-auto"
        />
      )}

      <p className="text-base md:text-lg text-justify mb-6">
        {property.builder?.description}
        {property.builder?.established_year && (
          <span>
            {" "}
            Established in {property.builder.established_year},{" "}
            {property.builder.name} has grown to become one of the most trusted
            names in real estate development.
          </span>
        )}
      </p>

      <hr className="my-6" />

      <span className="at-property-bge eff-byd text-xl md:text-2xl lg:text-3xl block mb-4">
        Project Highlights
      </span>

      <div className="w-full">
        <div className="max-w-2xl">
          <ul className="list-group-tzc border-2 text-base md:text-lg list-none p-0">
            {property.highlights &&
              property.highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="list-group-item-low border-b-2 border-dashed p-3"
                >
                  ✓ {highlight}
                </li>
              ))}
          </ul>
        </div>
      </div>
      <br />
    </section>
  );
}
