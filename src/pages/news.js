import React from 'react'

import '../styles/newsletter.css'
import Layout from '../components/Layout'

import header from '../img/postheader.png'
import liebe from '../img/newsletter/Liebe _Baerenherzen.png'
import sign from '../img/newsletter/Euer Rainer.png'
import strumica from '../img/newsletter/Strumica-1.jpeg'
import strumica2 from '../img/newsletter/Strumica-2.jpeg'
import strumica3 from '../img/newsletter/Strumica-5.jpeg'
import skigruppe from '../img/newsletter/Ski-Gruppe.jpg'
import werkstatt from '../img/newsletter/Werkstatt.jpeg'
import mittags from '../img/newsletter/Mittagstisch.jpg'
import legenden from '../img/newsletter/Legenden.jpg'
import piste from '../img/newsletter/auf der Piste.jpeg'
import sieger from '../img/newsletter/Sieger.jpeg'
import markus from '../img/newsletter/Markus.avif'
import rainer from '../img/newsletter/Rainer.jpeg'

const News = () => (
	<Layout>
		<div style={{ width: '75%', margin: '0 auto' }}>
			<div className="newsletter-logos">
				<img src={header} />
			</div>
			<br />
			<br />
			<div className="newsletter-sign">
				<img src={liebe} />
			</div>
			<br />
			<br />

			<p>
				viel ist passiert in den letzten Wochen und Monaten bei Bärenherz und
				ein paar Eindrücke möchten wir Euch gerne im vorliegenden Newsletter
				weitergeben.
			</p>
			<br />

			<p>
				Nachdem der Winter in dieser Saison doch ziemlich überschaubar war,
				hatte dies auch Auswirkungen auf unseren ersten Bärenherz Skievent.
				Zunächst mussten wir den Termin von Dezember 2022 auf Anfang April 2023
				verschieben. Durch den mangelnden Schnee hat es vielen potenziellen
				Teilnehmern und Interessenten die Lust genommen, kurz vor Saisonende
				nochmals in den Schnee zu gehen. Aber wir haben den Event am Flumserberg
				durchgezogen und es war ein tolles Erlebnis für alle Beteiligten, dass
				wirklich nach einer Wiederholung im nächsten Jahr verlangt. Unser
				Vorstandsmitglied Andy Wenzel, der für die Durchführung des Events
				verantwortlich war, schildert Euch in seinem Beitrag die Highlights.
			</p>
			<br />

			<p>
				Im Februar habe ich mich wieder auf den Weg nach Nordmazedonien gemacht,
				um zu sehen, was aus unserer Unterstützung geworden ist und wie sich das
				neue Projekt für 2023 darstellt. Es war emotional keine einfache Reise,
				da neben dem Leid und den katastrophalen medizinischen Zuständen auch
				die Situation seitens der Verantwortlichen im Land nicht
				zufriedenstellend war. In meinem Beitrag möchte ich Euch einen kleinen
				Einblick in die Situation geben und werde dies auch auf unserem nächsten
				Event persönlich im Detail erläutern.
			</p>
			<br />

			<p>
				Da komme ich schon zum nächsten Punkt: Am 05. Mai 2023 findet die 2.
				Ausgabe unseres Golf Charity Turniers in Lipperswil statt. Motiviert
				durch den tollen Erfolg aus dem Vorjahr konnten wir dieses Jahr vielen
				namhafte Sponsoren gewinnen, die unser Turnier in der Tombola mit
				phantastischen Preisen unterstützen. Wenn jetzt auch noch das Wetter
				mitspielt, steht einem Super-Event nichts im Wege. Daher unsere Bitte:
				Meldet Euch an, wenn Ihr es nicht schon getan habt. Es wird sicher ein
				unvergesslicher Tag und Ihr helft Menschen, die es wirklich nötig
				brauchen.
			</p>
			<br />

			<p>
				Mit Markus Schweizer haben wir bei uns im Vorstand einen erfahrenen
				Finanzexperten, der sich massgeblich darum kümmert, dass bei uns die
				Zahlen passen. Aber das ist nur ein kleiner Teil. Markus ist ein
				wunderbarer Mensch, der sich mit grossem Engagement in allen Bereichen
				phantastisch einbringt. Ohne ihn wäre das alles so nicht möglich. Was
				ihn motiviert, sich bei Bärenherz zu engagieren, lest Ihr in seinem
				Beitrag.
			</p>
			<br />

			<p>
				Jetzt bleibt mir nur noch, Euch eine gute Zeit zu wünschen. Bleibt
				gesund und uns gewogen. Ich freue mich auf ein Wiedersehen am 05. Mai in
				Lipperswil
			</p>
			<br />

			<p>Mit bärenherzlichen Grüssen,</p>
			<div className="newsletter-card-two-elements">
				<img src={sign} />
				<img src={rainer} />
			</div>

			<div className="newsletter-hr"> </div>

			<div className="newsletter-logos">
				<div className="newsletter-imgs">
					<img src={strumica} />
				</div>
				<br />
				<br />
				<h4 id="golf" style={{ fontSize: '2em', fontWeight: 'bold' }}>
					Besuch in Nordmazedonien
				</h4>
				<br />
				<p>
					Im vergangenen Jahr hat der Vorstand von Bärenherz beschlossen, auch
					2023 wieder das Projekt PeriMAC von Project HOPE e.V. zu unterstützen.
					Bereits im letzten Jahr haben wir, auf Grund der positiven Erfahrungen
					und dem persönlichen Engagement in den vergangenen Jahren, unsere
					Einnahmen dafür verwendet, die Ausbildung des Personals vor Ort weiter
					voranzutreiben, um sicherzustellen, dass die bisherige Unterstützung
					in Form von Ausrüstung und Fahrzeugen auch zukünftig zielgerichtet
					genutzt wird.
				</p>
				<br />
				<p>
					Aus diesem Grund bin ich zusammen mit den Projektmanagern von Project
					HOPE e.V. vom 12. bis 14. Februar nach Nordmazedonien geflogen, um mir
					persönlich ein Bild von der Situation vor Ort zu machen. Insbesondere
					wollte ich die Zustände in der Klinik in Strumica begutachten, die
					aktuell unterstützt werden soll.
				</p>
				<br />
				<p>
					Meine Eindrücke waren durchaus zwiespältig aber auch sehr wichtig für
					uns. Einerseits habe ich feststellen können, dass eine grosse Anzahl
					von Pflegepersonal an den übergebenen Geräten geschult wurde und diese
					sich weiter im wichtigen Einsatz befinden. Hier handelt es sich um die
					Pädiatristische Uniklinik sowie die Frauenklinik Mother Theresia,
					beide in Skopje. Die beiden im Frühjahr 2022 übergebenen
					Rettungswagen, die eigentlich dafür sorgen sollen, dass Frauen in
					ländlicheren Regionen schnell die nötige Hilfe zu Teil wird, waren
					leider nicht wie gewünscht im Einsatz. Dies lag einerseits an einer
					notwendigen Umbaumassnahme im Fahrzeug, die sehr lange Zeit in
					Anspruch nahm, andererseits aber auch an Einsätzen, die lediglich im
					Stadtgebiet von Skopje durchgeführt werden. Hier wurde mir versichert,
					dass die Einsätze zukünftig in dem vorher festgelegten Umfang
					durchgeführt werden und das auch so dokumentiert wird, dass es von uns
					entsprechend nachprüfbar ist.
				</p>
				<div className="newsletter-imgs">
					<img src={strumica2} />
				</div>
				<br />
				<p>
					Sehr schwierig gestaltet sich die Situation in Strumica. Die Zustände
					in der Klinik selbst sind verheerend. Verschlissene
					Untersuchungsstühle, ungepflegte Geburtsbetten, fehlende
					Wärmebettchen, defekte Medizingeräte. Kein Wunder, dass immer mehr
					Schwangere diese Klinik meiden und lange Wege zu anderen Kliniken,
					hohe Kosten und zusätzliche Risiken in Kauf nehmen. Allerdings steht
					neben der alten Klinik ein Neubau, der bei meiner Besichtigung den
					Eindruck macht, durchaus westeuropäischen Standards zu entsprechen.
					Leider hat ein Umzug in diesen Neubau bisher nicht stattgefunden und
					ein Termin konnte mir auch nicht genannt werden. Ausserdem sind
					keinerlei Investitionen in neue Ausstattungen mehr vorgesehen, da das
					Budget inzwischen aufgebraucht ist.
				</p>
				<div className="newsletter-imgs">
					<img src={strumica3} />
				</div>
				<br />
				<p>
					Diese Situation ist eigentlich nicht akzeptabel und wurde von den
					Kollegen von Project HOPE e.V. auch klar bei den Vertretern des
					Gesundheitsministeriums adressiert. Nur wenn auch die Verantwortlichen
					in Nordmazedonien ihren Teil dazu beitragen, sollte weiterhin eine
					Hilfe durch uns erfolgen. Was aber das Schlimmste ist: Die Situation
					der Menschen! Die Bilder der Menschen, die versuchen, in der alten
					Klinik Hilfe zu bekommen und die Zustände insgesamt sind erschütternd.
					Hier müssen wir helfen. Was nutzt auch ein Klinik Neubau, wenn die
					Ausstattung fehlt. Aber es gilt noch viel mehr als in der
					Vergangenheit sicherzustellen, dass alle Parteien ihren Teil dazu
					beitragen. Wir bei Bärenherz wollen dort helfen, wo es dringend
					notwendig ist. Das ist in Strumica zweifellos der Fall. Aber wir
					müssen und werden auch sicherstellen, dass die Hilfe zielgerichtet ist
					und bei den Menschen ankommt. Weiterhin gilt es, allen
					Verantwortlichen vor Ort klarzumachen, dass dies keine Einbahnstrasse
					ist und auch sie ihren Teil beitragen müssen. Um dies sicherzustellen,
					werde ich auch in den nächsten Monaten wieder vor Ort sein, um mir ein
					Bild zu machen, was mit unserer Unterstützung passiert und so weit es
					in meiner Macht steht dafür zu sorgen, dass diese zielgerichtet
					eingesetzt wird.
				</p>
				<br />
				<p>Rainer Mück</p>
			</div>
			<div className="newsletter-hr"> </div>

			<div className="d-flex justify-content-between" style={{ width: '93%' }}>
				<div className="newsletter-imgs">
					<img src={skigruppe} />
				</div>
			</div>
			<br />
			<h4 style={{ fontSize: '2em', fontWeight: 'bold' }}>
				Bericht zum 1. BÄRENHERZ-CHARITY-SKITAG 2023
			</h4>
			<p>Vom 31. März und 1. April 2023</p>
			<br />
			<p>
				Der 1. Bärenherz-Charity-Skitag konnte erfolgreich und unfallfrei
				durchgeführt werden. Ein toller Skitag mit Marie-Theres «Maite» Nadig
				und Urs Kälin hinterliess bei allen Teilnehmenden bleibende Erinnerungen
				und zum Abschluss des Tages konnten wir mit der 1. Bärenherz Ski-Trophy
				in Form eines Gleichmässigkeits-Rennens den Bärenherz-Wanderpreis an den
				Sieger Martin mit nur 0.07 Sekunden Zeitdifferenz übergeben.
			</p>
			<br />
			{/* !# picture */}
			<p>
				{' '}
				Während der Anreise am Freitagabend ins Hotel Neu-Schönstatt zogen noch
				stürmische Winde mit starkem Regen über den Walensee. Beim Apéro und dem
				anschliessenden Abendessen im Hotel entstand sofort eine
				freundschaftliche Stimmung mit regem Austausch unter allen
				Teilnehmenden. Unser Präsident Rainer Mück informierte während des
				Abendessens über die Aktivitäten des Vereins in Nordmazedonien zur
				Bekämpfung der Sterblichkeit von Frühgeborenen, nachdem er sich einige
				Wochen vorher selbst ein Bild vor Ort gemacht hatte und bedankte sich
				bei allen Anwesenden für Ihre Unterstützung.
			</p>
			<br />
			<p>
				Am Morgen des 1. April hat sich das Wetter glücklicherweise beruhigt und
				wir konnten bereits oben auf dem Tannenboden bei leichtem Schneefall
				eine weisse Schneelandschaft am Flumserberg betrachten. In diesem
				Zusammenhang gilt den Bergbahnen Flumserberg ein herzliches Dankeschön,
				die uns die Liftkarten kostenfrei zur Verfügung gestellt haben.
			</p>
			<br />
			<div className="newsletter-imgs">
				<img src={werkstatt} />
			</div>
			<p>
				Im Intersport-Fachgeschäft konnten alle Teilnehmenden Skier unseres
				Partners Stöckli anpassen und in zwei Gruppen ging es dann begleitet von
				«Maite» Nadig und Urs Kälin auf die Piste. Unter deren fachmännischer
				Anweisung erhielten die Teilnehmer tolle Tipps, die es auch gleich
				umzusetzen galt. Carving und kontrolliertes Skifahren waren die Themen
				und der Spass beim gemeinsamen Skifahren war bei allen Teilnehmenden
				spürbar.
			</p>
			<br />
			<div className="newsletter-imgs">
				<img src={legenden} />
			</div>
			<p>
				Gegen Mittag ging es in die Gruebhütte und wir durften ein vorzügliches
				Mittagessen, serviert vom äusserst freundlichen Wirtepaar Rosi &
				Christoph und ihrem Team geniessen. Auch während des Essens wurden die
				unterschiedlichen Techniken im modernen Skilauf diskutiert und die
				lustigen Weltcup-Geschichten aus vergangenen Zeiten sorgten bei uns
				allen für viel Erheiterung.
			</p>
			<br />
			<div className="newsletter-imgs">
				<img src={mittags} />
			</div>
			<p>
				Am Nachmittag ging es dann wieder auf die Pisten des Flumserbergs und
				während sich «Maite» dankenswerterweise zur Kurssetzung der
				Bärenherz-Ski-Trophy auf den Weg machte, übernahm Andy Wenzel ihre
				Gruppe. Aufgrund des Neuschnees haben wir während der Besichtigung des
				Laufes noch den Schnee aus der Ideallinie gerutscht und uns
				anschliessend zum Start begeben. Alle TeilnehmerInnen haben mit grossem
				Spass ihre zwei Durchgänge bewältigt und wir konnten mit Freude
				festhalten, dass alle fast innerhalb einer 1 Sekunde Zeitdifferenz
				geblieben sind.
			</p>
			<br />
			<div className="newsletter-imgs">
				<img src={piste} />
			</div>
			<p>
				Die Begeisterung am Skifahren hat uns dann auch nach dem Rennen zu
				weiteren Skiabfahrten animiert und gegen 16Uhr haben wir uns dann zur
				Abschiedsfeier im Restaurant Colors bei der Talstation des BergJets
				getroffen.
			</p>
			<br />
			<p>
				Rainer Mück hat sich bei den Anwesenden für Ihre tolle Unterstützung und
				einen phantastischen Skitag bedankt. Mit grosser Freude durften wir im
				Rahmen einer kleinen Siegerehrung zum ersten Mal den Wanderpreis
				übergeben. Die Bären-Holzskulptur mit Skiern von Paul Widmer ging an
				Martin aus Konstanz, den überragenden Sieger der 1. Bärenherz-Ski-Trophy
				mit nur 0.07 Sekunden Zeitdifferenz.
			</p>
			<br />
			<div className="newsletter-imgs">
				<img src={sieger} />
			</div>
			<p>
				Wir freuen uns schon auf die 2. Austragung des Bärenherz
				Charity-Skitages 2024 und werden das exakte Datum schnellstmöglich
				kommunizieren.
			</p>
			<br />
			<p>
				Nochmals herzlichen Dank an alle Unterstützer, an unsere grossartigen
				Coaches und vor allem an unsere Teilnehmenden.
			</p>
			<br />
			<p>Andy Wenzel</p>
			<br />

			<br />

			<br />
			<br />

			<div style={{ background: '#EEEAE4' }}>
				<div style={{ width: '75%', margin: '0 auto' }}>
					<br />

					<div>
						<br />
						<h4 style={{ fontSize: '2em', fontWeight: 'bold' }}>
							Meine Vision für Bärenherz
						</h4>
						<p>
							Als mir Rainer Mück im Herbst 2021 von seinen Plänen erzählte, in
							der Schweiz den Verein Bärenherz zu gründen, war ich von der Idee
							sofort begeistert und sicherte ihm meine Unterstützung zu. Der
							Gesellschaft etwas zurückzugeben, wenn es einem materiell und
							gesundheitlich gut geht, ist für mich eine Selbstverständlichkeit.
							Ich war schon seit längerem auf der Suche nach einer geeigneten
							Initiative oder Organisation, wo ich mich persönlich engagieren
							kann und Bärenherz war dann genau das Richtige für mich.
						</p>
						<p>
							Ich bin seit fast 30 Jahren in der internationalen
							Unternehmensberatung bei EY tätig und schätze den täglichen
							Austausch mit Menschen aus allen möglichen Branchen und mit
							unterschiedlichstem kulturellem Background. Privat lebe ich mit
							meiner Freundin zusammen, habe zwei erwachsene Söhne und eine
							neunjährige Tochter, welche mich auf Trab hält. Nebst dem Golf
							spielen und Skifahren bin ich ein passionierter Weinliebhaber und
							wenn ich einmal wirklich Ruhe haben will, gehe ich an einem
							stillen Bach Fliegenfischen.
						</p>
						<p>
							Meine Vision für Bärenherz ist, dass wir Gutes tun und dabei auch
							Spass haben, um möglichst viele zu begeistern, bei uns
							mitzumachen. Wenn uns das gelingt, können wir einen spürbaren
							Beitrag leisten, dass es denen ein bisschen besser geht, die auf
							unsere Hilfe am meisten angewiesen sind.
						</p>
						<div className="newsletter-card-two-elements">
							<img src={markus} />
							<div>
								<p>Euer</p>
								<p>Markus Schweizer</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default News
