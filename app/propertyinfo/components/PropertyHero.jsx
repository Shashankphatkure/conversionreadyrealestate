"use client";

import { useState, useEffect } from "react";
import "./PropertyHero.css";
import PropertyModal from "./PropertyModal";

export default function PropertyHero({ property }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const exteriorImages = property?.gallery?.exterior || [];

  // Auto-slide functionality
  useEffect(() => {
    if (exteriorImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % exteriorImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [exteriorImages.length]);

  const handlePrevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? exteriorImages.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % exteriorImages.length);
  };

  return (
    <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        {exteriorImages.length > 0 ? (
          <div className="relative w-full h-full">
            {exteriorImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`${property.name} - View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

            {/* Property title overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 text-white">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                {property.name}
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                {property.location}
              </p>
            </div>

            {exteriorImages.length > 1 && (
              <>
                {/* Navigation arrows */}
                <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4">
                  <button
                    onClick={handlePrevSlide}
                    className="bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Previous slide"
                  >
                    <span className="text-2xl">‹</span>
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Next slide"
                  >
                    <span className="text-2xl">›</span>
                  </button>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="w-full h-full">
            <img
              src={property.image || "https://via.placeholder.com/1200x600"}
              alt={property.name}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
