"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { supabase } from "@/utils/supabase";

const BuilderCard = ({ builder }) => {
  if (!builder) return null;

  const { name, logo, link, projects } = builder;

  return (
    <div className="item-cim">
      <div className="item-5t2">
        <div className="pro-oph">
          <a href={link} className="block">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="relative h-32 flex items-center justify-center mb-4">
                <img
                  src={logo}
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
                  {projects} Projects
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
  const [builders, setBuilders] = useState([
    {
      id: 1,
      name: "Lodha Group",
      logo: "https://newprojectsonline.com/assets/newprojectonline/lodha-logo.png",
      projects: 15,
      link: "/builder/lodha-group",
    },
    {
      id: 2,
      name: "Godrej Properties",
      logo: "https://newprojectsonline.com/assets/newprojectonline/godrej-logo.png",
      projects: 12,
      link: "/builder/godrej-properties",
    },
    {
      id: 3,
      name: "Runwal Group",
      logo: "https://newprojectsonline.com/assets/newprojectonline/runwal-logo.png",
      projects: 8,
      link: "/builder/runwal-group",
    },
    {
      id: 4,
      name: "Piramal Realty",
      logo: "https://newprojectsonline.com/assets/newprojectonline/piramal-logo.png",
      projects: 6,
      link: "/builder/piramal-realty",
    },
  ]);

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
