import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";
import watchImg from "../../assets/images/watch-image.png";
function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    {
      id: 1,
      title: "Best Deal Online on smart watches.",
      subtitle: "SMART WEARABLE.",
      offer: "UP to 80% OFF",
      img: watchImg,
    },
    {
      id: 2,
      title: "LATEST GADGETS.",
      subtitle: "Hot Deals on Electronics & Accessories",
      offer: "Flat 50% OFF",
      img: watchImg,
    },
    {
      id: 3,
      title: "TRENDY FASHION.",
      subtitle: "Upgrade your style today",
      offer: "Buy 1 Get 1 Free",
      img: watchImg,
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {slides.map((slides) => (
          <div key={slides.id} className="slide-box">
            <div className="slide-inner-left">
              <span>{slides.subtitle}</span>
              <h2>{slides.title}</h2>
              <span>{slides.offer}</span>
            </div>

            <div className="slide-inner-right">
              <img src={slides.img} alt={slides.title} />
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
}

export default Hero;
