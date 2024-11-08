"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./localities.css";
import { supabase } from "@/utils/supabase";
import { MapPinIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";

// Separate LocalityCard component with prop types
const LocalityCard = ({ locality }) => {
  if (!locality) return null;

  const { name, image, link, properties } = locality;

  return (
    <div className="item-cim">
      <div className="item-5t2">
        <div className="pro-oph">
          <a href={link}>
            <div className="pt-noq">
              {/* Add loading="lazy" for better performance */}
              <img
                src={image}
                alt={name}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder-image.jpg"; // Add a placeholder image
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
          </a>
        </div>
      </div>
    </div>
  );
};

const Localities = () => {
  const [localities, setLocalities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
      <div className="content-dq6">
        <div className="tab-1cs act-447">
          <div>
            <div className="row-qzg">
              <div className="carousel-evd owl-hfs owl-bdo owl-62r">
                <div className="localities-slider">
                  <Slider {...settings}>
                    {localities.map((locality) => (
                      <LocalityCard key={locality.id} locality={locality} />
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
