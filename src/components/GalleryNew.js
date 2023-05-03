import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import '../styles/gallery.css'
import photo1 from '../img/gallery2023/DSC_0001.jpg'
import photo2 from '../img/gallery2023/DSC_0121.jpg'
import photo3 from '../img/gallery2023/DSC_0179.jpg'
import photo4 from '../img/gallery2023/IMG_2052.jpg'
import photo5 from '../img/gallery2023/IMG_6067.jpg'
import photo6 from '../img/gallery2023/IMG_6100.jpg'
// import photo7 from './img/gallery2023/IMG_6121.jpg'
import photo8 from '../img/gallery2023/IMG_6140.jpg'
import photo9 from '../img/gallery2023/DSC_0059.jpg'
import photo10 from '../img/gallery2023/DSC_0135.jpg'
import photo11 from '../img/gallery2023/DSC_0185.jpg'
import photo12 from '../img/gallery2023/IMG_2054.jpg'
import photo13 from '../img/gallery2023/IMG_6071.jpg'
import photo14 from '../img/gallery2023/IMG_6110.jpg'
import photo15 from '../img/gallery2023/IMG_6123.jpg'
import photo16 from '../img/gallery2023/IMG_6145.jpg'
import photo17 from '../img/gallery2023/DSC_0091.jpg'
import photo18 from '../img/gallery2023/DSC_0142.jpg'
import photo19 from '../img/gallery2023/DSC_0187.jpg'
import photo20 from '../img/gallery2023/IMG_2057.jpg'
import photo21 from '../img/gallery2023/IMG_6072.jpg'
import photo22 from '../img/gallery2023/IMG_6111.jpg'
import photo23 from '../img/gallery2023/IMG_6124.jpg'
import photo24 from '../img/gallery2023/IMG_6206.jpg'
import photo25 from '../img/gallery2023/DSC_0094.jpg'
import photo26 from '../img/gallery2023/DSC_0152.jpg'
import photo27 from '../img/gallery2023/DSC_0195.jpg'
import photo28 from '../img/gallery2023/IMG_2061.jpg'
import photo29 from '../img/gallery2023/IMG_6074.jpg'
import photo30 from '../img/gallery2023/IMG_6112.jpg'
import photo31 from '../img/gallery2023/IMG_6125.jpg'
import photo32 from '../img/gallery2023/IMG_6211.jpg'
import photo33 from '../img/gallery2023/DSC_0100.jpg'
import photo34 from '../img/gallery2023/DSC_0155.jpg'
import photo35 from '../img/gallery2023/DSC_0196.jpg'
import photo36 from '../img/gallery2023/IMG_2793.jpg'
import photo37 from '../img/gallery2023/IMG_6079.jpg'
import photo38 from '../img/gallery2023/IMG_6113.jpg'
import photo39 from '../img/gallery2023/IMG_6126.jpg'
import photo40 from '../img/gallery2023/DSC_0102.jpg'
import photo41 from '../img/gallery2023/DSC_0159.jpg'
import photo42 from '../img/gallery2023/IMG_2038.jpg'
import photo43 from '../img/gallery2023/IMG_2802.jpg'
import photo44 from '../img/gallery2023/IMG_6087.jpg'
import photo45 from '../img/gallery2023/IMG_6114.jpg'
import photo46 from '../img/gallery2023/IMG_6127.jpg'
import photo47 from '../img/gallery2023/DSC_0104.jpg'
import photo48 from '../img/gallery2023/DSC_0164.jpg'
import photo49 from '../img/gallery2023/IMG_2043.jpg'
import photo50 from '../img/gallery2023/IMG_2803.jpg'
import photo51 from '../img/gallery2023/IMG_6091.jpg'
import photo52 from '../img/gallery2023/IMG_6115.jpg'
import photo53 from '../img/gallery2023/IMG_6128.jpg'
import photo54 from '../img/gallery2023/DSC_0109.jpg'
import photo55 from '../img/gallery2023/DSC_0166.jpg'
import photo56 from '../img/gallery2023/IMG_2045.jpg'
import photo57 from '../img/gallery2023/IMG_6053.jpg'
import photo58 from '../img/gallery2023/IMG_6092.jpg'
import photo59 from '../img/gallery2023/IMG_6116.jpg'
import photo60 from '../img/gallery2023/IMG_6129.jpg'
import photo61 from '../img/gallery2023/DSC_0112.jpg'
import photo62 from '../img/gallery2023/DSC_0168.jpg'
import photo63 from '../img/gallery2023/IMG_2046.jpg'
import photo64 from '../img/gallery2023/IMG_6059.jpg'
import photo65 from '../img/gallery2023/IMG_6093.jpg'
import photo66 from '../img/gallery2023/IMG_6117.jpg'
import photo67 from '../img/gallery2023/IMG_6130.jpg'
import photo68 from '../img/gallery2023/DSC_0116.jpg'
import photo69 from '../img/gallery2023/DSC_0172.jpg'
import photo70 from '../img/gallery2023/IMG_2048.jpg'
import photo71 from '../img/gallery2023/IMG_6062.jpg'
import photo72 from '../img/gallery2023/IMG_6096.jpg'
import photo73 from '../img/gallery2023/IMG_6118.jpg'
import photo74 from '../img/gallery2023/IMG_6132.jpg'
import photo75 from '../img/gallery2023/DSC_0119.jpg'
import photo76 from '../img/gallery2023/DSC_0174.jpg'
import photo77 from '../img/gallery2023/IMG_2049.jpg'
import photo78 from '../img/gallery2023/IMG_6063.jpg'
import photo79 from '../img/gallery2023/IMG_6097.jpg'
import photo80 from '../img/gallery2023/IMG_6119.jpg'
import photo81 from '../img/gallery2023/IMG_6135.jpg'

const arrayImgs = [
	{ path: photo1, id: 1 },
	{ path: photo2, id: 2 },
	{ path: photo3, id: 3 },
	{ path: photo4, id: 4 },
	{ path: photo5, id: 5 },
	{ path: photo6, id: 6 },
	{ path: photo8, id: 8 },
	{ path: photo9, id: 9 },
	{ path: photo10, id: 10 },
	{ path: photo11, id: 11 },
	{ path: photo12, id: 12 },
	{ path: photo13, id: 13 },
	{ path: photo14, id: 14 },
	{ path: photo15, id: 15 },
	{ path: photo16, id: 16 },
	{ path: photo17, id: 17 },
	{ path: photo18, id: 18 },
	{ path: photo19, id: 19 },
	{ path: photo20, id: 20 },
	{ path: photo21, id: 21 },
	{ path: photo22, id: 22 },
	{ path: photo23, id: 23 },
	{ path: photo24, id: 24 },
	{ path: photo25, id: 25 },
	{ path: photo26, id: 26 },
	{ path: photo27, id: 27 },
	{ path: photo28, id: 28 },
	{ path: photo29, id: 29 },
	{ path: photo30, id: 30 },
	{ path: photo31, id: 31 },
	{ path: photo32, id: 32 },
	{ path: photo33, id: 33 },
	{ path: photo34, id: 34 },
	{ path: photo35, id: 35 },
	{ path: photo36, id: 36 },
	{ path: photo37, id: 37 },
	{ path: photo38, id: 38 },
	{ path: photo39, id: 39 },
	{ path: photo40, id: 40 },
	{ path: photo41, id: 41 },
	{ path: photo42, id: 42 },
	{ path: photo43, id: 43 },
	{ path: photo44, id: 44 },
	{ path: photo45, id: 45 },
	{ path: photo46, id: 46 },
	{ path: photo47, id: 47 },
	{ path: photo48, id: 48 },
	{ path: photo49, id: 49 },
	{ path: photo50, id: 50 },
	{ path: photo51, id: 51 },
	{ path: photo52, id: 52 },
	{ path: photo53, id: 53 },
	{ path: photo54, id: 54 },
	{ path: photo55, id: 55 },
	{ path: photo56, id: 56 },
	{ path: photo57, id: 57 },
	{ path: photo58, id: 58 },
	{ path: photo59, id: 59 },
	{ path: photo60, id: 60 },
	{ path: photo61, id: 61 },
	{ path: photo62, id: 62 },
	{ path: photo63, id: 63 },
	{ path: photo64, id: 64 },
	{ path: photo65, id: 65 },
	{ path: photo66, id: 66 },
	{ path: photo67, id: 67 },
	{ path: photo68, id: 68 },
	{ path: photo69, id: 69 },
	{ path: photo70, id: 70 },
	{ path: photo71, id: 71 },
	{ path: photo72, id: 72 },
	{ path: photo73, id: 73 },
	{ path: photo74, id: 74 },
	{ path: photo75, id: 75 },
	{ path: photo76, id: 76 },
	{ path: photo77, id: 77 },
	{ path: photo78, id: 78 },
	{ path: photo79, id: 79 },
	{ path: photo80, id: 80 },
	{ path: photo81, id: 81 }
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
						<img src={image} alt="Skitag 2023" />
					</Modal.Body>
				</Modal>

				<div className="d-flex flex-wrap" style={{ gap: '1em' }}>
					{arrayImgs &&
						arrayImgs.map((item) => {
							return (
								<div key={item.id} onClick={() => handleShow(item.path)}>
									<img
										src={item.path}
										alt="Skitag 2023"
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
