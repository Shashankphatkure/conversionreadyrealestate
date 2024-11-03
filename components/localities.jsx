"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./localities.css";
import { supabase } from "@/utils/supabase";
import { MapPinIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";

const LocalityCard = ({ locality }) => (
  <div className="item-cim">
    <div className="item-5t2">
      <div className="pro-oph">
        <a href={locality.link}>
          <div className="pt-noq">
            <img src={locality.image} alt={locality.name} />
            <div className="pti-mk5">
              <h6>
                <MapPinIcon className="h-5 w-5 inline-block mr-1" />
                {locality.name}&nbsp;&nbsp;&nbsp;
                <BuildingOfficeIcon className="h-5 w-5 inline-block mr-1" />
                &nbsp;&nbsp;{locality.properties}&nbsp;Properties
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

export default function Localities() {
  const [localities, setLocalities] = useState([]);

  useEffect(() => {
    async function fetchLocalities() {
      const { data, error } = await supabase
        .from("localities")
        .select("*")
        .order("properties", { ascending: false });

      if (error) {
        console.error("Error fetching localities:", error);
      } else {
        setLocalities(data);
      }
    }

    fetchLocalities();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <div className="content-5j6" style={{ paddingTop: "0px" }}>
      <div className="content-dq6">
        <div className="tab-1cs act-447">
          <div>
            <div className="row-qzg">
              <div className="carousel-evd owl-hfs owl-bdo owl-62r">
                <div className="localities-slider">
                  <Slider {...settings}>
                    {localities.map((locality, index) => (
                      <LocalityCard
                        key={locality.id || index}
                        locality={locality}
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
}
