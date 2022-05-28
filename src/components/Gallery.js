import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby"

export default class Gallery extends Component () {
    render() {

    return (
      <StaticQuery
      query={graphql`
        query SlickQuery {
          allContentfulGallery {
            nodes {
              images {
                gatsbyImageData(width: 1000, placeholder: BLURRED)
              }
            }
          }
        }
        `}
      render={data => (
          <div className="mb-5">
            {data.allContentfulGallery.nodes.map((image) => {
                console.log(image)
                /* return( */
                /*   <div key={image.id}> */
                /*   <BgImage */
                /*   className="d-flex align-items-end" */
                /*   alt={image.imageTitle} */
                /*   image={slickImage} */
                /*   style={{maxHeight: "100%", objectFit: "contain",height: "93vh"}} */
                /*   /> */
                /*   </div> */
                /* ) */
              })}
          </div>
        )}
      />

    );
  }
}
