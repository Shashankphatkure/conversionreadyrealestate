import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { HomeIcon, CurrencyRupeeIcon } from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./properties.css";

const PropertyCard = ({ property }) => (
  <div className="item-4f1">
    <div className="item-bgo">
      <div className="pro-85g">
        <Link href={`/property/${property.id}`}>
          <div className="pt-i6m">
            <img src={property.image} alt={property.name} />
            <div className="pti-tly">
              <h6>
                <HomeIcon className="h-5 w-5 inline-block mr-1" />
                {property.location}
              </h6>
              <div className="sta-6qv">
                <span className="hdwah">
                  <HomeIcon className="h-5 w-5 inline-block mr-1" />{" "}
                  {property.type}
                </span>
                <span>{property.status}</span>
              </div>
            </div>
          </div>
          <div className="pt-h3v">
            <h3>{property.name}</h3>
            <div className="bui-wnd">
              <span>
                <strong>By: {property.developer}</strong>
              </span>
              <div className="con-qk6">
                <HomeIcon className="h-5 w-5 inline-block mr-1" />{" "}
                {property.configurations}
              </div>
            </div>
            <h4>
              <CurrencyRupeeIcon className="h-5 w-5 inline-block mr-1" />{" "}
              {property.price}
            </h4>
          </div>
        </Link>
        <a
          href={`https://api.whatsapp.com/send?phone=919892666207&text=Hi!%20I%20am%20interested%20in ${encodeURIComponent(
            property.name
          )}`}
          className="p-w95"
        >
          <img
            src="https://newprojectsonline.com/assets/newprojectonline/wa.svg"
            alt="WhatsApp"
          />
        </a>
      </div>
    </div>
  </div>
);

export default function Properties({ properties }) {
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
    <div className="properties-slider">
      <Slider {...settings}>
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </Slider>
    </div>
  );
}
