import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import hands from "../img/people.jpg"
import baby from "../img/baby.jpg"
import golferin from "../img/golferin.jpg"

const photos = [
    {
	url: hands,
	title: "Unsere Mission",
	subheading: "Wir helfen dort, wo Hilfe gebraucht wird."
    },
    {
	url: golferin
    },    
    {
	url: baby
    }    
]


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
      return (
	      <div>
            <Slider {...settings}>
	    {photos.map((photo) => {
		return(
		    <div className="carousel-container">
			<img src={photo.url} />
			<div className="banner-text">
			<h2>{photo.title}</h2>
			<h3>{photo.subheading}</h3>
			</div>
			</div>
		)})}
        </Slider>
      </div>
    );
  }
}
