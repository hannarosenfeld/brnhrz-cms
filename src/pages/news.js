import React from 'react'
import { Link } from 'gatsby'

import '../styles/newsletter.css'
import Layout from '../components/Layout'

import header from '../img/postheader.png'
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

import so from '../img/s.jpg'
import peri1 from '../img/peri1.jpeg'
import peri2 from '../img/peri2.jpg'
import ski from '../img/ski.png'
import andrea from '../img/Andrea_.jpg'
import pdf from '../../static/pdf/Anmeldung-Charity-Ski-Tag-2023.pdf'
import pdfanm from '../../static/pdf/Einladung-Charity-Ski-Tag-2023.pdf'
import sept from '../img/Baerenherz_Scheck.jpg'

const News = () => (
	<Layout>
		<div style={{ width: '75%', margin: '0 auto' }}>
			<div className="newsletter-logos">
				<img src={header} />
			</div>
			<br />
			<br />

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

			<div style={{ background: '#EEEAE4' }}>
				<div style={{ width: '75%', margin: '0 auto' }}>
					<br />

					<div>
						<br />
						<h4 style={{ fontSize: '2em', fontWeight: 'bold' }}>
							Meine Vision für Bärenherz
						</h4>
						<br />
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

			<div>
				<br />
				<br />
				<img src={sept} />
				<br />
				<br />
				<h4 id="golf" style={{ fontSize: '2em', fontWeight: 'bold' }}>
					Übergabe Golf Charity Erlöse an Project HOPE e.V.
				</h4>
				<br />
				<p>
					Im Rahmen des Project HOPE Charity Classic Golfturniers am 08.
					September in Beuerberg haben die Vorstände von Bärenherz Andreas
					Wenzel, Rainer Mück und Markus Schweizer den Scheck mit den Einnahmen
					aus dem ersten Bärenherz Charity Turnier vom 08. Mai 2022 in Höhe von
					23‘163,50 CHF an Sabine Busch und Achim Eckert von Projekt HOPE
					übergeben. Damit soll sichergestellt werden, dass es bei dem Projekt
					PeriMAC in Nordmazedonien nicht nur bei der Bereitstellung von
					Krankenwagen und medizinischer Ausrüstung bleibt, sondern auch die
					Schulung des Personals, der weitere Aufbau der Verwaltung und Logistik
					weiterhin gewährleistet werden kann. Wir haben uns bei unserem Besuch
					in Skopje im April 2022 von der Situation vor Ort überzeugt und es ist
					uns ein grosses Anliegen, dass die bisher erzielten phantastischen
					Hilfsleistungen auch weiterhin nachhaltig wirken. Deshalb haben wir
					uns bei Bärenherz schon im letzten Jahr entschieden, dieses Projekt
					mit dem Wissen zu unterstützen, dass jeder Franken auch wirklich
					direkt vor Ort ankommt. In diesem Zusammenhang unser herzliches
					Dankeschön nicht nur an alle, die zu unserem tollen Spendenergebnis
					beigetragen haben, sondern auch an die vielen Helfer von Project HOPE,
					die sicherstellen, dass das Geld auch wirklich seiner Verwendung
					zugeführt wird.
				</p>
				<br />
				<p>
					Das Bärenherz Charity Golfturnier wird es auch im nächsten Jahr wieder
					geben: AM 05. Mai 2023 ist es in Lipperswil wieder so weit. Details
					folgen rechtzeitig. Wir freuen uns jetzt erst einmal auf unseren
					Skievent vom 09. – 11. Dezember 2022 am Flumserberg, dessen Erlöse
					ebenfalls das PeriMAC Projekt in Nordmazedonien unterstützen werden.
				</p>
			</div>
			<br />
			<br />
			<div>
				<img src={so} />
				<br />
				<br />
				<h4 id="golf" style={{ fontSize: '2em', fontWeight: 'bold' }}>
					Bärenherz Charity Golfturnier 2022 in Lipperswil
				</h4>
				<p>von Rainer Mück</p>
				<br />
				Am 06. Mai 2022 war es so weit: Das erste Bärenherz Charity Golfturnier
				fand in Lipperswil statt. Allein die Organisation dieses allerersten
				Bärenherz Events war schon ein Abenteuer. Gibt es genug Sponsoren, die
				uns unterstützen? Kommen genügend Teilnehmer? Passt das Wetter?
				<br />
				<br />
				Zumindest die ersten beiden Fragen lassen sich sehr schnell beantworten:
				Zahlreiche namhafte Unternehmen haben uns frühzeitig ihre Unterstützung
				zugesagt, so dass wir sowohl eine tolle Verpflegung über den ganzen Tag
				gewährleisten konnten – dies natürlich in erster Linie durch die
				exzellente Küche des Golfclubs Lipperswil – als auch hochwertige Preise
				für die Tombola im Rahmen der Abendgala zur Verfügung hatten. Die Liste
				all unserer Partner an diesem tollen Event findet sich auf unserer
				Homepage. An dieser Stelle nochmals ganz herzlichen Dank, ohne Euch wäre
				das nicht möglich gewesen!
				<br />
				<br />
				43 Golfer haben unsere Erwartungen voll erfüllt und so freuten wir uns
				schon den ganzen Morgen, die Teilnehmer begrüssen zu dürfen. Einige
				kannten wir aus dem persönlichen Umfeld, aber es gab auch viele neue
				Gesichter, die wir kennenlernen durften. Die Freude war gross und die
				Spannung stieg, denn da gab es ja noch die dritte offene Frage, das
				Wetter…
				<br />
				<br />
				Das Unwetter am Vorabend haben wir noch sportlich genommen, denn am
				Turniertag ist sicher alles vorbei. Ganz so war es dann doch nicht.
				Während unsere Vorstände Andrea Degen und Markus Schweizer die Gäste im
				trockenen Clubhaus empfingen und mit zuversichtlichen Worten ermunterten
				(„Der Regen hört sicher gleich auf“) stand auch Rainer Mück im trockenen
				Haus am ersten Abschlag, um den Golfern einen Begrüssungs Champagner zu
				reichen und sie mit den besten Wünschen auf die Runde zu schicken. Bei
				so viel Optimismus hatte dann auch der Wettergott ein Einsehen und nach
				gut einer Stunde war der Regen vorbei und es entwickelte sich ein
				schöner Tag auf einer noch schöneren Golfanlage.
				<br />
				<br />
				Bereits zur Halfway Verpflegung konnten wir erleichtert feststellen: Die
				Stimmung bei allen Beteiligten ist sehr gut! Also gab es erst einmal
				eine verdiente Stärkung und nach Ghackets mit Hörnli, Wurst-Käse-Salat
				oder einem feinen Sandwich und dem einen oder anderen Glas Bier wurde
				die 2. Hälfte des Platzes in Angriff genommen. Hier strahlte dann nicht
				nur die Sonne, sondern auch die Teilnehmer hatten sichtlich Spass. So
				konnten wir gut gelaunte Golfer nach der Runde zu einem Grillimbiss
				begrüssen. Ian Gibbons, der Clubmanager des Golfclub Lipperswil, liess
				es sich nicht nehmen, leckere Bratwürste und Hamburger für die hungrigen
				Golfer persönlich zuzubereiten. Hier wurden die Ergebnisse ausgiebig
				diskutiert und es gab das eine oder andere überraschende freudige
				Wiedersehen.
				<br />
				<br />
				Nach einer kurzen Erfrischungspause begrüsste Rainer Mück die Teilnehmer
				offiziell auf der Clubterrasse, um zunächst einmal den Hintergrund von
				Bärenherz zu erklären und das spannende Abendprogramm vorzustellen. Dann
				ging es los mit dem köstlichen Gala Dinner, welches von verschiedenen
				weiteren Programmpunkten unterbrochen wurde.
				<br />
				<br />
				Zunächst stellte Andrea Degen zusammen mit dem Projektmanager von
				Project HOPE e.V., Achim Eckert, das Projekt PeriMAC im Detail vor.
				Vieles wurde schon erreicht in den vergangenen Jahren, was eine
				deutliche Reduzierung der Sterblichkeitsrate von Frühchen zur Folge hat.
				Aber um die erreichten Ergebnisse nachhaltig zu sichern, bedarf es
				Training der involvierten Ärzte, Pflegepersonen und
				Krankentransportfahrer. Der Finanzierung dieser Trainings sollte auch
				der heutige Abend mit der grossen Tombola und Versteigerung dienen.
				<br />
				<br />
				Und es wurden viele Lose gekauft, um die gute Sache zu unterstützen.
				Viele freuten sich über tolle Gewinne: Hotelgutscheine, Greenfees,
				Parfum und viele weitere Preise fanden glückliche Gewinner. Gewinner gab
				es natürlich auch beim Golf: Andreas Bühlmann, Erwin Höfliger und Peter
				Mastelic konnten sich als erste Gewinner auf dem Wanderpokal - unser
				Bärenherz – eintragen. Aber ihnen war auch zu diesem Zeitpunkt schon
				bewusst, die Titelverteidigung im nächsten Jahr wird nicht einfach
				werden!
				<br />
				<br />
				Zu guter Letzt wurden noch zwei ganz besondere Preise für den guten
				Zweck versteigert. Zunächst fand eine Flasche Magnum Rotwein „Fore“
				einen neuen Besitzer. Dieser Wein ist eine Spezialabfüllung für
				ambitionierte Golfer und Weintrinker und hat damit hier natürlich einen
				passenden Besitzer gefunden. Danach kam ein Bild der schweizer
				Künstlerin Valentyna Protsak zur Versteigerung. Die Darstellung eines
				Sportwagens vor der Kulisse von Monte Carlo wird beim neuen Besitzer
				sicherlich einen Ehrenplatz bekommen.
				<br />
				<br />
				Anschliessend ging des für das Bärenherz Team ans Zählen. Neben den
				Einnahmen aus Versteigerung und Tombola gab es weitere grosszügige
				Spenden im Laufe des Tages, die den einen oder anderen von uns schon vor
				Rührung und Begeisterung kurzfristig aus der Bahn geworfen haben. So
				konnten wir schliesslich mit 23‘163,50 CHF ein Ergebnis vermelden, mit
				dem wirklich die kühnsten Optimisten nicht gerechnet hatten.
				Entsprechend gross war nicht nur die Begeisterung bei uns Bärenherzen,
				sondern auch bei Sabine Busch und Achim Eckert von Project HOPE e.V.,
				die mit diesem Betrag weitere Trainings in Nordmazedonien finanzieren
				können.
				<br />
				<br />
				Mit einem köstlichen Dessert wurde dieser wunderbare Tag beschlossen,
				der viele glückliche und dankbare Bärenherzen zurücklies. Aber auch die
				Teilnehmer zeigten sich begeistert von der tollen Kombination aus Spass
				und Wohltätigkeit. Ein Start für die Bärenherz Aktivitäten, wie er
				besser hätte nicht sein können. Die 2. Ausgabe des Charity Golfturniers
				ist für den 05. Mai 2023 in Lipperswil geplant und wir freuen uns schon
				heute auf viele bekannte und neue Gesichter und hoffentlich auch einem
				ähnlichen Ergebnis wie bei diesem phantastischen Start.
				<br />
				<br />
				<Link to="/events#golf-turnier">Bilder des Golfturnieres ansehen</Link>
			</div>

			<br />
			<br />

			<div>
				<div>
					<div
						className="d-flex justify-content-between"
						style={{ width: '93%' }}
					>
						<img src={peri1} />
						<img src={peri2} />
					</div>
					<br />
					<h4 style={{ fontSize: '2em', fontWeight: 'bold' }}>
						PeriMAC – das erste Projekt
					</h4>
					<p>von Rainer Mück</p>
					<br />
					Es liegen aufregende Zeiten hinter uns. Nach der Bärenherz-Gründung im
					Juli 2021 hat der Vorstand in seiner Sitzung am 19. Oktober 2021
					beschlossen, die Einnahmen des Jahres 2022 – sowohl aus den geplanten
					Aktivitäten als auch aus Spenden – dem Projekt PeriMAC von Project
					HOPE Deutschland e.V. zugute kommen zu lassen.
					<br />
					Das wesentliche Ziel von Bärenherz ist es, da zu helfen, wo die Hilfe
					wirklich gebraucht wird und auch ankommt. Bei Bärenherz haben wir uns
					von Anfang an entschieden, unsere Verwaltungskosten so gering wie
					möglich zu halten, im Idealfall ganz zu vermeiden bzw. aus den
					Mitgliedsbeiträgen oder privat zu bezahlen. Natürlich fallen in
					grossen Organisationen auch Verwaltungskosten an, das liegt in der
					Natur der Sache. Aber uns ist es einfach wichtig, dass unsere Hilfe so
					direkt wie möglich bei den Betroffenen ankommt.
					<br />
					Nachdem unser Präsident Rainer Mück seit über 20 Jahren die
					Organisation Project Hope Deutschland e.V. aktiv unterstützt, lag es
					nah, bei deren Projekten noch genauer hinzusehen, ob hier nicht auch
					durch Bärenherz Hilfe geleistet werden kann. Denn eines war von Anfang
					an klar: Ein eigenes Projekt in der Kürze der Zeit auf die Beine zu
					stellen war einfach nicht realistisch.
					<br />
					Nach verschiedenen Projekten in Osteuropa (Ost-Ungarn, Rumänien,
					Republik Moldau), die alle das Ziel hatten, die gesundheitliche
					Versorgung von Mutter und Kind nachhaltig zu verbessern, wurde mit
					diesem Anspruch im Jahr 2016 auch das Project PeriMAC in
					Nord-Mazedonien gestartet. PeriMAC steht für Perinatal Macedonia und
					soll eine bessere Gesundheitsvorsorge „rund um die Geburt“ in
					Nordmazedonien sicherstellen. In der 1. Phase von 2016 bis 2019 wurde
					in der Hauptstadt Skopje gestartet. Hand in Hand mit dem
					Gesundheitsministerium, Klinikdirektoren, Ärzten und Pflegepersonal
					hat es Project HOPE Deutschland e.V. geschafft, die
					Säuglingssterblichkeit in zwei Krankenhäusern drastisch zu reduzieren
					und sie als „Centers of Excellence“ (Referenzkliniken und
					Trainingscenter) einzustufen.
					<br />
					In der 2. Phase wurden im Frühjahr 2020 die Geburtsabteilungen der
					regionalen Krankenhäuser in Tetovo und Kumanova ausgestattet.
					<br />
					Es folgten die Projektschritte PeriMAC – T, Einrichtung eines
					landesweiten Neugeborenen Transportsystems in Nordmazedonien sowie
					PeriMAC – E, Schulung des medizinischen Personals. Und hier kommt
					Bärenherz ins Spiel. Was nützen alle Sachspenden, wenn vor Ort das
					medizinische Personal nicht in der Lage ist, die technischen Geräte
					sachgerecht zu bedienen. Mit unseren Einnahmen aus dem Charity
					Golfturnier sowie dem Charity Ski-Weekend 2022 wollen wir mit dazu
					beitragen, die Schulung für medizinisches Personal in Nordmazedonien
					und um Kosovo zugänglich zu machen:
					<br />
					Das gemeinschaftliche Funktionieren aller klinischen Abläufe und der
					beteiligten Personen in der Versorgung von Früh- und Neugeborenen ist
					unabdingbar. Insbesondere müssen alle Beteiligten, die mit der Aufgabe
					des Transports befasst sind, ein fundiertes Training erhalten: von
					Neonatologen, über Kinderarzt, Pflegepersonal bis hin zum Fahrer des
					Rettungswagens. Die Schulung ist modular und als Hybridveranstaltung
					aufgebaut, sowohl als Webinar wie auch als Präsenzschulung.
					<br />
					Am 28. April 2022 wurden dem Gesundheitsminister von Nordmazedonien,
					Dr. Berkim Sali, zwei voll ausgestattete Baby Ambulanzfahrzeuge
					übergeben, gleichzeitig gab es vom 27.-29. April 2022 verschiedene
					Trainingsmassnahmen und einen Besuch in den beiden Krankenhäusern von
					Skopje, die durch Project HOPE Deutschland e.V. eine umfangreiche
					medizinische Ausstattung erfahren haben.
					<br />
					Grund genug für unsere Vorstandmitglieder Rainer Mück und Markus
					Schweizer, sich vor Ort ein Bild über die Massnahmen, die
					Gegebenheiten in den Krankenhäusern sowie auch die handelnden Personen
					und den Projektfortschritt zu machen. Und was wir gesehen haben, hat
					uns nachhaltig beeindruckt:
					<br />
					Es war klar, dass die Krankenhäuser in Skopje nicht mit den gewohnten
					Standards in der Schweiz vergleichbar sind. Trotzdem war es zunächst
					einmal ein Schock und der Gedanke, selbst in ein solches Krankenhaus
					eingeliefert werden zu müssen, hat zunächst eine gewisse Beklemmung
					ausgelöst. Aber als wir dann auf den Rundgängen gesehen haben, was mit
					Hilfe von Project HOPE in den letzten Jahren an medizinischen Geräten
					geliefert wurde und nun in Betrieb ist, waren wir positiv überrascht.
					Was uns aber noch mehr begeistert hat, war die Leidenschaft und das
					Engagement der Ärzte und des Pflegepersonals, die dort tätig sind. Die
					Dankbarkeit war spürbar, aber auch die Begeisterung und
					Eigeninitiative. So hat Dr. Ismaili, Chef der Frauenklinik Mother
					Teresa in Cair/Skopje zwischenzeitlich ortsansässige Unternehmen als
					Sponsoren gewinnen können, um die notwendigen Renovierungen und
					Umbaumassnahmen am Krankenhaus zu finanzieren.
					<br />
					Mindestens genauso beeindruckend aber auch der Einsatz und das
					Engagement der ehrenamtlichen Helfer von Project HOPE Deutschland e.V.
					In erster Linie natürlich die beiden verantwortlichen Projektmanager
					Achim Eckert und Jan van den Berg. Was sie in den letzten Jahren vor
					Ort geleistet haben, ist absolut bewundernswert. Man spürt diese
					Verbundenheit in jeder Minute, wenn man mit ihnen spricht, aber auch,
					wenn man sie mit den Ärzten und Pflegekräften zusammen sieht. Hier
					sind Freundschaften entstanden und das gemeinsame Ziel hat ein Team
					zusammengebracht, was seinesgleichen sucht. Es ist schwer, diese
					Erfahrungen und Gefühle hier zu Papier zu bringen, das muss man erlebt
					haben. Auf jeden Fall waren wir uns sehr schnell sicher: Ein besseres
					Projekt hätte es zum Start von Bärenherz wirklich nicht geben können.
					<br />
					Zudem konnten wir uns auch ein detailliertes Bild von der Übergabe der
					Ambulanzfahrzeuge und den durchgeführten Trainings machen. Letzteres
					ist das, was wir mit den Bärenherz Projekten in 2022 unterstützen.
					Denn was nutzt die beste Ausrüstung, wenn niemand sie bedienen kann.
					Das sicherzustellen, ist Teil unserer Aufgabe und wir werden an dieser
					Stelle allen Unterstützern versichern, dass wir nachhaltig
					kontrollieren werden, dass sowohl das Training als auch die daraus
					resultierende Anwendung von uns bestmöglich nachverfolgt werden.
				</div>
			</div>
			<br />

			<div>
				<img src={ski} />
				<br />
				<br />
				<h4 style={{ fontSize: '2em', fontWeight: 'bold' }}>
					Bärenherz Charity Ski-Weekend 2022
				</h4>
				<p>von Andi Wenzel</p>
				<br />
				Am kommenden Dezember vom 9.-11.12 sind wir im Skigebiet Flumserberg!
				Marie-Therese Nadig, Urs Kälin, Andreas Spieth und ich erwarten Euch als
				Coaches am Freitagabend im Hotel Neu-Schönstatt. Nachdem wir unsere
				Test-Ski angepasst haben, starten wir am Samstagmorgen gemeinsam in das
				Skigebiet und werden als Gruppe einen gemeinsamen Schwung-Rhythmus
				finden.
				<br />
				<br />
				Embodied Skiing ist das Zauberwort, mit dem wir uns mit unserer
				Aufmerksamkeit in den eigenen Körper hineinbegeben und beim rhythmischen
				Fahren erforschen, was in unseren Gelenken passiert, welche Muskeln
				arbeiten und wie sich die Körperspannung anfühlt. Kurzum: Beim Skifahren
				Bewusstheit trainieren.
				<br />
				<br />
				Der Spass beim Carven steht im Vordergrund, wir geniessen die Pisten der
				Bergbahnen Flumserberg AG, bei denen wir uns ganz herzlich für die
				grossartige Unterstützung bedanken.
				<br />
				<br />
				Am Samstagabend geht Bärenherz Gourmet ins Restaurant Schlüssel zu Roger
				Kalberer - Ein gastronomisches Highlight! Das Pünktchen auf dem „i“ ist
				unsere Preisziehung, Ski mit Bindung, weiter 2-Tageskarten der
				Bergbahnen Flums und 1 Übernachtung für 2 Personen sowie die
				Versteigerung eines Heli-Ski-Tages von Aeroski-Reisen für 4 Personen in
				Courmayeur.
				<br />
				<br />
				2 Übernachtung im Hotel Neu-Schönstatt, alle Mittag- und Abendessen
				inklusive aller Getränke sind im Preis inbegriffen.
				<br />
				<br />
				Am Sonntag werden wir als Gruppen versuchen, möglichst synchron und von
				einer Drohne verfolgt, ins Tal zu fahren. Die beste Truppe erhält
				unseren aus Holz geschnitzten „Ski-Bären-Wanderpokal“ von Paul Widmer!
				<br />
				<br />
				Wir freuen uns auf Euch und bedanken uns bei den Bergbahnen Flumserberg,
				Ski-Test Partner, Aeroski-Reisen und Hotel Neu-Schönstatt sowie bei
				unseren Partnern.
				<br />
				<br />
				Durch Euer Engagement können wir wiederum Project-Hope unterstützen.
				<br />
				<br />
				Bärenherzliche Grüsse und bis im Dezember 2022!
				<br />
				<div className="mt-5">
					<a href={pdf} download>
						Hier die Anmeldung herunterladen
					</a>
					<br />
					<a href={pdfanm} download>
						Hier die Einladung herunterladen
					</a>
				</div>
			</div>

			<br />
			<br />

			<div style={{ background: '#EEEAE4' }}>
				<div style={{ width: '75%', margin: '0 auto' }}>
					<br />
					<br />
					<img style={{ width: '200px' }} src={andrea} />
					<div>
						<br />
						<h4 style={{ fontSize: '2em', fontWeight: 'bold' }}>
							Meine Vision für Bärenherz
						</h4>
						<p>von Andrea Degen</p>
						<br />
						Das Engagement über mein persönliches Wohlergehen hinaus ist für
						mich Selbstverständlichkeit und Hobby. Sei es für das Swiss Laos
						Hospital Project, als erste ehemalige Präsidentin der VCU für das
						Mikrokreditsystem SwissHand, als Teil von Rotary International oder
						auch für Bärenherz. Markus und Rainer suchten Unterstützung seitens
						einer Medizinerin. Als ehemalige Ärztin kann ich dies gerne
						anbieten. Beruflich arbeite ich im Forschungs- und
						Innovationsmanagement und pendle zwischen Asien und Europa. Ein{' '}
						<a href="https://www.srf.ch/audio/menschen-und-horizonte/andrea-degen-aerztin-managerin-mutter?id=10107456">
							Interview von Radio SRF
						</a>
						, aufgenommen 2009, bringt so ziemlich alles über mich auf den
						Punkt: Hier mehr… Da mir das Interview unter dem Aspekt, wie die
						Schweizer Frauen die Zukunft sehen, entlockt wurde, ist es bis heute
						aktuell. Ich blogge als «Josefine DellaSpada», in Anlehnung des Name
						meines Grossvaters Josef Degen, der 1921 aus Luzern nach Asien
						auswanderte. Er schrieb als «DellaSpada» Reisereportagen und
						vermittelte zwischen den Kulturen. Wer mich mag und ich ihn auch,
						darf mich deshalb gerne «Jo» nennen, das tönt in meinen Ohren
						familiär. Bärenherz ist eine Initiative von Rainer, und ich
						verstärke sehr gerne sein Team. Auch in Europa ist noch viel
						Entwicklungsbedarf! Meine Vision für Bärenherz ist es, dass wir
						später einmal eigene Projekte starten und uns bei unseren Charity
						Projekten unterstützen.
						<br />
						<br />
						<a href="" />
					</div>
				</div>
			</div>
		</div>
	</Layout>
)

export default News
