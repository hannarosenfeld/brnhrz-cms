import React from 'react'
// import Layout from '../../components/Layout'

import golf23 from '../../img/GOLF_2023.png'
import anmeldung from '../../../static/pdf/Anmeldung-Golf-Cup-2023.pdf'
import golfinladung from '../../../static/pdf/Einladung-Golf-Cup-2023.pdf'

export default function CharityGolfTurnierg2023() {
	return (
		<section className="section">
			<div className="container">
				<div className="content">
					<img src={golf23} alt="Golftunier" style={{ margin: '1em 0 2em' }} />
					<div
						style={{
							margin: '1em auto'
						}}
					></div>
					<h3 className="has-text-weight-semibold" id="golf2023">
						Einladung zum Bärenherz Charity Golf 2023 nach Lipperswill
					</h3>
					<p>
						Wir freuen uns sehr, nach dem grossen Erfolg vom letzten Jahr,
						wieder zum Bärenherz Charity Golf am 05. Mai nach Lipperswil
						einzuladen, um gemeinsam Gutes zu tun und Spass zu haben.
					</p>
					<p>
						Unser ganz grosser Dank gilt unseren Partnern und Sponsoren, die mit
						Ihrer grosszügigen Unterstützung diesen Event erst möglich machen.
						Allein ein Blick auf die Liste der Unterstützer gibt bereits einen
						kleinen Eindruck, was auch in diesem Jahr zu erwarten ist. Wir sind
						kein Luxus Reiseveranstalter, auch wenn die phantastischen Preise
						bei unserer Tombola den Eindruck erwecken könnten.... Auch für die
						Nichtgolfer bietet die Abendveranstaltung einen tollen Rahmen mit
						vielen spannenden Kontakten und einem wirklich aussergewöhnlichen
						Programm.
					</p>
					<p>Wir freuen uns sehr auf Euch!</p>
					<ul style={{ listStyleType: 'none', margin: 0 }}>
						<li>
							<a href={golfinladung} download>
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
