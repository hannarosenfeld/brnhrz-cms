import React, { useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Modal, Button } from "react-bootstrap"


export default function Gallery() {
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => {
        setShow(true)
        console.log("Hi")
    }

    const data = useStaticQuery(graphql`
    query GalleryQuery {
      allContentfulGallery {
        nodes {
          images {
            id
            gatsbyImageData(width: 1200, placeholder: DOMINANT_COLOR)
          }
        }
      }
    }
  `)
    return(
        <div>

          {data.allContentfulGallery.nodes.map(gallery => {
              return(
                  <div className="d-flex flex-wrap" style={{gap: "1em"}}>
                    {gallery.images.map(image => {
                        const galleryImage = getImage(image)
                        return(
                            <div>
                            <div key={image.id} onClick={handleShow} >
                              <GatsbyImage image={galleryImage} style={{height: "8em", width: "8em"}}/>
                            </div>
                            </div>
                        )
                    })}
                  </div>
              )
          })}
        </div>
    )
}
