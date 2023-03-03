import React, { useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { Modal } from 'react-bootstrap'

import '../styles/gallery.css'

export default function Gallery() {
	const [show, setShow] = useState(false)
	const [image, setImage] = useState('')

	const handleClose = () => setShow(false)

	const handleShow = (id) => {
		setShow(true)
		setImage(id)
	}

	const data = useStaticQuery(graphql`
		query GalleryQuery {
			allContentfulGallery {
				nodes {
					images {
						id
						gatsbyImageData(
							height: 1200
							placeholder: DOMINANT_COLOR
							resizingBehavior: NO_CHANGE
							layout: CONSTRAINED
							jpegProgressive: true
							formats: AVIF
							aspectRatio: 1.5
						)
						file {
							details {
								size
							}
						}
					}
				}
			}
		}
	`)
	return (
		<div>
			<>
				<Modal id="gallery-modal" show={show} onHide={handleClose}>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
						<GatsbyImage image={image} />
					</Modal.Body>
				</Modal>
			</>
			{data.allContentfulGallery.nodes.map((gallery) => {
				return (
					<div className="d-flex flex-wrap" style={{ gap: '1em' }}>
						{gallery.images.map((image) => {
							const galleryImage = getImage(image)
							return (
								<div>
									<div key={image.id} onClick={() => handleShow(galleryImage)}>
										<GatsbyImage
											image={galleryImage}
											style={{ height: '6em', width: '6em' }}
										/>
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
