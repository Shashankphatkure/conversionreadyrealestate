"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  BuildingOfficeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { supabase } from "@/utils/supabase";
import BuilderPopup from "@/components/BuilderPopup";

const BuilderCard = ({ builder, onBuilderClick }) => {
  if (!builder) return null;

  const { id, name, logo, total_projects } = builder;

  return (
    <div className="item-cim px-2 sm:px-4">
      <div className="item-5t2">
        <div className="pro-oph">
          <div
            onClick={() => onBuilderClick(id)}
            className="block cursor-pointer"
          >
            <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-24 sm:h-32 flex items-center justify-center mb-4">
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
                <p className="font-semibold text-base sm:text-lg text-gray-800 mb-2">
                  {name}
                </p>
                <p className="text-sm sm:text-base text-gray-600 flex items-center justify-center gap-2">
                  <BuildingOfficeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  {total_projects || 0} Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Builders = () => {
  const [builders, setBuilders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBuilder, setSelectedBuilder] = useState(null);
  const sliderRef = React.useRef(null);

  useEffect(() => {
    fetchBuilders();
  }, []);

  const fetchBuilders = async () => {
    try {
      const { data, error } = await supabase
        .from("builders")
        .select("*")
        .order("name")
        .eq("featured", true);
      // Only fetch featured builders

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          centerMode: true,
          centerPadding: "40px",
        },
      },
    ],
  };

  const handleBuilderClick = (builderId) => {
    setSelectedBuilder(builderId);
    setIsOpen(true);
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
    <div
      className="content-5j6"
      style={{ paddingTop: "0px", paddingBottom: "0px" }}
    >
      <BuilderPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedBuilder={selectedBuilder}
      />
      <div className="content-dq6">
        <div className="tab-1cs act-447">
          <div>
            <div className="row-qzg">
              <div className="carousel-evd owl-hfs owl-bdo owl-62r">
                <div className="builders-slider mb-0">
                  <Slider {...settings} ref={sliderRef}>
                    {builders.map((builder) => (
                      <BuilderCard
                        key={builder.id}
                        builder={builder}
                        onBuilderClick={handleBuilderClick}
                      />
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
