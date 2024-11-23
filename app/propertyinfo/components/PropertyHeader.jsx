"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDollarSign,
  faBuilding,
  faSwimmingPool,
  faImages,
  faMapMarkerAlt,
  faVideo,
  faFileDownload,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyHeader({ property }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-4 py-3 bg-white shadow-md font-roboto">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <a href="#home" className="block lg:p-1">
          <img
            src={
              property.logo ||
              "https://newprojectsonline.com/assets/uploads/logos/1719552634-logo1.png"
            }
            className="h-10 w-auto sm:h-12 lg:max-w-[18vw] lg:h-[3.9vw]"
            alt={`${property.name} Logo`}
          />
        </a>

        <button
          className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
            <span className="block w-6 h-0.5 bg-gray-600"></span>
          </div>
        </button>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } w-full lg:flex lg:w-auto lg:flex-grow mt-2 lg:mt-0`}
      >
        <ul className="flex flex-col w-full lg:flex-row lg:justify-center -mx-2 lg:mx-0">
          {[
            { icon: faHome, text: "Home", href: "#home", active: true },
            { icon: faDollarSign, text: "Price", href: "#pricing" },
            {
              icon: faBuilding,
              text: "Site & Floor Plan",
              href: "#sitefloorplan",
            },
            { icon: faSwimmingPool, text: "Amenities", href: "#amenities" },
            { icon: faImages, text: "Gallery", href: "#gallery" },
            { icon: faMapMarkerAlt, text: "Location", href: "#location" },
            { icon: faVideo, text: "Virtual Site Tour", href: "#sitevisit" },
            {
              icon: faFileDownload,
              text: "Brochure",
              href: "#",
              animate: true,
            },
          ].map((item, index) => (
            <li
              key={index}
              className="flex-1 text-center border-b lg:border-b-0 lg:border-r lg:first:border-l border-[#dbe4e9] last:border-b-0"
            >
              <a
                href={item.href}
                className={`flex items-center justify-center px-4 py-3 lg:py-[1.1vw] lg:px-[0.3vw] hover:bg-gray-100 transition-colors duration-200
                  ${
                    item.active
                      ? "bg-[#ba8d4a] text-white hover:bg-[#a17b3d]"
                      : "text-gray-800"
                  }
                `}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className={`text-base w-4 h-4 sm:text-lg sm:w-5 sm:h-5 mr-3 lg:mr-2 
                    ${item.animate ? "animate-bounce" : ""}
                  `}
                />
                <span className="text-sm sm:text-base font-medium whitespace-nowrap">
                  {item.text}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
