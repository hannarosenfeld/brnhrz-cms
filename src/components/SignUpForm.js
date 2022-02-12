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
      <Form className="signupform" name="turnier-form" method="POST" data-netlify="true" style={{margin: "0 auto", width: "70%"}}>
        <input type="hidden" name="form-name" value="turnier-form" />
        <p style={{margin: "1em auto"}}>Bitte senden Sie uns Ihre Anmeldung per Email: <b>info@baerenherz.org</b></p>
        <Form.Group className="mb-3" controlId="formBasicVorName">
          <Form.Control type="email" placeholder="Vorname" name="vorname" />
          <Form.Label>Vorname</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control type="text" placeholder="Name" name="name" />
          <Form.Label>Name</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" name="checkbox" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  )
}


export default SignUpForm
