"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { supabase } from "@/utils/supabase";

const BuilderCard = ({ builder }) => {
  if (!builder) return null;

  const { name, logo, total_projects, website_url } = builder;

  return (
    <div className="item-cim">
      <div className="item-5t2">
        <div className="pro-oph">
          <a
            href={website_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-32 flex items-center justify-center mb-4">
                <img
                  src={logo || "/placeholder-builder-logo.jpg"}
                  alt={name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder-builder-logo.jpg";
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {name}
                </h3>
                <p className="text-gray-600 flex items-center justify-center gap-2">
                  <BuildingOfficeIcon className="h-5 w-5" />
                  {total_projects || 0} Projects
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const Builders = () => {
  const [builders, setBuilders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBuilders();
  }, []);

  const fetchBuilders = async () => {
    try {
      const { data, error } = await supabase
        .from("builders")
        .select("*")
        .order("name")
        .eq("featured", true); // Only fetch featured builders

      if (error) {
        throw error;
      }

      setBuilders(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching builders:", err);
      setError(err.message);
      setIsLoading(false);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        Error loading builders: {error}
      </div>
    );
  }

  if (!builders.length) {
    return (
      <div className="text-center text-gray-600 py-8">
        No featured builders available.
      </div>
    );
  }

  return (
    <div className="content-5j6" style={{ paddingTop: "0px" }}>
      <div className="content-dq6">
        <div className="tab-1cs act-447">
          <div>
            <div className="row-qzg">
              <div className="carousel-evd owl-hfs owl-bdo owl-62r">
                <div className="builders-slider">
                  <Slider {...settings}>
                    {builders.map((builder) => (
                      <BuilderCard key={builder.id} builder={builder} />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Builders;
