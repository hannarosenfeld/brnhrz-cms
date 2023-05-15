import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Modal } from 'react-bootstrap'

import Layout from '../../components/Layout'
import '../../styles/gallery.css'

import Partners2023 from '../../pages/events/Partners2023'

export default function CharityGolf2023() {
	const [show, setShow] = useState(false)
	const [image, setImage] = useState('')

	const handleClose = () => setShow(false)

	const handleShow = (id) => {
		setShow(true)
		setImage(id)
	}

	const data = useStaticQuery(
		graphql`
			query CloudinaryImage {
				contentfulGallery(images: {}) {
					images {
						gatsbyImageData(
							placeholder: BLURRED
							layout: CONSTRAINED
							aspectRatio: 1.5
							resizingBehavior: NO_CHANGE
						)
						filename
						id
					}
				}
			}
		`
	)
	const images = data.contentfulGallery.images

	return (
		<Layout>
			<section className="section">
				<div className="container">
					<div id="ski-weekend" className="content">
						<div
							style={{
								margin: '1em auto'
							}}
						></div>
						<h3 className="has-text-weight-semibold" id="ski2023">
							2. Bärenherz Golf Charity war ein grossartiger Erfolg
						</h3>

						<>
							<Modal id="gallery-modal" show={show} onHide={handleClose}>
								<Modal.Header closeButton></Modal.Header>
								<Modal.Body>
									<GatsbyImage image={image} />
								</Modal.Body>
							</Modal>
						</>
						<div className="d-flex flex-wrap" style={{ gap: '1em' }}>
							{images.map((media) => {
								const image = getImage(media)
								return (
									<div>
										<div key={media.id} onClick={() => handleShow(image)}>
											<GatsbyImage
												image={image}
												style={{ height: '6em', width: '6em' }}
											/>
										</div>
									</div>
								)
							})}
						</div>
						<br />
						<p>
							Am 05. Mai hiess es in Lipperswil wieder: Start frei für die
							Bärenherzen! Nachdem wir bei der Premiere im vergangenen Jahr noch
							mit Regen zu kämpfen hatten, war dieses Mal strahlender
							Sonnenschein angesagt. Und dieser spiegelte sich auch in den
							Gesichtern der Teilnehmer wider. Nach individueller Vorbereitung –
							Driving Range oder Kaffee/Gipfeli – ging es ab 10 Uhr gut gelaunt
							auf die Runde. Am 6. Loch „musste“ diese jedoch kurz unterbrochen
							werden, denn Sigi Wengler von der Firma Teroxx erläuterte bei
							einem wunderbar kühlen Glas Champagner die Vorzüge seines Tokens.
							Dieser konnte auch direkt gewonnen werden, wenn man entweder ganz
							oder gar nicht erfolgreich am Abschlag war. Den „hole-in-one“
							Preis von Token im Wert von 10‘000 CHF musste unser Freund Sigi
							zwar wieder mit nach Hause nehmen, aber für die Wasserschläge hat
							er genügend Trostpreise verteilt. Auf jeden Fall ein grosser Spass
							für alle Beteiligten.
						</p>
						<p>
							Von da war es dann auch nicht mehr weit zur Halfway-Verpflegung.
							Hier konnten bei einem kühlen Getränk und leckeren Imbiss die
							Erfahrungen der ersten neun Löcher ausgetauscht und die Strategie
							für die weitere Runde zurechtgelegt werden. Inwieweit diese dann
							aufging, zeigte sich allerdings erst am Abend bei der
							Siegerehrung…
						</p>
						<p>
							Auf jeden Fall gab es direkt nach der Runde erst einmal Feines von
							Grill und frisch gezapftes Bier, um die Ergebnisse zu verarbeiten
							und mit den anderen Teilnehmern zu diskutieren. In entspannter
							Atmosphäre haben sich die Teilnehmer ausgetauscht und es wurden
							neue Kontakte geknüpft. Am Abend begrüsste Rainer Mück, der
							Präsident von Bärenherz, die Teilnehmer bei einem Apero auf der
							Terrasse des Clubhauses und stellte den weiteren Programmablauf
							vor. Im Rahmen des wunderbaren Gala Dinner berichtete Rainer Mück
							von seinem Besuch in Strumica und der aktuellen Situation in
							Nordmazedonien. Das Hilfsprojekt von Project HOPE Deutschland e.V.
							welches schon im letzten Jahr unterstützt wurde, ist erfolgreich
							in Skopje abgeschlossen worden und es wird vor Ort und mit
							verschiedenen Besuchen Sorge dafür getragen, dass die
							Unterstützung der letzten Jahre auch weiterhin zeigerichtet
							verwendet wird. Etwas komplexer gestaltet sich die Situation in
							Strumica, wo neben dem uralten Krankenhaus bereits ein Neubau
							steht, dieser aber noch nicht in Betrieb genommen wurde.
							Unabhängig davon fehlt es an der allernötigsten Ausstattung, um
							eine ausreichende gesundheitliche Versorgung für Mutter und Kind
							sicherzustellen. Ziel des Abends war es, hier gezielt zu helfen.{' '}
						</p>
						<p>
							Im Anschluss erläuterte das Gründungsmitglied von Project HOPE
							Deutschland e.V., Arno Bohn, wie die vergangenen 20 Jahre sich
							entwickelt haben und welche nachhaltigen Erfolge in den ärmsten
							Ländern Europas erzielt werden konnte.
						</p>
						<p>
							Nach so vielen Informationen wurde sich erst einmal mit einer
							köstlichen Vorspeise gestärkt, bevor Bärenherz Vorstand Markus
							Schweizer das Prozedere der grossen Tombola erklärte und den
							Losverkauf startete. Die Preise konnten schon im Vorfeld bewundert
							werden und ein Blick auf die Sponsorenliste zeigt, welch
							hochkarätige Unterstützer der guten Sache sich hier mit engagiert
							haben. Entsprechend fleissig wurden während des Hauptgangs Lose
							gekauft.
						</p>
						<p>
							Sportlich wurde es dann ernst und Andy Wenzel, ebenfalls Bärenherz
							Vorstand der ersten Stunde, verkündete die Sieger des
							Golfturniers. Die Ergebnisse waren insgesamt herausragend, aber am
							Ende hatte der Flight mit Arno Bohn, Theo Prümm, Ingo Drexler und
							Alexander Köhler die Nase hauchdünn vorne und durfte den Bärenherz
							Wanderpokal mit der Verpflichtung mit nach Hause nehmen, ihn im
							nächsten Jahr wieder zu verteidigen. Die Token für die 3
							Siegerflights sowie die Sonderwertungen wurden den glücklichen
							Siegern von Sigi Wengler von der Firma Teroxx überreicht.
						</p>
						<p>
							Danach gab es nur noch Gewinner: Zunächst bei der Ziehung der
							zahlreichen tollen Preise, die für viel Freude bei den jeweiligen
							Gewinnern sorgten und danach bei den Menschen in Strumica, auch
							wenn diese noch nichts von Ihrem Glück wussten. So konnte Rainer
							Mück zum Ende der gelungenen Veranstaltung verkünden, dass eine
							Spendensumme von 16‘615 CHF erreicht wurde und somit zusammen mit
							dem Bärenherz Winter Charity Event über 25‘000 CHF an Project HOPE
							Deutschland e.V. für das Krankenhaus in Strumica übergeben werden
							können. Ein fantastischer Erfolg für alle Beteiligten und ein
							passender Abschluss eines wunderbaren Tages. Wir freuen uns alle
							schon auf die dritte Ausgabe des Turniers im nächsten Jahr, das am
							24. Mai 2024 wieder im Golfclub Lipperswil stattfinden wird.
						</p>

						<div style={{ marginTop: '1.5em' }}>
							<br />
							<div className="partners-wide">
								<Partners2023 />
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
