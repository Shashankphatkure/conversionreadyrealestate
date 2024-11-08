"use client";
import ContactUs from "@/components/ContactUs";
import FooterBottom from "@/components/FooterBottom";
import FooterTop from "@/components/FooterTop";
import Header from "@/components/Header";
import HeaderSearch from "@/components/HeaderSearch";
import HeaderTop from "@/components/HeaderTop";
import Localities from "@/components/localities";
import Properties from "@/components/properties";
import Services from "@/components/services";
import Welcome from "@/components/Welcome";

export default function HomeContent({ properties }) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section - Full Width */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto">
          <HeaderTop />
          <Header />
          <HeaderSearch />
        </div>
      </div>

      {/* Main Content - Boxed */}
      <div className="max-w-7xl mx-auto bg-white shadow-lg">
        {/* Welcome Section */}
        <div className="p-4 md:p-8">
          <Welcome />
        </div>

        {/* Mumbai Projects Section */}
        <div className="p-4 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              New Launch Projects in Mumbai
            </h1>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <Properties properties={properties} />
        </div>

        {/* Thane Projects Section */}
        <div className="p-4 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              New Launch Projects in Thane
            </h1>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <Properties properties={properties} />
        </div>

        {/* Localities Section */}
        <div className="p-4 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Browse by Localities
            </h1>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <Localities />
        </div>

        {/* Services Section */}
        <Services />

        {/* Real Estate Property Section */}
        <section className="p-4 md:p-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                Real Estate Property With Us
              </h1>
              <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Comprehensive Property Solutions
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The property market of Mumbai & Navi Mumbai offers property
                  for sale in new residential projects in high-rise towers in
                  all budgets whether Pre-Launch Projects, under construction,
                  ready to move in (RTMI) or nearing possession.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Flats for sale in Mumbai, Pune, Thane, KDMC Area, and Navi
                  Mumbai are on offer and with us you can browse affordable
                  apartments/flats in new projects.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Premium Offerings & Amenities
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Get the best deals on residential projects in the real estate
                  market by top developers like Lodha Group, Godrej Properties
                  and others.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">
                    Car Parking
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">
                    Swimming Pool
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">
                    Play Area
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">
                    Near Schools
                  </span>
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm">
                    Near Hospitals
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div className="p-4 md:p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h1>
            <div className="w-16 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <ContactUs />
        </div>

        {/* Footer Stats */}
        <FooterTop />
      </div>

      {/* Footer - Full Width */}
      <FooterBottom />
    </div>
  );
}
