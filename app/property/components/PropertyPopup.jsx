"use client";
import { useState, useEffect } from "react";
import { PhoneIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function PropertyPopup({ property }) {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100000);

    if (isVisible) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "unset";
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsVisible(false);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50  animate-fadeIn"
      onClick={handleOverlayClick}
    >
      <div className="w-[90%] max-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden animate-scaleIn">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-white p-4 text-center">
          <button
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            onClick={handleClose}
          >
            <XMarkIcon className="h-3 w-3" />
          </button>
          <h3 className="text-lg font-semibold mb-1">Exclusive Offer!</h3>
          <p className="text-sm opacity-90">
            Get Best Deals for {property?.name}
          </p>
        </div>

        {/* Promise List */}
        <div className="flex justify-around p-3 bg-gray-50 border-b">
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <CheckCircleIcon className="h-4 w-4 text-amber-600" />
            <span>Instant Call Back</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <CheckCircleIcon className="h-4 w-4 text-amber-600" />
            <span>Free Site Visit</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-600">
            <CheckCircleIcon className="h-4 w-4 text-amber-600" />
            <span>Best Price</span>
          </div>
        </div>

        {/* Form Container */}
        <div className="p-4">
          {property?.builder?.logo && (
            <img
              src={property.builder.logo}
              className="h-10 mx-auto mb-4"
              alt={property.builder.name}
            />
          )}

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/10"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              type="tel"
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/10"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
              required
            />
            <input
              type="email"
              className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/10"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <button
              type="submit"
              className="w-full py-2 text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 rounded-md transition-colors disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Get Instant Call Back"}
            </button>
          </form>
        </div>

        {/* Contact Bar */}
        <div className="p-3 bg-gray-50 border-t flex justify-center items-center">
          <a
            href="tel:+919892666207"
            className="flex items-center gap-1 text-sm font-semibold text-amber-500 hover:text-amber-600 transition-colors"
          >
            <PhoneIcon className="h-4 w-4" />
            +91 9892666207
          </a>
        </div>
      </div>
    </div>
  );
}
