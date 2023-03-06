import React from 'react'

// logos
import ey from '../../img/logos/EY.jpg'
import albego from '../../img/logos/albego.jpg'
import mmp from '../../img/logos/mmp.png'
import kitzhof from '../../img/logos/Kitzhof.png'
import beuerberg from '../../img/logos/Logo_Beuerberg.png'
import b_services from '../../img/logos/b_selection.png'
import golf_leuk from '../../img/logos/GolfLeuk_logo_.png'
import hotel from '../../img/logos/hotel.jpeg'
import baur from '../../img/logos/baur.png'
import oerlikon from '../../img/logos/oerlikon.jpg'
import wein from '../../img/logos/wein.jpg'
import sunresorts from '../../img/logos/sunresorts.jpeg'
import dior from '../../img/logos/Dior.svg.png'
import sensolar from '../../img/logos/sensolar.png'
import porsche from '../../img/logos/porschez.png'

const partners = [
	ey,
	albego,
	mmp,
	kitzhof,
	beuerberg,
	b_services,
	golf_leuk,
	hotel,
	baur,
	oerlikon,
	wein,
	sunresorts,
	dior,
	sensolar,
	porsche
]

export default function Partners() {
	return (
		<div className="container">
			<div id="golf-turnier" className="content"></div>
			<div className="partner-logos-container">
				<h3 style={{ color: '#0023A5' }}>Unsere Partner:</h3>
				<div className="partner-logos">
					{partners.map((partner) => (
						<img src={partner} alt="random" />
					))}
				</div>
			</div>
		</div>
	)
}
