"use client";

import React, { useState, useEffect } from "react";
import "./PropertyGallery.css";

export default function PropertyGallery({ property }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="section-2ot shadow-h9n p-4 md:p-6 lg:p-8 m-3 rounded-md">
      <span className="section-bz2" />
      <span className="text-2xl md:text-3xl lg:text-4xl font-bold block mb-6 text-black">
        Gallery
      </span>

      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-[#c9b06b]/20">
        <div className="relative w-full h-[300px] md:h-[400px]">
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

          {images.length > 1 && (
            <>
              {/* Navigation Arrows */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                <button
                  type="button"
                  className="z-10 p-2 rounded-full bg-[#c9b06b] hover:bg-[#b39a5a] text-white transition-all focus:outline-none"
                  onClick={prevSlide}
                >
                  <span className="text-xl md:text-2xl select-none">‹</span>
                </button>
                <button
                  type="button"
                  className="z-10 p-2 rounded-full bg-[#c9b06b] hover:bg-[#b39a5a] text-white transition-all focus:outline-none"
                  onClick={nextSlide}
                >
                  <span className="text-xl md:text-2xl select-none">›</span>
                </button>
              </div>

              {/* Dots Navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-[#c9b06b]"
                        : "bg-[#c9b06b]/50 hover:bg-[#c9b06b]/70"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
