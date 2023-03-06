import React from 'react'
import Layout from '../../components/Layout'

import Gallery from '../../components/Gallery'

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
import preis from '../../img/preis.jpg'
import sieger from '../../img/sieger.jpg'

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

export default function CharityGolfturnier2022() {
	return (
		<Layout>
			<div className="container">
				<div id="golf-turnier" className="content">
					<div
						style={{
							margin: '2em auto'
						}}
					>
						<h3 className="has-text-weight-semibold">
							Das Bärenherz Charity 2022 Golfturnier: Premiere geglückt!
						</h3>

						{/* //TODO this pics are super heavy!!!! more than 20mb */}
						<Gallery />

						<div
							className="mt-3 mb-5 d-flex"
							style={{ gap: '3em', margin: '0 auto' }}
						></div>

						<p>
							Stolze 23’163.50 CHF an Spendengeldern hat die Bärenherzfamilie
							bei ihrem ersten Charity Event zusammengebracht. Am 6. Mai 2022
							war der Golfclub Lipperswil Turnierschauplatz der 43 Golfer, die
							für einen humanitären Zweck mitspielten. Das Projekt Perimac, das
							durch Ausbildung und verbesserte Infrastruktur die
							Säuglingssterblichkeit in Nord-Mazedonien drosselt, wurde dadurch
							unterstützt. Die Freude war gross bei den Projektverantwortlichen
							Sabine Busch und Achim Eckert von Project Hope e.V., die
							stellvertretend anwesend waren.
						</p>
						<p>
							Die Namen der stolzen Gewinner des ersten Golfturniers werden auf
							der Bärenherz Trophäe verewigt. Alle übrigen hatten auch ohne
							Hauptgewinn ihr Vergnügen an diesem Tag. Die Stimmung war dank den
							vielen engagierten Teilnehmern trotz anfänglichem Regenwetter
							grandios. Vorfreude herrscht auf die nächstjährige Austragung des
							Charity Golfturniers in Lipperswil am 5. Mai 2023 – bitte diesen
							Termin jetzt schon vormerken!
						</p>
						<p>
							Vor dem nächsten Golf Event in Lipperswil werden wir das
							allererste Bärenherz Nikolaus Charity Ski-Weekend am 9.-11.
							Dezember 2022 durchführen. Die Flumserberge als Austragungsort und
							die Prominenz des Schweizer Skizirkus werden den Teilnehmern ein
							unvergessliches Programm bieten: ein Gaudi-Skirennen, „Embodied
							Skiing“, Hüttenzauber und vieles mehr. Merken Sie sich auf jeden
							Fall das Datum vor! Falls nicht genügend Schnee liegen sollte, ist
							als Verschiebetermin der 31. März bis 2. April 2023 vorgesehen.
						</p>
						<p>
							Wir bedanken uns herzlich für die rege Teilnahme und das allgemein
							grosse Interesse an Bärenherz. Auch wenn Sie nicht immer
							persönlich dabei sein können, werden Sie Mitglied der
							Bärenherzfamilie, werden Sie Vereinsmitglied und unterstützen Sie
							durch ihre Mitgliedschaft humanitäre Projekte, die Leben retten.
						</p>

						{/* 2 images with price Bear  */}
						<div
							className="d-flex mb-5 flex-wrap justify-content-center"
							style={{ maxWidth: '100%', gap: '2em' }}
						>
							<img src={sieger} />
							<img src={preis} />
						</div>

						{/* Partners */}
						<div className="partner-logos-container">
							<h3 style={{ color: '#0023A5' }}>Unsere Partner:</h3>
							<div className="partner-logos">
								{partners.map((partner) => (
									<img src={partner} alt="random" />
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
