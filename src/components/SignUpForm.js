import React, { useState } from "react"
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"
import { send } from 'emailjs-com'

import "../styles/styles.css"
import golferin from "../img/Anmeldung_Header.png"


function SignUpForm() {
  const [toSend, setToSend] = useState({
    from_name: '',
    reply_to: '',
  })
  const onSubmit = (e) => {
    e.preventDefault()
    send(
      'brnhrz',
      'brnhrz_template',
      toSend,
      'user_rp6KYxgS5NjHjPh2GKGoj'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
      })
      .catch((err) => {
        console.log('FAILED...', err)
      })
  }

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  }

  return(
    <main style={{ fontSize: "0.9em", fontWeight: "500"}}>
      <header className="signup-banner">
        <img src={golferin} />
        <h2 style={{background: "#00aeef", color: "white", textAlign: "center", letterSpacing: "0.2em", fontSize: "1.8rem"}}>ANMELDUNG</h2>
      </header>
      <Form onSubmit={onSubmit} className="signupform m-5" name="turnier-form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="turnier-form" />
        <div style={{margin: "0 auto", width: "90%"}}>
          <Form.Group width="100%" controlId="formBasicVorName">
            <Form.Control type="text" name="from_name" value={toSend.from_name} onChange={handleChange} />
            <Form.Label>Vorname, Name</Form.Label>
          </Form.Group>
          <div className="d-flex flex-wrap form-address-section mb-4">
            <Form.Group className="form-field" controlId="formBasicFirma">
              <Form.Control type="text" name="firma" />
              <Form.Label>Firma, Funktion</Form.Label>
            </Form.Group>
            <Form.Group className="form-field" controlId="formBasicHeimatclub">
              <Form.Control type="text" name="heimatclub"/>
              <Form.Label>Heimatclub, Hcp.</Form.Label>
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
              <Form.Control required type="email" name="reply_to" value={toSend.reply_to} onChange={handleChange}/>
              <Form.Label>Email</Form.Label>
            </Form.Group>
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
              <Form.Check type="checkbox" className="text-info h5 mb-2" label="Wir möchten einen eigenen Flight buchen" name="flight" />
              <p className="mb-2">Kosten für einen 4er-Flight: 1'140.00 CHF</p>
              <div className="d-flex">
                <Form.Group className="form-field" controlId="formBasicFlugPersonEinsVorName">
                  <Form.Control type="text" name="flugperson-1-vorname" />
                  <Form.Label>Vorname</Form.Label>
                </Form.Group>
                <Form.Group className="form-field" controlId="formBasicFlugpersoneinsName">
                  <Form.Control type="text" name="flugperson-1-name" />
                  <Form.Label>Name</Form.Label>
                </Form.Group>
                <Form.Group className="form-field" controlId="formBasicFlugPersoneinsHcp">
                  <Form.Control type="text" name="flugperson-1-heimatclub-hcp" />
                  <Form.Label>Heimatclub, Hcp.</Form.Label>
                </Form.Group>
              </div>
              <div className="d-flex">
                <Form.Group className="form-field" controlId="formBasicFlugPersonZweiVorName">
                  <Form.Control type="text" name="flugperson-2-vorname" />
                  <Form.Label>Vorname</Form.Label>
                </Form.Group>
                <Form.Group className="form-field" controlId="formBasicFlugPersonZweiName">
                  <Form.Control type="text" name="flugperson-2-name" />
                  <Form.Label>Name</Form.Label>
                </Form.Group>
                <Form.Group className="form-field" controlId="formBasicFlugPersonZweiHcp">
                  <Form.Control type="text" name="flugperson-2-heimatclub-hcp" />
                  <Form.Label>Heimatclub, Hcp.</Form.Label>
                </Form.Group>
              </div>              <div className="d-flex">
                <Form.Group className="form-field" controlId="formBasicFlugPersonDreiVorName">
                  <Form.Control type="text" name="flugperson-3-vorname" />
                  <Form.Label>Vorname</Form.Label>
                </Form.Group>
                <Form.Group className="form-field" controlId="formBasicFlugPersonDreiName">
                  <Form.Control type="text" name="flugperson-3-name" />
                  <Form.Label>Name</Form.Label>
                </Form.Group>
                <Form.Group className="form-field" controlId="formBasicFlugPersonDreiHcp">
                  <Form.Control type="text" name="flugperson-3-heimatclub-hcp" />
                  <Form.Label>Heimatclub, Hcp.</Form.Label>
                </Form.Group>
              </div>              <div className="d-flex">
                <Form.Group className="form-field" controlId="formBasicFlugPersonVierVorName">
                  <Form.Control type="text" name="flugperson-4-vorname" />
                  <Form.Label>Vorname</Form.Label>
                </Form.Group>
                <Form.Group className="form-field" controlId="formBasicFlugPersonVierName">
                  <Form.Control type="text" name="flugperson-4-name" />
                  <Form.Label>Name</Form.Label>
                </Form.Group>
                <Form.Group className="form-field" controlId="formBasicFlugPersonVierHcp">
                  <Form.Control type="text" name="flugperson-4-heimatclub-hcp" />
                  <Form.Label>Heimatclub, Hcp.</Form.Label>
                </Form.Group>
              </div>
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
          <Button variant="primary" type="submit" style={{float: "right"}}>
            Absenden
          </Button>
          <span style={{margin: "2em"}} />
        </div>
      </Form>
    </main>
  )
}


export default SignUpForm
