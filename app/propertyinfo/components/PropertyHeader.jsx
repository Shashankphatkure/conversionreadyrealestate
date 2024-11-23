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
import "./PropertyHeader.css";

export default function PropertyHeader({ property }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar-t4w navbar-kqe navbar-ele bg-7pn navbar-5sv">
      <a className="navbar-brand-hol" href="#home">
        <img
          src={
            property.logo ||
            "https://newprojectsonline.com/assets/uploads/logos/1719552634-logo1.png"
          }
          className="h-12 w-auto"
          alt={`${property.name} Logo`}
        />
      </a>
      <button
        className="navbar-nzs"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="navbar-os1" />
      </button>
      <div
        className={`col-or6 navbar-collapse-8nw ${isMenuOpen ? "show" : ""}`}
      >
        <ul className="navbar-nav-vlg nav-vwb">
          <li className="nav-item-3s3">
            <a className="nav-link-xai act-aef" href="#home">
              <FontAwesomeIcon
                icon={faHome}
                className="icon-jen fa-xs custom-icon"
              />
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item-3s3">
            <a className="nav-link-xai" href="#pricing">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="icon-jen fa-xs custom-icon"
              />
              <span>Price</span>
            </a>
          </li>
          <li className="nav-item-3s3">
            <a className="nav-link-xai" href="#sitefloorplan">
              <FontAwesomeIcon
                icon={faBuilding}
                className="icon-jen fa-xs custom-icon"
              />
              <span>Site &amp; Floor Plan</span>
            </a>
          </li>
          <li className="nav-item-3s3">
            <a className="nav-link-xai" href="#amenities">
              <FontAwesomeIcon
                icon={faSwimmingPool}
                className="icon-jen fa-xs custom-icon"
              />
              <span>Amenities</span>
            </a>
          </li>
          <li className="nav-item-3s3">
            <a className="nav-link-xai" href="#gallery">
              <FontAwesomeIcon
                icon={faImages}
                className="icon-jen fa-xs custom-icon"
              />
              <span>Gallery</span>
            </a>
          </li>
          <li className="nav-item-3s3">
            <a className="nav-link-xai" href="#location">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="icon-jen fa-xs custom-icon"
              />
              <span>Location</span>
            </a>
          </li>
          <li className="nav-item-3s3">
            <a className="nav-link-xai" href="#sitevisit">
              <FontAwesomeIcon
                icon={faVideo}
                className="icon-jen fa-xs custom-icon"
              />
              <span>Virtual Site Tour</span>
            </a>
          </li>
          <li className="nav-item-3s3 overflow-bdf">
            <a className="nav-link-xai" href="#">
              <FontAwesomeIcon
                icon={faFileDownload}
                className="icon-jen fa-xs custom-icon block-gvw ani-5fc slide-obl inf-q4g"
              />
              <span>Brochure</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
