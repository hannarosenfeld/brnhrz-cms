import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import './form.css'

import header from '../img/ski.png'

const FormGroup = (props) => {
	return (
		<Form.Group
			style={{ width: '47%' }}
			className="mb-3 d-flex justify-content-between align-items-baseline"
			controlId="formBasicEmail"
		>
			<Form.Label>{props.name}</Form.Label>
			<Form.Control
				style={{ width: '75%' }}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</Form.Group>
	)
}

export default function Example() {
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)

	return (
		<>
			<br />
			<a
				variant="primary"
				onClick={handleShow}
				style={{
					background: 'none',
					border: 'none',
					color: 'rgb(88, 138, 204)'
				}}
			>
				Hier zum Charity Ski Weekend 2022 anmelden{' '}
			</a>

			<Modal show={show} onHide={handleClose} className="w-100">
				<Modal.Header className="d-flex flex-column">
					<img src={header} />
					<Modal.Title
						style={{
							background: '#01ADEE',
							width: '100%',
							textAlign: 'center'
						}}
					>
						ANMELDUNG
					</Modal.Title>
				</Modal.Header>

				<Modal.Body
					style={{ width: '80%', margin: '0 auto', fontSize: '0.8em' }}
				>
					<Form
						action="https://getform.io/f/f76ce228-3425-4913-b0c9-6efc4a607d3f"
						method="POST"
					>
						<div className="d-flex justify-content-between flex-wrap">
							<FormGroup name={'Vorame'} />
							<FormGroup name={'Name'} />
							<FormGroup name={'Strasse, Nr.'} />
							<FormGroup name={'PLZ, Ort'} />
							<FormGroup name={'Telefon'} />
							<FormGroup name={'E-Mail'} type={'email'} />
						</div>
						<div>
							<b>Ja</b>, ich nehme am Charity Ski-Weekend vom 9.-11. Dezember
							2002 in Flumserberg teil und buche ein
							<Form.Group className="mb-3 mt-3">
								<Form.Check
									type="checkbox"
									label="Einzelzimmer zu CHF 1'600.- pro Person"
								/>
								<Form.Check
									type="checkbox"
									label="Doppelzimmer zu CHF 1'350.- pro Person, total CHF 2'700.- für zwei Personen"
								/>
								<Form.Check
									type="checkbox"
									label="Ich bin damit einverstanden, dass im Rahmen dieser Veranstaltung Fotoaufnahmen gemacht werden, die im Nachgang zur Berichterstattung Verwendung finden können."
								/>
								<Form.Check
									type="checkbox"
									label="Bitte informieren Sie mich regelmässig per E-mail Newsletter über Neuigkeiten rund um Bärenherz - Verein für humanitäre Hilfe"
								/>
							</Form.Group>
						</div>
						<div>
							Änderungen des Programms sind aus organisatorischen Gründen
							vorbehalten. Wir entscheiden bis spätestens eine Woche vor dem
							Anlass über eine mögliche Verschiebung des Anlasses, falls die
							Schneeverhältnisse ungenügend sein sollten. Verschiebedatum ist
							der 31. März bis 2. April 2023.
							<br />
							<br />
							Bitte senden Sie uns Ihre Anmeldung per E-Mail:
							info@baerenherz.org
							<br />
							Anmeldeschluss ist der 31. Oktober 2022.
							<br />
							<br />
							Bitte überweisen Sie das entsprechende Teilnehmergebühr mit Ihrer
							Anmeldung unter dem Betreff «Charity Ski-Weekend 2022» auf das
							Bärenherz Konto: CH91 0078 4297 6098 0200 1 bei der Thurgauer
							Kantonalbank. Die Anmeldung ist erst wirksam mit der Überweisung
							der Teilnehmergebühr. Die Teilnehmerzahl des Anlasses ist auf 20
							Personen begrenzt. Das Datum des Eingangs der Überweisung
							entscheidet bei zu grosser Nachfrage.
						</div>
						<br />
						<Button
							variant="primary"
							type="submit"
							style={{
								marginLeft: '-0.75em',
								background: 'none',
								color: 'rgb(88, 138, 204)',
								border: 'none'
							}}
						>
							Submit
						</Button>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<div
						style={{ fontSize: '0.8em' }}
						className="d-flex justify-content-between"
					>
						<div>Weitere Informationen:</div>
						<div style={{ width: '75%' }}>
							Bärenherz – Verein für humanitäre Hilfe c/o Rainer Mück,
							Untersellenstrasse 27, CH-8873 Amden Mobil +41 79 544 94 63
							info@baerenherz.org www.baerenherz.org
						</div>
					</div>
				</Modal.Footer>
			</Modal>
		</>
	)
}
