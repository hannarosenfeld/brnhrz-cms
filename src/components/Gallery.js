import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby"

import { BgImage } from 'gbimage-bridge';
import { converToBgImage } from "gbimage-bridge"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "../styles/gallery.css"

export default function Gallery() {
        return (
            <StaticQuery
              query={graphql`
        query SlickQuery {
          allContentfulGallery {
            nodes {
              images {
                id
                gatsbyImageData(width: 1200, placeholder: BLURRED)
              }
            }
          }
        }
        `}
              render={data => (
                  <div>
                      {data.allContentfulGallery.nodes.map((gallery) => {
                          return(
                              <div className="d-flex flex-wrap">
                                  {gallery.images.map(image => {
                                      const sliderImage = getImage(image)
                                      return(
                                          <div key={image.id} style={{height: "100px", width: "100px"}}>
                                            <GatsbyImage
                                              className="d-flex align-items-end"
                                              alt="Golf"
                                              image={sliderImage}
                                              style={{height: "100%"}}
                                            />
                                          </div>
                                    )
                                })}
                              </div>
                          )
                      })}
                  </div>
              )}
            />
        )
    }
