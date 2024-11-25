"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./localities.css";
import { supabase } from "@/utils/supabase";
import {
  MapPinIcon,
  BuildingOfficeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import LocalityPopup from "./LocalityPopup";

// Separate LocalityCard component with prop types
const LocalityCard = ({ locality, setIsOpen, setSelectedLocality }) => {
  if (!locality) return null;

  const { id, name, image, properties } = locality;

  const handleClick = () => {
    setSelectedLocality(locality);
    setIsOpen(true);
  };

  return (
    <div className="item-cim">
      <div className="item-5t2">
        <div className="pro-oph">
          <div onClick={handleClick} className="cursor-pointer">
            <div className="pt-noq">
              <img
                src={image}
                alt={name}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder-image.jpg";
                }}
              />
              <div className="pti-mk5">
                <h6>
                  <MapPinIcon className="h-5 w-5 inline-block mr-1" />
                  {name}&nbsp;&nbsp;&nbsp;
                  <BuildingOfficeIcon className="h-5 w-5 inline-block mr-1" />
                  &nbsp;&nbsp;{properties}&nbsp;Properties
                </h6>
                <div className="sta-ldo">
                  <span>UNDER CONSTRUCTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Localities = () => {
  const [localities, setLocalities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocality, setSelectedLocality] = useState(null);

  useEffect(() => {
    const fetchLocalities = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from("localities")
          .select("*")
          .order("properties", { ascending: false });

        if (error) throw error;

        setLocalities(data || []);
      } catch (err) {
        console.error("Error fetching localities:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLocalities();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    prevArrow: (
      <button className="slick-prev absolute left-0 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>
    ),
    nextArrow: (
      <button className="slick-next absolute right-0 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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

  if (isLoading) {
    return (
      <div className="content-5j6 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="content-5j6 text-center text-red-500">
        Error loading localities: {error}
      </div>
    );
  }

  if (!localities.length) {
    return (
      <div className="content-5j6 text-center">
        No localities available at the moment.
      </div>
    );
  }

  return (
    <div className="content-5j6" style={{ paddingTop: "0px" }}>
      <LocalityPopup
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedLocality={selectedLocality}
      />
      <div className="content-dq6">
        <div className="tab-1cs act-447">
          <div>
            <div className="row-qzg">
              <div className="carousel-evd owl-hfs owl-bdo owl-62r">
                <div className="localities-slider">
                  <Slider {...settings}>
                    {localities.map((locality) => (
                      <LocalityCard
                        key={locality.id}
                        locality={locality}
                        setIsOpen={setIsOpen}
                        setSelectedLocality={setSelectedLocality}
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

export default Localities;
