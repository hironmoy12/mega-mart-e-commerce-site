import React from "react";
import { brands } from "../../../assets/Data/brands";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Brand.css";

function BrandsSection() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <>
      <Slider className="brand" {...settings}>
        {brands.map((slide) => (
          <div key={slide.id} className="slide-box brand">
            <img src={slide.image} alt={slide.brand} />
          </div>
        ))}
      </Slider>
    </>
  );
}

export default BrandsSection;
