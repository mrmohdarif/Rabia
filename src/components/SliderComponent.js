// src/components/SliderComponent.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles.module.css'; // You can create this CSS file for custom styling
import rabiaImage3 from '@site/static/img/img3.jpeg';
import rabiaImage1 from '@site/static/img/IMG1.jpeg';
import rabiaImage2 from '@site/static/img/IMG2.jpeg';
import rabiaImage from '@site/static/img/rabia.jpeg';
const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
      <div>
        <img src={rabiaImage} alt="Slide 1"   width={"100%"} height={450}/>
        </div>
        <div>
          <img src={rabiaImage3} alt="Slide 1" width={"100%"} height={450}/>
        </div>
        <div>
        <img src={rabiaImage1} alt="Slide 1"  width={"100%"} height={450}/>
        </div>
        <div>
        <img src={rabiaImage2} alt="Slide 1"   width={"100%"} height={450}/>
        </div>    
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default SliderComponent;
