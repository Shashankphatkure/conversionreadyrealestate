"use client";
import ContactUs from "@/components/ContactUs";
import FooterBottom from "@/components/FooterBottom";
import FooterTop from "@/components/FooterTop";
import Header from "@/components/Header";
import HeaderSearch from "@/components/HeaderSearch";
import HeaderTop from "@/components/HeaderTop";
import Properties from "@/components/properties";
import {
  MapPinIcon,
  BuildingOfficeIcon,
  HomeIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import Slider from "react-slick";
import Builders from "@/components/builders";

// Add this new component for related localities
const RelatedLocalities = () => {
  const relatedLocalities = [
    {
      name: "Thane West",
      image:
        "https://newprojectsonline.com/assets/newprojectonline/thane-west.jpg",
      properties: 25,
      link: "/localitylistings/thane-west",
    },
    {
      name: "Ghodbunder Road",
      image:
        "https://newprojectsonline.com/assets/newprojectonline/ghodbunder-road.jpg",
      properties: 18,
      link: "/localitylistings/ghodbunder-road",
    },
    {
      name: "Kalyan",
      image: "https://newprojectsonline.com/assets/newprojectonline/kalyan.jpg",
      properties: 15,
      link: "/localitylistings/kalyan",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 md:px-20 py-12 bg-gray-50">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Explore Nearby Localities
      </h2>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>

      <div className="localities-slider">
        <Slider {...settings}>
          {relatedLocalities.map((locality, index) => (
            <div key={index} className="px-2">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <a href={locality.link} className="block relative">
                  <img
                    src={locality.image}
                    alt={locality.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold flex items-center gap-2">
                      <MapPinIcon className="h-5 w-5" />
                      {locality.name}
                    </h3>
                    <p className="text-white flex items-center gap-2 mt-1">
                      <BuildingOfficeIcon className="h-5 w-5" />
                      {locality.properties} Properties
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default function LocalityListings({ params }) {
  // Sample property data
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
      name: "Runwal My City",
      location: "Dombivli East",
      type: "Residential",
      status: "Ready to Move",
      developer: "Runwal Group",
      configurations: "1, 2 BHK",
      price: "45 Lac* Onwards",
      image:
        "https://newprojectsonline.com/assets/newprojectonline/runwal-my-city.jpg",
      link: "/project/runwal-my-city",
    },
    {
      name: "Godrej Ascend",
      location: "Kolshet Road, Thane",
      type: "Residential",
      status: "New Launch",
      developer: "Godrej Properties",
      configurations: "2, 3 BHK",
      price: "1.5 Cr* Onwards",
      image:
        "https://newprojectsonline.com/assets/newprojectonline/godrej-ascend.jpg",
      link: "/project/godrej-ascend",
    },
    {
      name: "Piramal Vaikunth",
      location: "Thane West",
      type: "Residential",
      status: "Ready to Move",
      developer: "Piramal Realty",
      configurations: "2, 3, 4 BHK",
      price: "1.8 Cr* Onwards",
      image:
        "https://newprojectsonline.com/assets/newprojectonline/piramal-vaikunth.jpg",
      link: "/project/piramal-vaikunth",
    },
  ];

  return (
    <div>
      <HeaderTop />
      <Header />
      <HeaderSearch />

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
                    href="/localities"
                    className="ml-1 text-sm text-gray-700 hover:text-red-500 md:ml-2"
                  >
                    Localities
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                  <span className="ml-1 text-sm text-red-500 md:ml-2">
                    {params?.locality || "Selected Locality"}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="px-4 md:px-20 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-center">
          Properties in {params?.locality || "Selected Locality"}
        </h1>
        <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>

        <div className="mb-12">
          <Properties properties={properties} />
        </div>
      </div>

      <RelatedLocalities />

      <div className="px-4 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Browse by Builders
        </h2>
        <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
        <Builders />
      </div>

      <div className="mt-4">
        <ContactUs />
      </div>

      <FooterTop />
      <FooterBottom />
    </div>
  );
}
