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
import Builders from "./builders";
import RequirementPopup from "@/components/RequirementPopup";

export default function HomeContent({ properties }) {
  return (
    <div>
      <RequirementPopup />
      <HeaderTop />
      <Header />
      <HeaderSearch />

      <div className="p-4 md:p-20">
        <Welcome />
      </div>

      <div className="px-4 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Browse by Builders
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
        <Builders />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-center px-4">
        New Launch Projects in Mumbai
      </h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="px-4 md:px-20">
        <Properties properties={properties} />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mt-20 mb-4 text-center px-4">
        Browse by Localities
      </h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="px-4 md:px-20">
        <Localities />
      </div>

      <Services />

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center px-4">
            Real Estate Property With Us
          </h1>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8 px-4 md:px-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Comprehensive Property Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The property market of Mumbai & Navi Mumbai offers property for
                sale in new residential projects in high-rise towers in all
                budgets whether Pre-Launch Projects, under construction, ready
                to move in (RTMI) or nearing possession. Whether it is for
                self-use or investment property requirements, we strive hard to
                provide the best offers on the best 1 BHK flats, 2 BHK flats, or
                3 BHK in Mumbai, Pune, Thane, KDMC Area, and Navi Mumbai.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Flats for sale in Mumbai, Pune, Thane, KDMC Area, and Navi
                Mumbai are on offer and with us you can browse affordable
                apartments/flats in new projects in Mumbai and other locations
                for sale in top upcoming projects in Mumbai and other nearby
                locations, along with current projects in Mumbai, Thane, and
                other nearby locations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Premium Offerings & Amenities
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Get the best deals on residential projects in the real estate
                market. Select offers and deals on new projects. Check out
                affordable housing flats of 1 bhk or luxurious 3 bhk flats by
                top developers like Lodha Group, Godrej Properties and other.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Find projects that include amenities like car parking, a
                children's play area, a swimming pool with a higher carpet area
                and are strategically located within close distance to top
                schools, malls, hospitals, and parks.
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
