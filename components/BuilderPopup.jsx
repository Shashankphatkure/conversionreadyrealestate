"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function BuilderPopup({ isOpen, setIsOpen, selectedBuilder }) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    configuration: "",
    budget: "",
    location: "",
    remarks: "",
  });
  const [locations, setLocations] = useState([]);
  const [phoneError, setPhoneError] = useState("");
  const supabase = createClientComponentClient();

  // Fetch locations when builder changes
  useEffect(() => {
    const fetchLocations = async () => {
      if (selectedBuilder) {
        const { data, error } = await supabase
          .from("builders")
          .select("locations")
          .eq("id", selectedBuilder)
          .single();

        if (data && data.locations) {
          setLocations(data.locations);
        }
      }
    };

    fetchLocations();
  }, [selectedBuilder]);

  const validatePhone = (phone) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Indian phone number validation
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validatePhone(formData.contact)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      return;
    }

    try {
      const { error } = await supabase.from("leads").insert([
        {
          name: formData.name,
          phone: formData.contact,
          property_type: formData.configuration,
          budget_range: formData.budget,
          location: formData.location,
          notes: formData.remarks,
          source: "popup_form",
        },
      ]);

      if (error) throw error;

      setFormData({
        name: "",
        contact: "",
        configuration: "",
        budget: "",
        location: "",
        remarks: "",
      });
      setIsOpen(false);
      alert("Thank you for your submission!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your request. Please try again.");
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white rounded-xl max-w-3xl w-full relative overflow-hidden shadow-2xl">
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

        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Submit Your Requirement
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
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
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Contact *
              </label>
              <input
                type="tel"
                required
                value={formData.contact}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Only allow digits
                  setFormData({ ...formData, contact: value });
                  setPhoneError(
                    validatePhone(value)
                      ? ""
                      : "Please enter a valid 10-digit phone number"
                  );
                }}
                className={`w-full p-2 border ${
                  phoneError ? "border-red-500" : "border-gray-300"
                } rounded-lg`}
                maxLength="10"
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Configuration *
              </label>
              <select
                required
                value={formData.configuration}
                onChange={(e) =>
                  setFormData({ ...formData, configuration: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Configuration</option>
                <option value="1BHK">1 BHK</option>
                <option value="2BHK">2 BHK</option>
                <option value="3BHK">3 BHK</option>
                <option value="4BHK">4 BHK</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Budget Range *
              </label>
              <select
                required
                value={formData.budget}
                onChange={(e) =>
                  setFormData({ ...formData, budget: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Budget Range</option>
                <option value="20-30L">20-30 Lakhs</option>
                <option value="30-40L">30-40 Lakhs</option>
                <option value="40-50L">40-50 Lakhs</option>
                <option value="50-60L">50-60 Lakhs</option>
                <option value="60L+">Above 60 Lakhs</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Location *
              </label>
              <select
                required
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
              >
                <option value="">Select Location</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Remarks
              </label>
              <textarea
                value={formData.remarks}
                onChange={(e) =>
                  setFormData({ ...formData, remarks: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-lg"
                rows="3"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2.5 rounded-lg font-medium hover:bg-orange-600"
            >
              Submit Requirement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
