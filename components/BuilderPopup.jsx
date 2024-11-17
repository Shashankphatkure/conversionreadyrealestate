"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function BuilderPopup({ isOpen, setIsOpen }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const supabase = createClientComponentClient();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("leads").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.mobile,
          notes: formData.message,
          source: "popup_form",
          // Status will default to 'NEW' as per table definition
        },
      ]);

      if (error) throw error;

      // Clear form and close popup on success
      setFormData({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
      setIsOpen(false);

      // Optionally show success message
      alert("Thank you for your submission!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-4 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-xl max-w-3xl w-full relative overflow-hidden shadow-2xl animate-fadeIn max-h-[90vh] overflow-y-auto m-2 sm:m-0">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 z-10 bg-white/80 rounded-full p-1 hover:bg-white transition-all duration-300 shadow-md sm:right-4 sm:top-4"
          aria-label="Close popup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 hover:text-red-500 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left Section with Image - Hidden on mobile */}
          <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-blue-50 to-orange-50 p-3 sm:p-6 relative">
            <div className="absolute top-2 left-2 bg-orange-100 text-orange-600 px-3 py-0.5 rounded-full text-xs sm:text-sm font-medium sm:top-4 sm:left-4 sm:px-4 sm:py-1">
              Free Service
            </div>
            <Image
              src="/pickup.png"
              alt="Free Pickup Service"
              width={400}
              height={400}
              className="w-full h-auto object-contain mt-8 sm:mt-6 max-h-[200px] sm:max-h-none"
            />
            <div className="mt-6 space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Why Choose Us?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Free Pick-up & Drop Service
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Expert Consultation
                </li>
                <li className="flex items-center text-gray-600">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Best Deals Guaranteed
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section with Form - Full width on mobile */}
          <div className="w-full md:w-1/2 p-6 sm:p-6">
            <div className="text-center mb-2 sm:mb-4">
              <h2 className="text-md font-bold text-gray-800">
                Submit Your Requirement
              </h2>

              <p className="text-gray-600 text-sm">
                QUALITY SERVICE GUARANTEED
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-1 sm:space-y-2">
              <div className="space-y-0.5">
                <label className="text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div className="space-y-0.5">
                <label className="text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-1.5 sm:p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Mobile *
                </label>
                <div className="flex">
                  <select className="p-3 border border-gray-300 rounded-l-lg bg-gray-50 text-gray-600 focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                    <option>+91</option>
                  </select>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className="w-full p-1.5 sm:p-2.5 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows="3"
                  className="w-full p-1.5 sm:p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-300"
                  placeholder="Tell us about your requirement"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-2 sm:py-2.5 rounded-lg font-medium hover:bg-orange-600 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Submit Requirement
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
