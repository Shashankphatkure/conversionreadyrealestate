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
    <div>
      <HeaderTop />
      <Header />
      <HeaderSearch />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b">
        <div className="px-4 md:px-20">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a
                  href="/"
                  className="inline-flex items-center text-sm text-gray-700 hover:text-red-500"
                >
                  <HomeIcon className="w-4 h-4 mr-2" />
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                  <a
                    href="/builders"
                    className="ml-1 text-sm text-gray-700 hover:text-red-500 md:ml-2"
                  >
                    Builders
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                  <span className="ml-1 text-sm text-red-500 md:ml-2">
                    {builderData.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Builder Profile Section */}
      <div className="px-4 md:px-20 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-48 h-48 flex-shrink-0">
              <img
                src={builderData.logo}
                alt={builderData.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex-grow">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {builderData.name}
              </h1>
              <p className="text-gray-600 mb-6">{builderData.description}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Established</p>
                  <p className="text-lg font-semibold">
                    {builderData.established}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Total Projects</p>
                  <p className="text-lg font-semibold">
                    {builderData.totalProjects}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Ongoing</p>
                  <p className="text-lg font-semibold">
                    {builderData.ongoingProjects}
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-600">Completed</p>
                  <p className="text-lg font-semibold">
                    {builderData.completedProjects}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="px-4 md:px-20 py-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Projects by {builderData.name}
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
        <div className="mb-12">
          <Properties properties={properties} />
        </div>
      </div>

      {/* Locations Section */}
      <div className="px-4 md:px-20 py-12 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Popular Locations
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["Thane West", "Kalyan", "Dombivli"].map((location) => (
            <div key={location} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-3">
                <MapPinIcon className="h-6 w-6 text-red-500" />
                <h3 className="text-lg font-semibold">{location}</h3>
              </div>
              <p className="mt-2 text-gray-600">
                {Math.floor(Math.random() * 5) + 1} Projects Available
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Browse by Builders
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
        <Builders />
      </div>

      {/* Contact Section */}
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Contact Us
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
        <ContactUs />
      </div>

      <FooterTop />
      <FooterBottom />
    </div>
  );
}
