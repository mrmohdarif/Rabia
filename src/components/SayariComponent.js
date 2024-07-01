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
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings} style={{textAlign:"center"}}>
      <div >

      <pre>
      गुफ़्तुगू देर से जारी है नतीजे के बग़ैर 
       <br/>
      इक नई बात निकल आती है हर बात के साथ 
      <br/>
            ऐतबार साजिद
        </pre>
        </div>
        <div >
        <pre>
        एक मैं हूँ और दस्तक कितने दरवाज़ों पे दूँ 
       <br/>
       नज़र बचाना भी चाहते हैं नज़र मिलाना भी चाहते हैं 
      <br/>
      सलाम मछली शहरी
        </pre>
        </div>
        <div >
        <pre>
        वो दिल से तंग आ के आज महफ़िल में हुस्न की तमकनत की ख़ातिर  
       <br/>
      इक नई बात निकल आती है हर बात के साथ 
      <br/>
            ऐतबार साजिद
        </pre>
        </div>
           
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default SliderComponent;
