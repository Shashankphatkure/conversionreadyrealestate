"use client";
import ContactUs from "@/components/ContactUs";
import FooterBottom from "@/components/FooterBottom";
import FooterTop from "@/components/FooterTop";
import Header from "@/components/Header";
import HeaderSearch from "@/components/HeaderSearch";
import HeaderTop from "@/components/HeaderTop";

export default function HomeContent() {
  return (
    <div>
      <HeaderTop />
      <Header />
      <HeaderSearch />

      <div className="px-4 md:px-8 py-4 md:py-8 max-w-6xl mx-auto bg-white shadow-lg rounded-lg my-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
          Post Your Requirement
        </h2>
        <form className="max-w-3xl mx-auto mt-8">
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
                  type="text"
                  placeholder="Your Name"
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
                  type="email"
                  placeholder="Your Email"
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
                  type="tel"
                  placeholder="Your Phone Number"
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
                  type="text"
                  placeholder="Location"
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
                      name="propertyType"
                      value="residential"
                      className="form-radio h-4 w-4 text-orange-500"
                    />
                    <span className="ml-2">Residential</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="propertyType"
                      value="commercial"
                      className="form-radio h-4 w-4 text-orange-500"
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
                      name="transactionType"
                      value="buy"
                      className="form-radio h-4 w-4 text-orange-500"
                    />
                    <span className="ml-2">Buy</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="transactionType"
                      value="sell"
                      className="form-radio h-4 w-4 text-orange-500"
                    />
                    <span className="ml-2">Sell</span>
                  </label>
                </div>
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Budget/Expected Price
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="price"
                  type="text"
                  placeholder="Enter amount in INR"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="requirements"
            >
              Additional Requirements
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              id="requirements"
              placeholder="Describe your specific requirements, preferences, or any other details..."
            ></textarea>
          </div>

          <div className="mt-6 text-center">
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
              type="submit"
            >
              Submit Requirements
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
