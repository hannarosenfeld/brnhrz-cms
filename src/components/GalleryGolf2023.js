import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

import '../styles/gallery.css'
/* 
DSC_0277.jpg  DSC_0335.jpg  DSC_0397.jpg  DSC_0460.jpg  DSC_0520.jpg  DSC_0615.jpg  DSC_0897.jpg
DSC_0281.jpg  DSC_0336.jpg  DSC_0398.jpg  DSC_0462.jpg  DSC_0521.jpg  DSC_0618.jpg  DSC_0898.jpg
DSC_0282.jpg  DSC_0337.jpg  DSC_0399.jpg  DSC_0464.jpg  DSC_0540.jpg  DSC_0619.jpg  DSC_0902.jpg
DSC_0284.jpg  DSC_0340.jpg  DSC_0401.jpg  DSC_0465.jpg  DSC_0542.jpg  DSC_0621.jpg  DSC_0908.jpg
DSC_0285.jpg  DSC_0341.jpg  DSC_0402.jpg  DSC_0466.jpg  DSC_0543.jpg  DSC_0652.jpg  DSC_0909.jpg
DSC_0286.jpg  DSC_0342.jpg  DSC_0404.jpg  DSC_0467.jpg  DSC_0545.jpg  DSC_0658.jpg  DSC_0915.jpg
DSC_0287.jpg  DSC_0343.jpg  DSC_0408.jpg  DSC_0470.jpg  DSC_0548.jpg  DSC_0661.jpg  DSC_0918.jpg
DSC_0288.jpg  DSC_0344.jpg  DSC_0409.jpg  DSC_0471.jpg  DSC_0549.jpg  DSC_0671.jpg  DSC_0931.jpg
DSC_0290.jpg  DSC_0346.jpg  DSC_0410.jpg  DSC_0473.jpg  DSC_0551.jpg  DSC_0677.jpg  DSC_0950.jpg
DSC_0292.jpg  DSC_0348.jpg  DSC_0412.jpg  DSC_0475.jpg  DSC_0553.jpg  DSC_0681.jpg  DSC_0954.jpg
DSC_0295.jpg  DSC_0350.jpg  DSC_0413.jpg  DSC_0476.jpg  DSC_0558.jpg  DSC_0687.jpg  DSC_0968.jpg
DSC_0299.jpg  DSC_0351.jpg  DSC_0414.jpg  DSC_0478.jpg  DSC_0560.jpg  DSC_0692.jpg  DSC_0975.jpg
DSC_0302.jpg  DSC_0352.jpg  DSC_0417.jpg  DSC_0479.jpg  DSC_0562.jpg  DSC_0700.jpg  DSC_0987.jpg
DSC_0303.jpg  DSC_0353.jpg  DSC_0420.jpg  DSC_0480.jpg  DSC_0563.jpg  DSC_0706.jpg  DSC_1024.jpg
DSC_0304.jpg  DSC_0355.jpg  DSC_0423.jpg  DSC_0481.jpg  DSC_0567.jpg  DSC_0724.jpg  DSC_1036.jpg
DSC_0305.jpg  DSC_0358.jpg  DSC_0425.jpg  DSC_0488.jpg  DSC_0570.jpg  DSC_0728.jpg  DSC_1047.jpg
DSC_0306.jpg  DSC_0359.jpg  DSC_0426.jpg  DSC_0490.jpg  DSC_0574.jpg  DSC_0738.jpg  DSC_1063.jpg
DSC_0307.jpg  DSC_0360.jpg  DSC_0427.jpg  DSC_0495.jpg  DSC_0576.jpg  DSC_0755.jpg  DSC_1064.jpg
DSC_0308.jpg  DSC_0361.jpg  DSC_0428.jpg  DSC_0497.jpg  DSC_0578.jpg  DSC_0764.jpg  DSC_1075.jpg
DSC_0309.jpg  DSC_0362.jpg  DSC_0429.jpg  DSC_0498.jpg  DSC_0580.jpg  DSC_0778.jpg  DSC_1085.jpg
DSC_0312.jpg  DSC_0363.jpg  DSC_0430.jpg  DSC_0499.jpg  DSC_0583.jpg  DSC_0784.jpg  DSC_1087.jpg
DSC_0313.jpg  DSC_0366.jpg  DSC_0431.jpg  DSC_0500.jpg  DSC_0584.jpg  DSC_0788.jpg  DSC_1094.jpg
DSC_0314.jpg  DSC_0369.jpg  DSC_0433.jpg  DSC_0502.jpg  DSC_0588.jpg  DSC_0796.jpg  DSC_1105.jpg
DSC_0315.jpg  DSC_0370.jpg  DSC_0434.jpg  DSC_0504.jpg  DSC_0591.jpg  DSC_0797.jpg
DSC_0316.jpg  DSC_0372.jpg  DSC_0436.jpg  DSC_0505.jpg  DSC_0593.jpg  DSC_0805.jpg
DSC_0317.jpg  DSC_0373.jpg  DSC_0438.jpg  DSC_0506.jpg  DSC_0595.jpg  DSC_0810.jpg 
*/

import photo1 from '../img/galleryGolf2023/DSC_0259.jpg'
import photo2 from '../img/galleryGolf2023/DSC_0320.jpg'
import photo3 from '../img/galleryGolf2023/DSC_0445.jpg'
import photo4 from '../img/galleryGolf2023/DSC_0445.jpg'
import photo5 from '../img/galleryGolf2023/DSC_0507.jpg'
import photo6 from '../img/galleryGolf2023/DSC_0597.jpg'
// import photo7 from './img/galleryGolf2023/DSC_0815.jpg'
import photo8 from '../img/galleryGolf2023/DSC_0261.jpg'
import photo9 from '../img/galleryGolf2023/DSC_0321.jpg'
import photo10 from '../img/galleryGolf2023/DSC_0377.jpg'
import photo11 from '../img/galleryGolf2023/DSC_0447.jpg'
import photo12 from '../img/galleryGolf2023/DSC_0508.jpg'
import photo13 from '../img/galleryGolf2023/DSC_0599.jpg'
import photo14 from '../img/galleryGolf2023/DSC_0816.jpg'
import photo15 from '../img/galleryGolf2023/DSC_0322.jpg'
import photo16 from '../img/galleryGolf2023/DSC_0379.jpg'
import photo17 from '../img/galleryGolf2023/DSC_0448.jpg'
import photo18 from '../img/galleryGolf2023/DSC_0509.jpg'
import photo19 from '../img/galleryGolf2023/DSC_0602.jpg'
import photo20 from '../img/galleryGolf2023/DSC_0822.jpg'
import photo21 from '../img/galleryGolf2023/DSC_0263.jpg'
import photo22 from '../img/galleryGolf2023/DSC_0323.jpg'
import photo23 from '../img/galleryGolf2023/DSC_0381.jpg'
import photo24 from '../img/galleryGolf2023/DSC_0449.jpg'
import photo25 from '../img/galleryGolf2023/DSC_0510.jpg'
import photo26 from '../img/galleryGolf2023/DSC_0604.jpg'
import photo27 from '../img/galleryGolf2023/DSC_0827.jpg'
import photo28 from '../img/galleryGolf2023/DSC_0264.jpg'
import photo29 from '../img/galleryGolf2023/DSC_0324.jpg'
import photo30 from '../img/galleryGolf2023/DSC_0383.jpg'
import photo31 from '../img/galleryGolf2023/DSC_0452.jpg'
import photo32 from '../img/galleryGolf2023/DSC_0511.jpg'
import photo33 from '../img/galleryGolf2023/DSC_0607.jpg'
import photo34 from '../img/galleryGolf2023/DSC_0607.jpg'
import photo35 from '../img/galleryGolf2023/DSC_0829.jpg'
import photo36 from '../img/galleryGolf2023/DSC_0268.jpg'
import photo37 from '../img/galleryGolf2023/DSC_0325.jpg'
import photo38 from '../img/galleryGolf2023/DSC_0384.jpg'
import photo39 from '../img/galleryGolf2023/DSC_0453.jpg'
import photo40 from '../img/galleryGolf2023/DSC_0512.jpg'
import photo41 from '../img/galleryGolf2023/DSC_0608.jpg'
import photo42 from '../img/galleryGolf2023/DSC_0835.jpg'
import photo43 from '../img/galleryGolf2023/DSC_0271.jpg'
import photo44 from '../img/galleryGolf2023/DSC_0327.jpg'
import photo45 from '../img/galleryGolf2023/DSC_0386.jpg'
import photo46 from '../img/galleryGolf2023/DSC_0455.jpg'
import photo47 from '../img/galleryGolf2023/DSC_0513.jpg'
import photo48 from '../img/galleryGolf2023/DSC_0609.jpg'
import photo49 from '../img/galleryGolf2023/DSC_0846.jpg'
import photo50 from '../img/galleryGolf2023/DSC_0273.jpg'
import photo51 from '../img/galleryGolf2023/DSC_0328.jpg'
import photo52 from '../img/galleryGolf2023/DSC_0393.jpg'
import photo53 from '../img/galleryGolf2023/DSC_0457.jpg'
import photo54 from '../img/galleryGolf2023/DSC_0514.jpg'
import photo55 from '../img/galleryGolf2023/DSC_0610.jpg'
import photo56 from '../img/galleryGolf2023/DSC_0859.jpg'
import photo57 from '../img/galleryGolf2023/DSC_0275.jpg'
import photo58 from '../img/galleryGolf2023/DSC_0331.jpg'
import photo59 from '../img/galleryGolf2023/DSC_0458.jpg'
import photo60 from '../img/galleryGolf2023/DSC_0517.jpg'
import photo61 from '../img/galleryGolf2023/DSC_0611.jpg'
import photo62 from '../img/galleryGolf2023/DSC_0871.jpg'
import photo63 from '../img/galleryGolf2023/DSC_0276.jpg'
import photo64 from '../img/galleryGolf2023/DSC_0333.jpg'
import photo65 from '../img/galleryGolf2023/DSC_0459.jpg'
import photo66 from '../img/galleryGolf2023/DSC_0518.jpg'
import photo67 from '../img/galleryGolf2023/DSC_0614.jpg'
import photo68 from '../img/galleryGolf2023/DSC_0885.jpg'
/* 
import photo69 from '../img/galleryGolf2023/DSC_0172.jpg'
import photo70 from '../img/galleryGolf2023/IMG_2048.jpg'
import photo71 from '../img/galleryGolf2023/IMG_6062.jpg'
import photo72 from '../img/galleryGolf2023/IMG_6096.jpg'
import photo73 from '../img/galleryGolf2023/IMG_6118.jpg'
import photo74 from '../img/galleryGolf2023/IMG_6132.jpg'
import photo75 from '../img/galleryGolf2023/DSC_0119.jpg'
import photo76 from '../img/galleryGolf2023/DSC_0174.jpg'
import photo77 from '../img/galleryGolf2023/IMG_2049.jpg'
import photo78 from '../img/galleryGolf2023/IMG_6063.jpg'
import photo79 from '../img/galleryGolf2023/IMG_6097.jpg'
import photo80 from '../img/galleryGolf2023/IMG_6119.jpg'
import photo81 from '../img/galleryGolf2023/IMG_6135.jpg' 
*/

const arrayImgs = [
	{ path: photo1, id: 1 },
	{ path: photo2, id: 2 },
	{ path: photo3, id: 3 },
	{ path: photo4, id: 4 },
	{ path: photo5, id: 5 },
	{ path: photo6, id: 6 },
	// { path: photo7, id: 7 },
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
	{ path: photo68, id: 68 }
	/* 	{ path: photo69, id: 69 },
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
	{ path: photo81, id: 81 } */
]

const GalleryGolf2023 = () => {
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
					<Modal.Body className="modal-body">
						<img src={image} alt="Golf 2023" />
					</Modal.Body>
				</Modal>

				<div className="d-flex flex-wrap" style={{ gap: '1em' }}>
					{arrayImgs &&
						arrayImgs.map((item) => {
							return (
								<div key={item.id} onClick={() => handleShow(item.path)}>
									<img
										src={item.path}
										alt="Golg 2023"
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

export default GalleryGolf2023
