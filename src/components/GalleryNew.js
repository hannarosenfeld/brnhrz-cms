import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import '../styles/gallery.css'

import photo1 from '../img/gallery2023/photo1.jpg'
import photo2 from '../img/gallery2023/photo2.jpg'
import photo3 from '../img/gallery2023/photo3.jpeg'
import photo4 from '../img/gallery2023/photo4.jpeg'
import photo5 from '../img/gallery2023/photo5.jpeg'
import photo6 from '../img/gallery2023/photo6.jpeg'
import photo7 from '../img/gallery2023/photo7.jpg'
import photo8 from '../img/gallery2023/photo8.jpeg'
import photo9 from '../img/gallery2023/photo9.jpeg'

const arrayImgs = [
	{ path: photo1, id: 1 },
	{ path: photo2, id: 2 },
	{ path: photo3, id: 3 },
	{ path: photo4, id: 4 },
	{ path: photo5, id: 5 },
	{ path: photo6, id: 6 },
	{ path: photo7, id: 7 },
	{ path: photo8, id: 8 },
	{ path: photo9, id: 9 }
]

const GalleryNew = () => {
	const [show, setShow] = useState(false)
	const [image, setImage] = useState('')

	const handleClose = () => setShow(false)

	const handleShow = (item) => {
		setShow(true)
		setImage(item)
	}
	return (
		<div>
			<>
				<Modal id="gallery-modal" show={show} onHide={handleClose}>
					<Modal.Header closeButton></Modal.Header>
					<Modal.Body>
						<img src={image} />
					</Modal.Body>
				</Modal>

				<div className="d-flex flex-wrap" style={{ gap: '1em' }}>
					{arrayImgs &&
						arrayImgs.map((item) => {
							return (
								<div key={item.id} onClick={() => handleShow(item.path)}>
									<img
										src={item.path}
										alt="random"
										style={{ height: '6em', width: '6em', objectFit: 'cover' }}
									/>
								</div>
							)
						})}
				</div>
			</>
		</div>
	)
}

export default GalleryNew
