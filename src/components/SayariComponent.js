// src/components/SliderComponent.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 import './Sayari.css';
import {quotes} from '../../static/quote';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container" style={{marginTop:'50px'}}>
      <Slider {...settings} style={{textAlign:"center"}}>
       {quotes.map((quote,index)=>{
        return(
          <div key={index} className="slider-quote">
            <p>{quote.line2line}</p>
            <p>{quote.discriptions}</p>
          </div>
        )
       })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
