import React, { useEffect, useState } from "react"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"

import "../styles/styles.css"

import golferin from "../img/Anmeldung_Header.png"


const address = [
  {
    name: 'vorname',
    fieldname: 'Vorname',
  },
  {
    name: 'name',
    fieldname: 'Name',
  },
  {
    name: 'firma',
    fieldname: 'Firma, Funktion',
  },
  {
    name: 'heimatclub',
    fieldname: 'Heimatclub, Hcp.',
  },
  {
    name: 'strasse',
    fieldname: 'Strasse, Nr.',
  },
  {
    name: 'plz',
    fieldname: 'PLZ, Ort',
  },
  {
    name: 'telefon',
    fieldname: 'Telefon/Telefax',
  },
  {
    name: 'email',
    fieldname: 'Email',
  },
]

function FlugDetails() {
  const passagiere = [
    {
      name: 'vorname',
      fieldname: 'Vorname'
    },
    {
      name: 'name',
      fieldname: 'Name'
    },
    {
      name: 'heimatclub',
      fieldname: 'Heimatclub, Hcp.'
    },
  ]
  return(
    passagiere.map((passagier) => {
      for (let i = 0; i <= 4; i++ ){
        return(
          <Form.Group className="form-field" controlId="formBasicFlugPersonEins{passagier.fieldName}">
            <Form.Control type="text" name="flugperson-{i}-{passagier.name}" />
            <Form.Label>{passagier.fieldname}</Form.Label>
          </Form.Group>
        )}
    })
  )
}

function SignUpForm() {
  const [showFlightDetails, setShowFlightDetails] = React.useState(false)
  const onClick = () => setShowFlightDetails(!showFlightDetails)

  return(
    <main
      style={{
        fontSize: "0.9em",
        fontWeight: "500",
      }}
    >
      <div>
        <header className="signup-banner"><img src={golferin} /></header>
        <h2 style={{background: "#00aeef", color: "white", textAlign: "center", letterSpacing: "0.2em", fontSize: "1.8rem"}}>ANMELDUNG</h2>
      </div>

      <Form className="signupform" style={{width: "80%", margin: "2em auto"}} name="turnier-form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="turnier-form" />
        <div style={{margin: "0 auto", width: "90%"}}>
          <p style={{margin: "1em auto"}}>Bitte senden Sie uns Ihre Anmeldung per Email: <b>info@baerenherz.org</b></p>
          <div className="d-flex flex-wrap  mb-4">
            {address.map((x) => {
              return(
                <Form.Group className="form-field" controlId="formBasicVorName">
                  <Form.Control type="text" name={x.name} />
                  <Form.Label>{x.fieldname}</Form.Label>
                </Form.Group>
              )
            })}
          </div>
          <div className="signupform-checkbox-group mt-2">
            <div className="d-flex mt-4 mb-4">
              <p>Ja, ich nehme am Charity Golf Cup 2022 teil:</p>
              <span style={{margin: "0.8em"}} />
              <div className="d-flex">
                <input type="radio" value="ganzer Anlass (CHF 285,00)" name="teilnahme" />
                <span className="m-1 p-1">ganzer Anlass (CHF 285.00)</span>
                <span style={{margin: "0.8em"}} />
                <input type="radio" value="nur Charity Golf Cup Gala (CHF 165.00)" name="teilnahme" />
                <span className="m-1 p-1">nur Charity Golf Cup Gala (CHF 165.00)</span>
              </div>
            </div>
            <Form.Group className="d-flex mt-4 mb-2" controlId="formBasicBegleitung" style={{width: "100%"}}>
              <p>Ich komme in Begleitung von:</p>
              <span style={{margin: "0.8em"}} />
              <div className="flug-begleitung-info d-flex flex-column" style={{width: "80%"}}>
                <div className="d-flex">
                  <Form.Group controlId="formBasicBegleitungName" style={{width: "45%"}}>
                    <Form.Control type="text" name="begleitung-name" />
                    <Form.Label>Vorname, Name</Form.Label>
                  </Form.Group>
                  <Form.Group controlId="formBasicBegleitungHeimatClub" style={{width: "55%"}}>
                    <Form.Control type="text" name="begleitung-heimatclub-hcp"/>
                    <Form.Label>Heimatclub, Hcp.</Form.Label>
                  </Form.Group>
                </div>
                <div className="d-flex">
                  <input type="radio" value="ganzer Anlass (CHF 285,00)" name="gast-teilnahme" />
                  <span className="m-1 p-1">ganzer Anlass (CHF 285.00)</span>
                  <span style={{margin: "0.8em"}} />
                  <input type="radio" value="nur Charity Golf Cup Gala (CHF 165.00)" name="gast-teilnahme" />
                  <span className="m-1 p-1">nur Charity Golf Cup Gala (CHF 165.00)</span>
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mt-4" controlId="formBasicFlug">
              <Form.Check onChange={onClick} type="checkbox" className="text-info h5 mb-2" label="Wir möchten einen eigenen Flight buchen" name="flight" />
              <p className="mb-2">Kosten für einen 4er-Flight: 1'140.00 CHF</p>
                { showFlightDetails
                  ?
                  <div className="d-flex flex-column"><div className="d-flex"><FlugDetails /></div><div className="d-flex"><FlugDetails /></div><div className="d-flex"><FlugDetails /></div><div className="d-flex"><FlugDetails /></div></div>
                  : ''}

            </Form.Group>
            <div className="mt-4">
              <p><b>Bitte überweisen Sie das entsprechende Startgeld mit Ihrer Anmeldung unter dem Betreff «Charity Golf Cup 2022» auf das Bärenherz Konto: CH91 0078 4297 6098 0200 1 bei der Thurgauer Kantonalbank. Die Teilnehmerzahl des Golfturniers ist auf 48 Personen begrenzt. Das Datum des Eingangs der Überweisung entscheidet bei zu grosser Nachfrage.</b></p>
              <div className="mt-2 mb-4">
                <Form.Group className="" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Ich bin damit einverstanden, dass im Rahmen dieser Veranstaltung Fotoaufnahmen gemacht werden, die im Nachgang zur Berichterstattung Verwendung finden können." name="einverstanden-foto" />
                </Form.Group>
                <Form.Group className="" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Bitte informieren Sie mich regelmäßig per E-mail Newsletter über Neuigkeiten rund um Bärenherz e.V." name="newsletter" />
                </Form.Group>
              </div>
            </div>
          </div>
          <button variant="primary" type="submit" style={{float: "right"}}>
            Submit
          </button>
          <span style={{margin: "2em"}} />
        </div>
      </Form>
    </main>
  )
}


export default SignUpForm
