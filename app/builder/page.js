"use client";
import Builders from "@/components/builders";
import ContactUs from "@/components/ContactUs";
import FooterBottom from "@/components/FooterBottom";
import FooterTop from "@/components/FooterTop";
import Header from "@/components/Header";
import HeaderSearch from "@/components/HeaderSearch";
import HeaderTop from "@/components/HeaderTop";
import Properties from "@/components/properties";
import {
  HomeIcon,
  ChevronRightIcon,
  BuildingOfficeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

export default function BuilderPage({ params }) {
  // Sample builder data - replace with actual data fetch
  const builderData = {
    name: "Lodha Group",
    logo: "https://newprojectsonline.com/assets/newprojectonline/lodha-logo.png",
    description:
      "Lodha Group is India's largest residential real estate developer by sales and construction area. The company has been involved in the real estate business since 1980 and is known for its innovative and high-quality projects.",
    established: "1980",
    totalProjects: "15",
    ongoingProjects: "8",
    completedProjects: "7",
  };

  // Sample properties data for this builder
  const properties = [
    {
      name: "Lodha Crown Thane",
      location: "Thane West",
      type: "Residential",
      status: "Under Construction",
      developer: "Lodha Group",
      configurations: "1, 2, 3 BHK",
      price: "1.25 Cr* Onwards",
      image:
        "https://newprojectsonline.com/assets/newprojectonline/lodha-crown-thane.jpg",
      link: "/project/lodha-crown-thane",
    },
    {
      name: "Lodha Sterling",
      location: "Thane",
      type: "Residential",
      status: "New Launch",
      developer: "Lodha Group",
      configurations: "2, 3 BHK",
      price: "1.5 Cr* Onwards",
      image:
        "https://newprojectsonline.com/assets/newprojectonline/lodha-sterling.jpg",
      link: "/project/lodha-sterling",
    },
    // Add more properties...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderTop />
      <Header />
      <HeaderSearch />

      {/* Breadcrumb - Made more compact */}
      <div className="bg-white py-2 border-b shadow-sm">
        <div className="container mx-auto px-4 md:px-8 lg:px-20">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="text-sm text-gray-700 hover:text-red-500 flex items-center"
                >
                  <HomeIcon className="w-4 h-4 mr-1" />
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="w-3 h-3 text-gray-400 mx-1" />
                  <a
                    href="/builders"
                    className="text-sm text-gray-700 hover:text-red-500"
                  >
                    Builders
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="w-3 h-3 text-gray-400 mx-1" />
                  <span className="text-sm text-red-500">
                    {builderData.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        {/* Builder Profile Section - Improved spacing and shadows */}
        <div className="my-8 md:my-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8 lg:p-10">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-48 h-48 mx-auto md:mx-0">
                  <img
                    src={builderData.logo}
                    alt={builderData.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="flex-grow">
                  <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    {builderData.name}
                  </h1>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {builderData.description}
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {[
                      { label: "Established", value: builderData.established },
                      {
                        label: "Total Projects",
                        value: builderData.totalProjects,
                      },
                      { label: "Ongoing", value: builderData.ongoingProjects },
                      {
                        label: "Completed",
                        value: builderData.completedProjects,
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
                      >
                        <p className="text-gray-600 text-sm mb-1">
                          {stat.label}
                        </p>
                        <p className="text-xl font-semibold text-gray-900">
                          {stat.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section - Added container styling */}
        <div className="my-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Projects by {builderData.name}
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto"></div>
          </div>
          <Properties properties={properties} />
        </div>

        {/* Locations Section - Improved card design */}
        <div className="my-16 bg-white rounded-xl shadow-md p-8 lg:p-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Locations
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {["Thane West", "Kalyan", "Dombivli"].map((location) => (
              <div
                key={location}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPinIcon className="h-6 w-6 text-red-500" />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {location}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {Math.floor(Math.random() * 5) + 1} Projects Available
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Builders Section */}
        <div className="my-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Other Popular Builders
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto"></div>
          </div>
          <Builders />
        </div>

        {/* Contact Section */}
        <div className="my-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto"></div>
          </div>
          <ContactUs />
        </div>
      </div>

      <FooterTop />
      <FooterBottom />
    </div>
  );
}
