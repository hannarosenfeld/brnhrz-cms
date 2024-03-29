import React from 'react'
import Layout from '../../components/Layout'

import GalleryNew from '../../components/GalleryNew'

import sponsorsBanner from '../../img/gallery2023/Sponsoren.png'

const title = '﻿Bericht zum 1. BÄRENHERZ-CHARITY-SKITAG 2023'
const subtitle = 'Vom 31. März und 1. April 2023'
const text = (
	<>
		<p>Liebe Freunde von Bärenherz,</p>
		<p>
			Der 1. Bärenherz-Charity-Skitag konnte erfolgreich und unfallfrei
			durchgeführt werden. Ein toller Skitag mit Marie-Theres «Maite» Nadig und
			Urs Kälin hinterliess bei allen Teilnehmenden bleibende Erinnerungen und
			zum Abschluss des Tages konnten wir mit der 1. Bärenherz Ski-Trophy in
			Form eines Gleichmässigkeits-Rennens den Bärenherz-Wanderpreis an den
			Sieger Martin mit nur 0.07 Sekunden Zeitdifferenz übergeben.{' '}
		</p>
		<p>
			Während der Anreise am Freitagabend ins Hotel Neu-Schönstatt zogen noch
			stürmische Winde mit starkem Regen über den Walensee. Beim Apéro und dem
			anschliessenden Abendessen im Hotel entstand sofort eine freundschaftliche
			Stimmung mit regem Austausch unter allen Teilnehmenden. Unser Präsident
			Rainer Mück informierte während des Abendessens über die Aktivitäten des
			Vereins in Nordmazedonien zur Bekämpfung der Sterblichkeit von
			Frühgeborenen, nachdem er sich einige Wochen vorher selbst ein Bild vor
			Ort gemacht hatte und bedankte sich bei allen Anwesenden für Ihre
			Unterstützung. Am Morgen des 1. April hat sich das Wetter glücklicherweise
			beruhigt und wir konnten bereits oben auf dem Tannenboden bei leichtem
			Schneefall eine weisse Schneelandschaft am Flumserberg betrachten. In
			diesem Zusammenhang gilt den Bergbahnen Flumserberg ein herzliches
			Dankeschön, die uns die Liftkarten kostenfrei zur Verfügung gestellt
			haben.
		</p>
		<p>
			Im Intersport-Fachgeschäft konnten alle Teilnehmenden Skier unseres
			Partners Stöckli anpassen und in zwei Gruppen ging es dann begleitet von
			«Maite» Nadig und Urs Kälin auf die Piste. Unter deren fachmännischer
			Anweisung erhielten die Teilnehmer tolle Tipps, die es auch gleich
			umzusetzen galt. Carving und kontrolliertes Skifahren waren die Themen und
			der Spass beim gemeinsamen Skifahren war bei allen Teilnehmenden spürbar.
			Gegen Mittag ging es in die Gruebhütte und wir durften ein vorzügliches
			Mittagessen, serviert vom äusserst freundlichen Wirtepaar Rosi & Christoph
			und ihrem Team geniessen. Auch während des Essens wurden die
			unterschiedlichen Techniken im modernen Skilauf diskutiert und die
			lustigen Weltcup-Geschichten aus vergangenen Zeiten sorgten bei uns allen
			für viel Erheiterung.
		</p>
		<p>
			Am Nachmittag ging es dann wieder auf die Pisten des Flumserbergs und
			während sich «Maite» dankenswerterweise zur Kurssetzung der
			Bärenherz-Ski-Trophy auf den Weg machte, übernahm Andy Wenzel ihre Gruppe.
			Aufgrund des Neuschnees haben wir während der Besichtigung des Laufes noch
			den Schnee aus der Ideallinie gerutscht und uns anschliessend zum Start
			begeben. Alle TeilnehmerInnen haben mit grossem Spass ihre zwei Durchgänge
			bewältigt und wir konnten mit Freude festhalten, dass alle fast innerhalb
			einer 1 Sekunde Zeitdifferenz geblieben sind. Die Begeisterung am
			Skifahren hat uns dann auch nach dem Rennen zu weiteren Skiabfahrten
			animiert und gegen 16Uhr haben wir uns dann zur Abschiedsfeier im
			Restaurant Colors bei der Talstation des BergJets getroffen.
		</p>
		<p>
			Rainer Mück hat sich bei den Anwesenden für Ihre tolle Unterstützung und
			einen phantastischen Skitag bedankt. Mit grosser Freude durften wir im
			Rahmen einer kleinen Siegerehrung zum ersten Mal den Wanderpreis
			übergeben. Die Bären-Holzskulptur mit Skiern von Paul Widmer ging an
			Martin aus Konstanz, den überragenden Sieger der 1. Bärenherz-Ski-Trophy
			mit nur 0.07 Sekunden Zeitdifferenz.
		</p>
		<p>
			Wir freuen uns schon auf die 2. Austragung des Bärenherz Charity-Skitages
			2024 und werden das exakte Datum schnellstmöglich kommunizieren.
		</p>
		<p>
			Nochmals herzlichen Dank an alle Unterstützer, an unsere grossartigen
			Coaches und vor allem an unsere Teilnehmenden.
		</p>
		<p>Euer</p>
		<p>Andy Wenzel</p>
	</>
)

export default function CharitySkiTag2023() {
	return (
		<Layout>
			<div className="container">
				<div id="golf-turnier" className="content">
					<div
						style={{
							margin: '4em auto'
						}}
					>
						<GalleryNew />

						<h3 className="has-text-weight-semibold">{title}</h3>
						<h3
							className="has-text-weight-semibold"
							style={{
								marginTop: '0'
							}}
						>
							{subtitle}
						</h3>

						<div
							className="mt-3 mb-5 d-flex"
							style={{ gap: '3em', margin: '0 auto' }}
						></div>
						{text}
						<div style={{ marginTop: '1.5em' }}>
							<h3>Unsere Partner:</h3>
							<div>
								<img src={sponsorsBanner} alt="sponsors of the event" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}
