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

          <div className="d-flex flex-wrap form-address-section">

            <Form.Group className="form-field" controlId="formBasicVorName">
              <Form.Control type="text" name="vorname" />
              <Form.Label>Vorname</Form.Label>
            </Form.Group>

            <Form.Group className="form-field" controlId="formBasicName">
              <Form.Control type="text" name="name" />
              <Form.Label>Name</Form.Label>
            </Form.Group>

            <Form.Group className="form-field" controlId="formBasicName">
              <Form.Control type="text" name="firma" />
              <Form.Label>Firma, Funktion</Form.Label>
            </Form.Group>

            <Form.Group className="form-field" controlId="formBasicName">
              <Form.Control type="text" name="heimatclub"/>
              <Form.Label>Heimatclub</Form.Label>
            </Form.Group>

            <Form.Group className="form-field" controlId="formBasicName">
              <Form.Control type="text" name="strasse" />
              <Form.Label>Strasse, Nr.</Form.Label>
            </Form.Group>

            <Form.Group className="form-field" controlId="formBasicName">
              <Form.Control type="text" name="plz" />
              <Form.Label>PLZ, Ort</Form.Label>
            </Form.Group>

            <Form.Group className="form-field" controlId="formBasicName">
              <Form.Control type="text" name="telefon" />
              <Form.Label>Telefon/Telefax</Form.Label>
            </Form.Group>

            <Form.Group className="form-field" controlId="formBasicName">
              <Form.Control type="email" name="email" />
              <Form.Label>Email</Form.Label>
            </Form.Group>

          </div>
          <div>
            <Form.Group className="form-field" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" name="checkbox" />
          </Form.Group>
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
