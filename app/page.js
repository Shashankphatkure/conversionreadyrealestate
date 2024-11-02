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
import { supabase } from "@/utils/supabase";

export default async function HomePage() {
  // Fetch properties from Supabase
  const { data: propertiesData } = await supabase
    .from("properties")
    .select("*");

  return (
    <div>
      <HeaderTop />
      <Header />
      <HeaderSearch />

      <h1 className="text-3xl font-bold mt-8 mb-4 text-center">
        Flats for Sale in Mumbai in New Projects
      </h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="p-20">
        <Welcome />
      </div>

      <h1 className="text-3xl font-bold mt-8 mb-4 text-center">
        New Launch Projects in Mumbai
      </h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="px-20">
        <Properties properties={propertiesData} />
      </div>

      <h1 className="text-3xl font-bold mt-20 mb-4 text-center">
        New Launch Projects in Thane
      </h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="px-20">
        <Properties properties={propertiesData} />
      </div>

      <h1 className="text-3xl font-bold mt-20 mb-4 text-center">
        Browse by Localities
      </h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="px-20">
        <Localities />
      </div>

      <h1 className="text-3xl font-bold mt-4 mb-4 text-center">Our Services</h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <Services />

      <h1 className="text-3xl font-bold mb-4 text-center">
        Real Estate Property With Us
      </h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="text-center px-4 py-8 max-w-4xl mx-auto">
        <p className="mb-4">
          The property market of Mumbai & Navi Mumbai offers property for sale
          in new residential projects in high-rise towers in all budgets whether
          Pre-Launch Projects, under construction, ready to move in (RTMI) or
          nearing possession. Whether it is for self-use or investment property
          requirements, we strive hard to provide the best offers on the best 1
          BHK flats, 2 BHK flats, or 3 BHK in Mumbai, Pune, Thane, KDMC Area,
          and Navi Mumbai.
        </p>
        <p className="mb-4">
          Flats for sale in Mumbai, Pune, Thane, KDMC Area, and Navi Mumbai are
          on offer and with us you can browse affordable apartments/flats in new
          projects in Mumbai and other locations for sale in top upcoming
          projects in Mumbai and other nearby locations, along with current
          projects in Mumbai, Thane, and other nearby locations.
        </p>
        <p className="mb-4">
          Get the best deals on residential projects in the real estate market.
          Select offers and deals on new projects. Check out affordable housing
          flats of 1 bhk or luxurious 3 bhk flats by top developers like Lodha
          Group, Godrej Properties and other.
        </p>
        <p className="mb-4">
          Find projects that include amenities like car parking, a children's
          play area, a swimming pool with a higher carpet area and are
          strategically located within close distance to top schools, malls,
          hospitals, and parks.
        </p>
      </div>

      <h1 className="text-3xl font-bold mt-8 mb-4 text-center">Contact Us</h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <ContactUs />

      <FooterTop />

      <FooterBottom />
    </div>
  );
}
