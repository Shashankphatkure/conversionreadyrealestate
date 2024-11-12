"use client";

import "./PropertyAmenities.css";
import { useState } from "react";

export default function PropertyAmenities({ property }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Split amenities array into groups of 4
  const groupAmenities = (amenities) => {
    if (!amenities) return [];
    const groups = [];
    for (let i = 0; i < amenities.length; i += 4) {
      groups.push(amenities.slice(i, i + 4));
    }
    return groups;
  };

  const amenitiesList = groupAmenities(property.amenities);
  const maxSlides = Math.max(0, amenitiesList.length - 1);

  const carouselStyles = {
    transform: `translate3d(${currentSlide * -532.245}px, 0px, 0px)`,
    transition: "all 0.5s ease",
    width: `${amenitiesList.length * 532.245}px`,
  };

  const itemStyles = {
    width: "512.245px",
    marginRight: "20px",
  };

  const amenityStyle = {
    borderBottom: "2px dashed #c9b06b",
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(maxSlides, prev + 1));
  };

  if (!property.amenities || property.amenities.length === 0) {
    return null;
  }

  return (
    <section className="section-jhc shadow-7y3">
      <span className="section-ihs" />
      <span className="hea-jgp text-x9d pr-5">Amenities</span>
      <div id="ami-lem" className="carousel-opg owl-is3 owl-mmz">
        <div className="tag-2wa">
          <div className="tag-hlx" style={carouselStyles}>
            {amenitiesList.map((group, groupIndex) => (
              <div key={groupIndex} className="item-vc5" style={itemStyles}>
                <div className="item-6b9">
                  {group.map((amenity, index) => (
                    <div key={`${groupIndex}-${index}`}>
                      <p style={amenityStyle}>✓ {amenity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {amenitiesList.length > 1 && (
          <div className="nav-yme">
            <button
              type="button"
              className="owl-k2r"
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
            >
              <span>‹</span>
            </button>
            <button
              type="button"
              className="owl-cpr"
              onClick={handleNextSlide}
              disabled={currentSlide === maxSlides}
            >
              <span>›</span>
            </button>
          </div>
        )}
        <div className="owl-woi dis-eor" />
      </div>
    </section>
  );
}
