"use client";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
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
import Localities from "@/components/localities";

// RelatedLocalities component updated to use real data
const RelatedLocalities = ({ currentLocalityId }) => {
  const [localities, setLocalities] = useState([]);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchRelatedLocalities() {
      const { data } = await supabase
        .from("localities")
        .select(
          `
          *,
          properties:properties(count)
        `
        )
        .neq("id", currentLocalityId)
        .limit(5);

      if (data) {
        setLocalities(data);
      }
    }

    fetchRelatedLocalities();
  }, [currentLocalityId]);

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
      <h1 className="text-2xl md:text-3xl font-bold mt-20 mb-4 text-center px-4">
        Browse nearby localities
      </h1>
      <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
      <div className="px-4 md:px-20">
        <Localities />
      </div>
    </div>
  );
};

export default function LocalityListings({ params }) {
  const [locality, setLocality] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchLocalityData() {
      try {
        // Fetch locality details with count of properties
        const { data: localityData, error: localityError } = await supabase
          .from("localities")
          .select(
            `
            *,
            properties:properties(count)
          `
          )
          .eq("id", params.id)
          .single();

        if (localityError) throw localityError;
        setLocality(localityData);

        // Fetch properties with builder details using the new locality foreign key
        const { data: propertiesData, error: propertiesError } = await supabase
          .from("properties")
          .select(
            `
            id,
            name,
            location,
            type,
            status,
            configurations,
            price,
            image,
            price_details,
            overview,
            builders:builder (
              id,
              name,
              logo
            )
          `
          )
          .eq("locality", params.id);

        if (propertiesError) throw propertiesError;
        setProperties(propertiesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLocalityData();
  }, [params.id]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error: {error}
      </div>
    );
  if (!locality)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Locality not found
      </div>
    );

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
                    {locality.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="px-4 md:px-20 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mt-8 mb-4 text-center">
          Properties in {locality.name}
        </h1>
        <div className="w-16 h-1 bg-red-500 mx-auto mb-8"></div>

        <div className="mb-12">
          {properties.length > 0 ? (
            <Properties
              properties={properties.map((property) => ({
                name: property.name,
                location: property.location,
                type: property.type,
                status: property.status,
                developer: property.builders?.name || "Unknown Developer",
                configurations: property.configurations,
                price:
                  property.price_details?.["Starting Price"] || property.price,
                image: property.image,
                link: `/property/${property.id}`,
                builderLogo: property.builders?.logo, // Add builder logo if needed in your Properties component
              }))}
            />
          ) : (
            <div className="text-center text-gray-600 py-8">
              No properties available in this locality at the moment.
            </div>
          )}
        </div>
      </div>

      <RelatedLocalities currentLocalityId={params.id} />

      <div className="px-4 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Browse nearby builders
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
