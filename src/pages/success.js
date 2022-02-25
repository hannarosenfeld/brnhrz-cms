import React from 'react'
import { render } from "react-dom";
import { ArrowLeft } from 'react-bootstrap-icons';

import "../styles/styles.css"

const SuccessPage = () => {
  return(
    <main className="success-page">
      <div className="success-modal-container">
        <section>Herzlichen Dank für Ihre Anmeldung zum Charity Golf Turnier am 6. Mai 2022 in Lipperswil.</section>
          <section className="mt-2"> Bitte beachten Sie, dass Sie die finale Anmeldebestätigung erst dann erhalten, wenn Sie die Teilnahmegebühr auf unser Konto bei der Thurgauer Kantonalbank überwiesen haben (IBAN Nr.  CH91 0078 4297 6098 0200 1).</section>

          <section className="mt-2">Wir freuen uns auf Sie und grüssen Sie ganz herzlich.</section>

          <div className="mt-4">
            <p>Der Vorstand</p>
            <p>Bärenherz - Verein für humanitäre Hilfe</p>
            <p><a href="www.baerenherz.org">www.baerenherz.org</a></p>
          </div>
          <section className="mt-5">
            <a href="/">
              <ArrowLeft />
              <span className="m-1"></span>Zurück zu Bärenherz
            </a>
          </section>
      </div>
    </main>
  )
}

export default SuccessPage
