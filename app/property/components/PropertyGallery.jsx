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
    <section className="block-cfk section-n2n shadow-8ea">
      <span className="section-kjw" />
      <span className="hea-zos text-d42 pr-5">Gallery</span>
      <div className="carousel-6g1 owl-3mp owl-1nm owl-n2n">
        <div className="tag-zpy">
          <div
            className="tag-fio"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
              width: `${images.length * 100}%`,
              display: "flex",
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="item-o6j"
                style={{ width: "100%", flex: "0 0 100%" }}
              >
                <div
                  style={{ width: "100%", height: "100%", overflow: "hidden" }}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="gallery-icp"
                    style={{
                      width: "auto",
                      height: "650px",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        {images.length > 1 && (
          <>
            <div className="nav-dj9">
              <button type="button" className="owl-dbk" onClick={prevSlide}>
                <span>‹</span>
              </button>
              <button type="button" className="owl-r4s" onClick={nextSlide}>
                <span>›</span>
              </button>
            </div>
            <div className="owl-yf4 dis-hwt">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`owl-dot ${
                    index === currentIndex ? "active" : ""
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
