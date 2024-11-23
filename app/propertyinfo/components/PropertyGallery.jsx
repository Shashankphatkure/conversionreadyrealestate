"use client";

import React, { useState, useEffect } from "react";

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
    <section className="bg-white rounded-lg shadow-md hover:shadow-lg m-3 p-4 md:p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-16 bg-transparent" />

      <span className="hea-6ig text-lxi pr-5 text-2xl md:text-3xl lg:text-4xl font-bold block mb-6">
        Gallery
      </span>

      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-[#c9b06b]/20">
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
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="z-10 p-2 rounded-full bg-[#c9b06b] hover:bg-[#b39a5a] text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c9b06b]/50"
                >
                  <span className="text-xl md:text-2xl select-none">‹</span>
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="z-10 p-2 rounded-full bg-[#c9b06b] hover:bg-[#b39a5a] text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c9b06b]/50"
                >
                  <span className="text-xl md:text-2xl select-none">›</span>
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors duration-300 
                      ${
                        index === currentIndex
                          ? "bg-[#c9b06b]"
                          : "bg-[#c9b06b]/50 hover:bg-[#c9b06b]/70"
                      }`}
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
