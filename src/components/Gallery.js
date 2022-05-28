import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby"

import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { converToBgImage } from "gbimage-bridge"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"



export default class Slidy extends React.Component{
  render(props) {
    const settings = {
      arrows: true,
      dots: true,
      autoplay: true,
      infinite: true,
      fade: true,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <StaticQuery
      query={graphql`
        query SlickQuery {
          allContentfulGallery {
            nodes {
              images {
                gatsbyImageData(width: 1200, placeholder: BLURRED)
              }
            }
          }
        }
        `}
      render={data => (
          <div className="homepage-banner mb-5">
          <Slider {...settings}>
          {data.allContentfulGallery.nodes.map((gallery) => {
                return(
                  <h1>hi</h1>
                )
              })}
          </Slider>
          </div>
        )}
      />
    )
  }
}
