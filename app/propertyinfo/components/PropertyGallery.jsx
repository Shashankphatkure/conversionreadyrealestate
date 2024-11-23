"use client";

import React, { useState, useEffect } from "react";

export default function PropertyGallery({ property }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const getAllImages = () => {
    if (!property.gallery) return [];
    return [
      ...(property.gallery.exterior || []),
      ...(property.gallery.interior || []),
      ...(property.gallery.amenities || []),
      ...(property.gallery.construction || []),
    ];
  };

  const images = getAllImages();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="bg-white rounded-lg shadow-md hover:shadow-lg m-3 p-4 md:p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-16 bg-transparent" />

      <span className="hea-6ig text-lxi pr-5 text-2xl md:text-3xl lg:text-4xl font-bold block mb-6">
        Gallery
      </span>

      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-[#c9b06b]/20">
        <div
          className="relative w-full h-[300px] md:h-[400px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-contain bg-gray-100"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
