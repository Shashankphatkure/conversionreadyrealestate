"use client";
import Link from "next/link";
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
import { PhoneIcon } from '@heroicons/react/24/solid'
import { EnvelopeIcon, ClipboardDocumentListIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/outline'

export default function HomeContent({ properties }) {
  return (
    <div className="min-h-screen relative pb-16 md:pb-0">
      <RequirementPopup />

      <div className="sticky top-0 left-0 right-0 z-[10]">
        <HeaderTop />
        <Header />
      </div>

      <div>
        <HeaderSearch />
      </div>

      <div>
        <div>
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
          Newly Launched Projects
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
                  The property market of Mumbai & Navi Mumbai offers property
                  for sale in new residential projects in high-rise towers in
                  all budgets whether Pre-Launch Projects, under construction,
                  ready to move in (RTMI) or nearing possession. Whether it is
                  for self-use or investment property requirements, we strive
                  hard to provide the best offers on the best 1 BHK flats, 2 BHK
                  flats, or 3 BHK in Mumbai, Pune, Thane, KDMC Area, and Navi
                  Mumbai.
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
                  children's play area, a swimming pool with a higher carpet
                  area and are strategically located within close distance to
                  top schools, malls, hospitals, and parks.
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
      </div>

      <FooterTop />
      <FooterBottom />
      
      {/* Enhanced Mobile Navigation Buttons */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-lg border border-gray-200">
          <div className="grid grid-cols-4 gap-2 p-4">
            {/* Call Button */}
            <a 
              href="tel:+919892666207" 
              className="flex flex-col items-center group transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-blue-100 group-hover:bg-blue-200 transition-all duration-300">
                <PhoneIcon className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-xs mt-1 font-medium text-gray-700">Call</span>
            </a>
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/919892666207"
              className="flex flex-col items-center group transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-green-100 group-hover:bg-green-200 transition-all duration-300">
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-green-600" />
              </div>
              <span className="text-xs mt-1 font-medium text-gray-700">WhatsApp</span>
            </a>
            
            {/* Post Requirement Button */}
            <Link 
              href="/requirements"
              className="flex flex-col items-center group transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-purple-100 group-hover:bg-purple-200 transition-all duration-300">
                <ClipboardDocumentListIcon className="h-6 w-6 text-purple-600" />
              </div>
              <span className="text-xs mt-1 font-medium text-gray-700">Post Require</span>
            </Link>
            
            {/* Enquire Button */}
            <a 
              href="mailto:shreeganeshrealty90@gmail.com" 
              className="flex flex-col items-center group transition-all duration-300"
            >
              <div className="p-2 rounded-xl bg-red-100 group-hover:bg-red-200 transition-all duration-300">
                <EnvelopeIcon className="h-6 w-6 text-red-600" />
              </div>
              <span className="text-xs mt-1 font-medium text-gray-700">Enquire</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
