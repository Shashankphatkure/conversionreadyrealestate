import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./localities.css";

const LocalityCard = ({ locality }) => (
  <div className="item-cim">
    <div className="item-5t2">
      <div className="pro-oph">
        <a href={locality.link}>
          <div className="pt-noq">
            <img src={locality.image} alt={locality.name} />
            <div className="pti-mk5">
              <h6>
                <i className="jmxgo bi-geo-oco" />
                {locality.name}&nbsp;&nbsp;&nbsp;
                <i className="jmxgo bi-oy6" />
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
  const localitiesData = [
    {
      name: "Pune",
      link: "https://newprojectsonline.com/new-projects-in-pune",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/pune.webp",
      properties: 76
    },
    {
      name: "Thane",
      link: "https://newprojectsonline.com/new-projects-in-thane",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/thane.webp",
      properties: 50
    },
    {
      name: "Ghaziabad",
      link: "https://newprojectsonline.com/new-projects-in-ghaziabad",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/ghaziabad.webp",
      properties: 3
    },
    {
      name: "Navi Mumbai",
      link: "https://newprojectsonline.com/new-projects-in-navi-mumbai",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/navi-mumbai.webp",
      properties: 396
    },
    {
      name: "Kalyan",
      link: "https://newprojectsonline.com/new-projects-in-kalyan",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/kalyan.webp",
      properties: 26
    },
    {
      name: "Noida",
      link: "https://newprojectsonline.com/new-projects-in-noida",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/noida.webp",
      properties: 5
    },
    {
      name: "Dombivali",
      link: "https://newprojectsonline.com/new-projects-in-dombivali",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/dombivali.webp",
      properties: 13
    },
    {
      name: "Goa",
      link: "https://newprojectsonline.com/new-projects-in-goa",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/goa.webp",
      properties: 1
    },
    {
      name: "Hyderabad",
      link: "https://newprojectsonline.com/new-projects-in-hyderabad",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/hyderabad.webp",
      properties: 2
    },
    {
      name: "Bangalore",
      link: "https://newprojectsonline.com/new-projects-in-banglore",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/banglore.webp",
      properties: 37
    },
    {
      name: "Ahmedabad",
      link: "https://newprojectsonline.com/new-projects-in-ahmedabad",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/ahmedabad.webp",
      properties: 1
    },
    {
      name: "Gurgaon",
      link: "https://newprojectsonline.com/new-projects-in-gurgaon",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/gurgaon.webp",
      properties: 26
    },
    {
      name: "Mumbai City",
      link: "https://newprojectsonline.com/new-projects-in-mumbai-city",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/Mumbai.webp",
      properties: 228
    },
    {
      name: "Mumbai Suburban",
      link: "https://newprojectsonline.com/new-projects-in-mumbai-suburban",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/mumbai-sub.webp",
      properties: 28
    },
    {
      name: "Nagpur",
      link: "https://newprojectsonline.com/new-projects-in-nagpur",
      image: "https://newprojectsonline.com/assets/uploads/homelocalities_image/nagpur.webp",
      properties: 2
    }
  ];

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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
                    {localitiesData.map((locality, index) => (
                      <LocalityCard key={index} locality={locality} />
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
