import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import {
  HomeIcon,
  CurrencyRupeeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./properties.css";

const PropertyCard = ({ property }) => (
  <div className="item-4f1">
    <div className="item-bgo">
      <div className="pro-85g">
        <Link
          href={`/property/${property.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="pt-i6m">
            <img src={property.image} alt={property.name} />
            <div className="pti-tly">
              <h6 className="text-sm">
                <HomeIcon className="h-4 w-4 inline-block mr-1" />
                {property.location}
              </h6>
              <div className="sta-6qv">
                <span className="hdwah text-sm">
                  <HomeIcon className="h-4 w-4 inline-block mr-1" />
                  {property.type}
                </span>
                <span className="text-sm">
                  {property.status.split('_').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  ).join(' ')}
                </span>
              </div>
            </div>
          </div>
          <div className="pt-h3v">
            <h3 className="text-base font-semibold">{property.name}</h3>
            <div className="bui-wnd flex flex-col">
              <span className="text-xs text-gray-600">
                By: {property.developer}
              </span>
              <div className="con-qk6 text-xs mt-1">
                <HomeIcon className="h-3 w-3 inline-block mr-1" />
                {property.configurations}
              </div>
            </div>
            <h4 className="text-base">
              
              {property.price}
            </h4>
          </div>
        </Link>
        <a
          href={`https://api.whatsapp.com/send?phone=919892666207&text=Hi!%20I%20am%20interested%20in ${encodeURIComponent(
            property.name
          )}`}
          className="p-w95"
          target="_blank"
          rel="noopener noreferrer"
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
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

  return (
    <div id="properties" className="properties-slider">
      <Slider {...settings}>
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </Slider>
    </div>
  );
}
