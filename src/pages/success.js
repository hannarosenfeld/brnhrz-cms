import React from 'react'
import { render } from "react-dom";
import { ArrowLeft } from 'react-bootstrap-icons';

const SuccessPage = () => {
  return(
    <main className="success-page">
      <div className="success-modal-container">
        <p>Herzlichen Dank für Ihre Anmeldung zum Charity Golf Turnier am 6. Mai 2022 in Lipperswil.</p>
        <p>Bitte beachten Sie, dass Sie die finale Anmeldebestätigung erst dann erhalten, wenn Sie die Teilnahmegebühr auf unser Konto bei der Thurgauer Kantonalbank überwiesen haben (IBAN Nr.  CH91 0078 4297 6098 0200 1).</p>
        <p>Wir freuen uns auf Sie und grüssen Sie ganz herzlich.</p>
        <br/>
        <div>
          <p>Der Vorstand</p>
          <p>Bärenherz - Verein für humanitäre Hilfe</p>
          <p><a href="www.baerenherz.org">www.baerenherz.org</a></p>
        </div>
        <section className="mt-5">
          <a href="/events/#golf-turnier">
            <ArrowLeft />
            zurück
          </a>
        </section>
      </div>
    </main>
  )
}

export default SuccessPage
