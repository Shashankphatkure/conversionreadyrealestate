"use client";
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
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
import Localities from "@/components/localities";

export default function BuilderPage({ params }) {
  const [builder, setBuilder] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    async function fetchBuilderData() {
      try {
        // Fetch builder details with property count
        const { data: builderData, error: builderError } = await supabase
          .from("builders")
          .select(
            `
            *,
            properties:properties(count)
          `
          )
          .eq("id", params.id)
          .single();

        if (builderError) throw builderError;
        setBuilder(builderData);

        // Fetch properties using the builder foreign key
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
            overview,
            price_details,
            description,
            amenities,
            localities:locality (
              id,
              name,
              image
            )
          `
          )
          .eq("builder", params.id); // Using the builder foreign key

        if (propertiesError) throw propertiesError;
        setProperties(propertiesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBuilderData();
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
  if (!builder)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Builder not found
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderTop />
      <Header />
      <HeaderSearch />

      {/* Breadcrumb */}
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
                  <span className="text-sm text-red-500">{builder.name}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container px-4 md:px-8 lg:px-20">
        {/* Builder Profile Section */}
        <div className="my-8 md:my-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-transparent"></div>
              <div className="h-24 bg-gray-50"></div>
            </div>
            <div className=" md:p-10 lg:p-12">
              <div className="flex flex-col md:flex-row gap-10 -mt-24 relative">
                <div className="w-48 h-48 flex-shrink-0 mx-auto md:mx-0">
                  <img
                    src={builder.logo || "/default-builder-logo.png"}
                    alt={builder.name}
                    className="w-full h-full object-contain rounded-xl shadow-lg bg-white p-4 border-2 border-gray-50"
                  />
                </div>
                <div className="flex-1 space-y-6">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3 text-center md:text-left">
                      {builder.name}
                    </h1>
                    <div className="w-20 h-1 bg-red-500 mb-6 hidden md:block"></div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-center md:text-left text-lg">
                    {builder.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="my-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Projects by {builder.name}
            </h2>
            <div className="w-16 h-1 bg-red-500 mx-auto"></div>
          </div>
          {properties.length > 0 ? (
            <Properties
              properties={properties.map((property) => ({
                id: property.id,
                name: property.name,
                location: property.localities?.name || property.location,
                type: property.type,
                status: property.status,
                developer: builder.name,
                configurations: property.configurations,
                price:
                  property.price_details?.["Starting Price"] || property.price,
                image: property.image,
                link: `/property/${property.id}`,
                description: property.description,
                amenities: property.amenities,
                locality: {
                  id: property.localities?.id,
                  name: property.localities?.name,
                  image: property.localities?.image,
                },
              }))}
            />
          ) : (
            <div className="text-center text-gray-600">
              No properties available at the moment
            </div>
          )}
        </div>

        {/* Localities Section */}
        <div className="my-16">
          <h1 className="text-2xl md:text-3xl font-bold mt-20 mb-4 text-center px-4">
            Browse by Localities
          </h1>
          <div className="w-16 h-1 bg-red-500 mx-auto mb-4"></div>
          <div className="px-4 md:px-20">
            <Localities />
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-4">
          <ContactUs />
        </div>
      </div>

      <FooterTop />
      <FooterBottom />
    </div>
  );
}
