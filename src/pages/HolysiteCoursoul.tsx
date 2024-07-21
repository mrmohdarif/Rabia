import React from "react";
import Slider from "react-slick";
import './HolySites.css';
function Fade({siteImage}) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div  className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={siteImage[0]} width={"100%"} className="carousel-image"/>
        </div>
        <div>
          <img src={siteImage[1]} width={"100%"} className="carousel-image"/>
        </div>
        <div>
          <img src={siteImage[2]} width={"100%"} className="carousel-image"/>
        </div>
        
      </Slider>
    </div>
  );
}

export default Fade;
