"use client";

import "./PropertyAmenities.css";
import { useState, useEffect } from "react";

export default function PropertyAmenities({ property }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);
  const [slideWidth, setSlideWidth] = useState(532);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // mobile
        setItemsPerSlide(4);
        setSlideWidth(300);
      } else if (window.innerWidth < 1024) {
        // tablet
        setItemsPerSlide(3);
        setSlideWidth(400);
      } else {
        // desktop
        setItemsPerSlide(4);
        setSlideWidth(532);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Split amenities array into groups based on screen size
  const groupAmenities = (amenities) => {
    if (!amenities) return [];
    const groups = [];
    for (let i = 0; i < amenities.length; i += itemsPerSlide) {
      groups.push(amenities.slice(i, i + itemsPerSlide));
    }
    return groups;
  };

  const amenitiesList = groupAmenities(property.amenities);
  const maxSlides = Math.max(0, amenitiesList.length - 1);

  const carouselStyles = {
    transform: `translate3d(${currentSlide * -(slideWidth + 20)}px, 0px, 0px)`,
    transition: "all 0.5s ease",
    width: `${amenitiesList.length * (slideWidth + 20)}px`,
  };

  const itemStyles = {
    width: `${slideWidth}px`,
    marginRight: "20px",
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => Math.min(maxSlides, prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0 && currentSlide < maxSlides) {
      // Swiped left
      handleNextSlide();
    }

    if (distance < 0 && currentSlide > 0) {
      // Swiped right
      handlePrevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  if (!property.amenities || property.amenities.length === 0) {
    return null;
  }

  return (
    <section
      id="amenities"
      className="section-jhc shadow-7y3 p-4 md:p-6 lg:p-8 rounded-md m-3"
    >
      <span className="section-ihs" />
      <span className="hea-jgp text-x9d text-2xl md:text-3xl lg:text-4xl font-bold block mb-6">
        Amenities
      </span>

      <div className="carousel-container relative overflow-hidden">
        <div id="ami-lem" className="carousel-opg owl-is3 owl-mmz">
          <div
            className="tag-2wa"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="tag-hlx" style={carouselStyles}>
              {amenitiesList.map((group, groupIndex) => (
                <div key={groupIndex} className="item-vc5" style={itemStyles}>
                  <div className="item-6b9 space-y-3">
                    {group.map((amenity, index) => (
                      <div key={`${groupIndex}-${index}`}>
                        <p className="text-base md:text-lg border-b-2 border-dashed border-[#c9b06b] pb-2">
                          <span className="text-[#c9b06b] mr-2">✓</span>
                          {amenity}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
