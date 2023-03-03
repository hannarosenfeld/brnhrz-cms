import React from 'react'
// import Layout from '../../components/Layout'

import ski from '../../img/ski.png'
import anmeldung from '../../../static/pdf/Anmeldung-Charity-Ski-Tag-2023.pdf'
import skieinladung from '../../../static/pdf/Einladung-Charity-Ski-Tag-2023.pdf'

export default function CharitySkitag2023() {
	return (
		<section className="section">
			<div className="container">
				<div id="ski-weekend" className="content">
					<img src={ski} style={{ width: '100vw' }} />
					<div
						style={{
							margin: '1em auto'
						}}
					></div>
					<h3 className="has-text-weight-semibold">
						Der Bärenherz Charity Skitag 2023
					</h3>
					<p>
						(Freitag, 31. März 2023, abends, und Samstag, 1. April 2023, ganzer
						Tag)
					</p>
					<p>
						Nach dem erfolgreichen Charity Golfturnier im Mai 2022 in Lipperswil
						geht es nun an den schönen Flumserberg zum Skifahren. Mit den
						Ski-Legenden Andreas Wenzel, Marie-Therese Nadig und Urs Kälin als
						Coaches werden wir, aufgeteilt in kleine Gruppen, den gemeinsamen
						Schwung-Rhythmus finden. Der Spass beim Carven, Freeriden und
						Recreational Skiing steht im Vordergrund und wir geniessen die
						Pisten der Bergbahnen Flumserberg in vollen Zügen. Beim
						Differenz-Zeitfahren gewinnt, wer in zwei Läufen die geringste
						Zeitdifferenz hat, unseren aus Holz geschnitzten
						„Ski-Bären-Wanderpokal“. Natürlich kommt auch der kulinarische und
						gesellige Teil nicht zu kurz.{' '}
					</p>
					<p>
						Lassen Sie sich überraschen und geniessen Sie mit uns einen
						unvergesslichen Skitag!
					</p>
					<ul style={{ listStyleType: 'none', margin: 0 }}>
						<li>
							<a href={skieinladung} download>
								Einladung
							</a>
						</li>
						<li>
							<a href={anmeldung} download>
								Anmeldung
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
