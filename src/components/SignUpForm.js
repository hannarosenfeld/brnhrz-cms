import React from "react"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"


import "../styles/styles.css"

import golferin from "../img/golferin.jpg"


function SignUpForm() {
  return(
    <main>
      <div>
        <header className="signup-banner"><img src={golferin} /></header>
        <h2 style={{background: "#00aeef", color: "white", textAlign: "center", letterSpacing: "0.2em", fontSize: "1.8rem"}}>ANMELDUNG</h2>
      </div>
      <Form className="signupform" name="turnier-form" method="POST" data-netlify="true" >
        <input type="hidden" name="form-name" value="turnier-form" />
        <div style={{margin: "0 auto", width: "90%"}}>
          <p style={{margin: "1em auto"}}>Bitte senden Sie uns Ihre Anmeldung per Email: <b>info@baerenherz.org</b></p>
          <div className="d-flex flex-wrap form-address-section mb-4">
            <Form.Group className="form-field" controlId="formBasicVorName">
              <Form.Control type="text" name="vorname" />
              <Form.Label>Vorname</Form.Label>
            </Form.Group>
            <Form.Group className="form-field" controlId="formBasicName">
              <Form.Control type="text" name="name" />
              <Form.Label>Name</Form.Label>
            </Form.Group>
            <Form.Group className="form-field" controlId="formBasicFirma">
              <Form.Control type="text" name="firma" />
              <Form.Label>Firma, Funktion</Form.Label>
            </Form.Group>
            <Form.Group className="form-field" controlId="formBasicHeimatclub">
              <Form.Control type="text" name="heimatclub"/>
              <Form.Label>Heimatclub</Form.Label>
            </Form.Group>
            <Form.Group className="form-field" controlId="formBasicStrasse">
              <Form.Control type="text" name="strasse" />
              <Form.Label>Strasse, Nr.</Form.Label>
            </Form.Group>
            <Form.Group className="form-field" controlId="formBasicPLZ">
              <Form.Control type="text" name="plz" />
              <Form.Label>PLZ, Ort</Form.Label>
            </Form.Group>
            <Form.Group className="form-field" controlId="formBasicTelefon">
              <Form.Control type="text" name="telefon" />
              <Form.Label>Telefon/Telefax</Form.Label>
            </Form.Group>
            <Form.Group className="form-field" controlId="formBasicEmail">
              <Form.Control type="email" name="email" />
              <Form.Label>Email</Form.Label>
            </Form.Group>
          </div>

          <div className="signupform-checkbox-group mt-2">
            <Form.Group className="" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Ja, ich/wir nehmen am Charity Golf Cup 2022 teil." name="teilnahmebestaetigung" />
            </Form.Group>
            <Form.Group className="" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Ich/ wir nehmen ausschliesslich an der Charity Golf Cup Gala teil." name="nur-gala" />
            </Form.Group>
            <Form.Group className="d-flex" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Ich komme in Begleitung von"  style={{margin: "0 1em 0 0"}} name="checkbox-3" />
              <div className="flug-begleitung-info d-flex">
                <Form.Group controlId="formBasicName">
                  <Form.Control type="text" name="begleitung-name" />
                  <Form.Label>Vorname, Name</Form.Label>
                </Form.Group>
                <Form.Group controlId="formBasicName">
                  <Form.Control type="text" name="begleitung-heimatclub-hcp"/>
                  <Form.Label>Heimatclub, Hcp.</Form.Label>
                </Form.Group>
              </div>
            </Form.Group>

            <Form.Group className="d-flex flex-column mt-2" controlId="formBasicCheckbox">
              <div className="text-info h4 mb-1">
                <Form.Check type="checkbox" label="Ich/wir nehmen als Privatpersonen teil" name="privatperson" />
              </div>
              <div className="d-flex">
                <span><b>Teilnahme:&nbsp;&nbsp;</b></span>
                <Form.Group controlId="formBasicCheckbox" style={{margin: "0 1em 0 0"}}>
                  <Form.Check type="checkbox" label="Golfturnier & Gala: 285,00 CHF" name="preis-turnier-und-gala" />
                </Form.Group>
                <Form.Group className="" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Nur Gala: 285,00 CHF" name="preis-nur-gala" />
                </Form.Group>
              </div>
            </Form.Group>
            <Form.Group className="mt-4" controlId="formBasicName">
              <Form.Check type="checkbox" className="text-info h4 mb-2" label="Wir möchten einen eigenen Flight buchen" name="flight" />
              <p className="mb-2">Kosten für einen 4er-Flight: 1.140,00 CHF</p>
              <div className="d-flex">
                <Form.Group className="form-field" controlId="formBasicName">
                  <Form.Control type="text" name="flugperson-1-vorname" />
                  <Form.Label>Vorname</Form.Label>
                </Form.Group>
                <Form.Group className="form-field" controlId="formBasicName">
                  <Form.Control type="text" name="flugperson-1-name" />
                  <Form.Label>Name</Form.Label>
                </Form.Group>
                <Form.Group className="form-field" controlId="formBasicName">
                  <Form.Control type="text" name="flugperson-1-heimatclub-hcp" />
                  <Form.Label>Heimatclub, Hcp.</Form.Label>
                </Form.Group>
              </div>
            </Form.Group>


            <div className="mt-4">
              <p><b>Bitte überweisen Sie das entsprechende Startgeld mit Ihrer Anmeldung unter dem Betreff «Charity Golf Cup 2022» auf das Bärenherz Konto: CH91 0078 4297 6098 0200 1 bei der Thurgauer Kantonalbank. Die Teilnehmerzahl des Golfturniers ist auf 48 Personen begrenzt. Das Datum des Eingangs der Überweisung entscheidet bei zu grosser Nachfrage.</b></p>
              <div className="mt-2 mb-4">
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Ich bin damit einverstanden, dass im Rahmen dieser Veranstaltung Fotoaufnahmen gemacht werden, die im Nachgang zur Berichterstattung Verwendung finden können." name="einverstanden-foto" />
              </Form.Group>
              <Form.Group className="" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Bitte informieren Sie mich regelmäßig per E-mail Newsletter über Neuigkeiten rund um Bärenherz e.V." name="newsletter" />
              </Form.Group>
              </div>
            </div>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </main>
  )
}


export default SignUpForm
