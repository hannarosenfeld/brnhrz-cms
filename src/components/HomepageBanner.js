import React, {Component} from "react"
// import { Link } from 'gatsby'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

import "../styles/bannerstyles.css"

import banner_image_1 from '../img/banner1.jpg'
import banner_image_2 from '../img/golf_charity.png'
import banner_image_3 from '../img/baby.jpg'
//import golf_cup_logo from '../img/golf_cup_logo.png'


const photos = [
    {
	id: '1',
	url: banner_image_1,
	css_id: "banner-image-one",
	heading: 'unsere mission',
	description: 'Lebensrettende Hilfe für die Schwächsten',
	link: "/projekte",
	link_text: "mehr erfahren",
    },
    {
	id: '2',
	url: banner_image_2,
	css_id: "banner-image-two",
//	description: 'Dabei sein und (Golf-) spielend Gutes tun!',
	link: "blog/#golf",
	link_text: "Hier anmelden!",
//	badge: golf_cup_logo
    },
    {
	id: '3',
	url: banner_image_3,
	css_id: "banner-image-three",
	heading: 'unsere projekte',
	description: 'Hilfe, die dort ankommt, wo sie am dringensten gebraucht wird!',
	link: "/projekte",
	link_text: "mehr erfahren"
    }
]


class HomepageBanner extends Component{
    render(){
	const settings = {
	    dots: true,
	    fade: true,
	    infinite: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 5000,
	}
	return (
		<div id="homepagebanner">
		<Slider {...settings}>
		{photos.map((photo) => {
		    return(
			    <div id="homepagebanner-img-container">
			    <img id="homepagebanner-img" width="100%" alt="homepagebanner-image" src={photo.url} />
			    <div className="homepagebanner-text" id={photo.css_id}>
			    <img src={photo.badge} width="100%" position="absolute" className="banner-badge"/>
			    <h1>{photo.heading}</h1>
			    <p>{photo.description}</p>
			    <a className="banner-link" href={photo.link}>{photo.link_text}</a>
			    </div>
			    </div>
		    )
		})}
	    </Slider>
		</div>
	)
    }
}

export default HomepageBanner
