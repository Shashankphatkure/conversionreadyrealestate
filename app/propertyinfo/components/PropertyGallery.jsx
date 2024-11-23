"use client";

import React, { useState, useEffect } from "react";
import "./PropertyGallery.css";

export default function PropertyGallery({ property }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get all images from the gallery object
  const getAllImages = () => {
    if (!property.gallery) return [];

    const images = [];
    if (property.gallery.exterior) {
      images.push(...property.gallery.exterior);
    }
    if (property.gallery.interior) {
      images.push(...property.gallery.interior);
    }
    if (property.gallery.amenities) {
      images.push(...property.gallery.amenities);
    }
    if (property.gallery.construction) {
      images.push(...property.gallery.construction);
    }
    return images;
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
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section
      id="gallery"
      className="block-cfk section-n2n shadow-8ea p-4 md:p-6 lg:p-8"
    >
      <span className="section-kjw" />
      <span className="hea-zos text-d42 pr-5 text-2xl md:text-3xl lg:text-4xl font-bold block mb-6">
        Gallery
      </span>
      <div className="carousel-6g1 owl-3mp owl-1nm owl-n2n relative">
        <div className="tag-zpy overflow-hidden">
          <div
            className="tag-fio flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${images.length * 100}%`,
            }}
          >
            {images.map((src, index) => (
              <div key={index} className="item-o6j w-full flex-shrink-0">
                <div className="aspect-video w-full h-full overflow-hidden">
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="gallery-icp w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {images.length > 1 && (
          <>
            <div className="nav-dj9 absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4">
              <button
                type="button"
                className="owl-dbk bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                onClick={prevSlide}
              >
                <span className="text-2xl">‹</span>
              </button>
              <button
                type="button"
                className="owl-r4s bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                onClick={nextSlide}
              >
                <span className="text-2xl">›</span>
              </button>
            </div>
            <div className="owl-yf4 dis-hwt absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex
                      ? "bg-white"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
