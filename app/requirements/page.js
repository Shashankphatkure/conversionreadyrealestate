"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import ContactUs from "@/components/ContactUs";
import FooterBottom from "@/components/FooterBottom";
import FooterTop from "@/components/FooterTop";
import Header from "@/components/Header";
import HeaderSearch from "@/components/HeaderSearch";
import HeaderTop from "@/components/HeaderTop";

export default function HomeContent() {
  const supabase = createClientComponentClient();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    property_type: "",
    transaction_type: "",
    budget_range: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const { data, error } = await supabase
        .from("leads")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            property_type: formData.property_type,
            transaction_type: formData.transaction_type,
            budget_range: formData.budget_range,
            notes: formData.notes,
            source: "website",
            status: "NEW",
          },
        ])
        .select();

      if (error) throw error;

      setSubmitMessage(
        "Thank you! Your requirement has been submitted successfully."
      );
      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        property_type: "",
        transaction_type: "",
        budget_range: "",
        notes: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <HeaderTop />
      <Header />
      <HeaderSearch />

      <div className="px-4 md:px-8 py-4 md:py-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg my-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
          Post Your Requirement
        </h2>
        {submitMessage && (
          <div
            className={`p-4 rounded-lg mb-4 text-center ${
              submitMessage.includes("error")
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {submitMessage}
          </div>
        )}
        <form className="max-w-3xl mx-auto mt-8" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="location"
                >
                  Preferred Location
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Property Details Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700 border-b pb-2">
              Property Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Property Type
                </label>
                <div className="flex gap-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="property_type"
                      value="residential"
                      className="form-radio h-4 w-4 text-orange-500"
                      checked={formData.property_type === "residential"}
                      onChange={handleRadioChange}
                    />
                    <span className="ml-2">Residential</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="property_type"
                      value="commercial"
                      className="form-radio h-4 w-4 text-orange-500"
                      checked={formData.property_type === "commercial"}
                      onChange={handleRadioChange}
                    />
                    <span className="ml-2">Commercial</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Transaction Type
                </label>
                <div className="flex gap-4 mt-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="transaction_type"
                      value="buy"
                      className="form-radio h-4 w-4 text-orange-500"
                      checked={formData.transaction_type === "buy"}
                      onChange={handleRadioChange}
                    />
                    <span className="ml-2">Buy</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="transaction_type"
                      value="sell"
                      className="form-radio h-4 w-4 text-orange-500"
                      checked={formData.transaction_type === "sell"}
                      onChange={handleRadioChange}
                    />
                    <span className="ml-2">Sell</span>
                  </label>
                </div>
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="budget_range"
                >
                  Budget/Expected Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="budget_range"
                  name="budget_range"
                  type="text"
                  placeholder="Enter amount in INR"
                  value={formData.budget_range}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="notes"
            >
              Additional Requirements
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              id="notes"
              name="notes"
              placeholder="Describe your specific requirements, preferences, or any other details..."
              value={formData.notes}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>

          <div className="mt-6 text-center">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 disabled:opacity-50"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Requirements"}
            </button>
          </div>
        </form>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-center px-4">
        Contact Us
      </h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <ContactUs />

      <FooterTop />
      <FooterBottom />
    </div>
  );
}
