import React from 'react'

import sponsoren2023 from '../../img/sponsoren2023.png'

export default function Partners2023() {
	return (
		<div className="container">
			<div id="golf-turnier" className="content"></div>
			<div className="partner-logos-container">
				<h3
					style={{
						color: '#0023A5',
						fontWeight: 'bolder',
						alignSelf: 'flex-start',
						marginTop: '1em'
					}}
				>
					Unsere Partner:
				</h3>
				<div className="">
					<img src={sponsoren2023} alt="sponsoren2023" />
				</div>
			</div>
		</div>
	)
}
