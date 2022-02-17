import React, {Component, PropTypes} from 'react';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
// download html2canvas and jsPDF and save the files in app/ext, or somewhere else
// the built versions are directly consumable
// import {html2canvas, jsPDF} from 'app/ext';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap"


import golferin from "../img/Anmeldung_Header.png"
import "../styles/styles.css"


export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
  }

  printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }

  render() {
    return (
      <div>
        <div id="divToPrint" className="mt4" {...({
          })}>

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



            <Form className="signupform m-5" name="turnier-form" method="POST" data-netlify="true" >
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

                  <div className="d-flex mt-4 mb-4">
                    <p>Ja, ich nehme am Charity Golf Cup 2022 teil:</p>
                    <span style={{margin: "0.8em"}} />
                    <Form.Group className="" controlId="formBasicGanzerAnlass">
                      <Form.Check type="checkbox" label="ganzer Anlass (CHF 285,00)" name="" />
                    </Form.Group>
                    <span style={{margin: "0.8em"}} />
                    <Form.Group className="" controlId="formBasicNurGala">
                      <Form.Check type="checkbox" label="nur Charity Golf Cup Gala (CHF 165.00)" name="" />
                    </Form.Group>
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
                        <Form.Group controlId="formBasicBegleitungGanzerAnlass">
                          <Form.Check type="checkbox" label="ganzer Anlass (CHF 285,00)" name="begleitung-ganzer-anlass" />
                        </Form.Group>
                        <span style={{margin: "0.8em"}} />
                        <Form.Group controlId="formBasicBegleitungNurGala">
                          <Form.Check type="checkbox" label="nur Charity Golf Cup Gala (CHF 165.00)" name="begleitung-nur-gala" />
                        </Form.Group>
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group className="mt-4" controlId="formBasicFlug">
                    <Form.Check type="checkbox" className="text-info h5 mb-2" label="Wir möchten einen eigenen Flight buchen" name="flight" />
                    <p className="mb-2">Kosten für einen 4er-Flight: 1.140,00 CHF</p>
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
                <Button variant="primary" type="submit" style={{float: "right"}}>Submit
                </Button>
                <span style={{margin: "2em"}} />
              </div>
            </Form>
          </main>
        </div>
      </div>);
  }
}
