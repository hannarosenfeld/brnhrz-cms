import React from "react"

import "../styles/styles.css"

function SignUpForm() {
  return(
    <form className="signupform" name="turnier-form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="turnier-form" />
      <div>
        <header>image goes here</header>
        <h2 style={{background: "#00aeef", color: "white", textAlign: "center", letterSpacing: "0.2em", fontSize: "1.8rem"}}>ANMELDUNG</h2>
        <p>Bitte senden Sie uns Ihre Anmeldung per Email: <span>info@baerenherz.org</span></p>
      </div>
      <div className="signupform-fields">
        <p>
          <label>Vorname<input type="text" name="vorname" /></label>
        </p>
        <p>
          <label>Name<input type="text" name="name" /></label>
        </p>
        <p>
          <label>Firma, Funktion<input type="text" name="firma" /></label>
        </p>
        <p>
          <label>Heimatclub, Hcp.<input type="text" name="heimatclub" /></label>
        </p>
        <p>
          <label>Strasse, Nr.<input type="text" name="strasse" /></label>
        </p>
        <p>
          <label>PLZ, Ort<input type="text" name="plz" /></label>
        </p>
        <p>
          <label>Telefon/Telefax<input type="text" name="telefon" /></label>
        </p>
        <p>
          <label>Email<input type="email" name="email" /></label>
        </p>
      </div>

      <div className="d-flex flex-column signupform-checkboxes">
        <p>
          <input type="checkbox" name="teilnahmebestätigung"/><label>&nbsp;&nbsp;Ja, ich/wir nehmen am Charity Golf Cup 2022 teil.</label>
        </p>
        <p>
          <label><input type="checkbox" name="nur-gala"/>&nbsp;&nbsp;Ich/ wir nehmen ausschliesslich an der Charity Golf Cup Gala teil.</label>
        </p>
        <p className="d-flex">
          <div>
          <input type="checkbox" name="gala"/>
          <label>&nbsp;&nbsp;Ich komme in Begleitung von&nbsp;&nbsp;</label>
          </div>
          <div className="d-flex">
            <div className="d-flex flex-column"><input type="text" name="begleitung-name" /><label>Vorname,Name</label></div>
            <div className="d-flex flex-column"><input type="text" name="begleitung-club" /><label>Heimatclub, Hcp.</label></div>
            </div>
        </p>
        <p>
          <input type="checkbox" class="signupform-checkbox" name="nur-gala"/>
          <label>&nbsp;&nbsp;Ich/ wir nehmen als Privatpersonen teil.</label>
          <p><label>Teilnahme:&nbsp;&nbsp;</label>
            <input type="checkbox" name="privatpersonen-golf-und-gala"/>
            <label>&nbsp;&nbsp;Golfturnier & Gala: 285,00 CHF&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="checkbox" name="privatpersonen-nur-gala"/>
            <label>&nbsp;&nbsp;Nur Gala: 285,00 CHF</label>
          </p>
        </p>
          </div>


          <div className="flug">
            <input type="checkbox" name="nur-gala"/>
            <label>&nbsp;&nbsp;Wir möchten einen eigenen Flight buchen</label>
    <p>Kosten für einen 4er-Flight: 1.140,00 CHF</p>
    <div class="flug-felder">
      <p class="flug-row">
        <div class="flugdetail"><input type="text" name="flugticket-1-vorname" /><label>Vorname</label></div>
        <div class="flugdetail"><input type="text" name="flugticket-1-name" /><label>Name</label></div>
        <div class="flugdetail"><input type="text" name="flugticket-1-heimatclub-hcp" /><label>Heimatclub, Hcp.</label></div>
      </p>
      <p class="flug-row">
        <div class="flugdetail"><input type="text" name="flugticket-2-vorname" /><label>Vorname</label></div>
        <div class="flugdetail"><input type="text" name="flugticket-2-name" /><label>Name</label></div>
        <div class="flugdetail"><input type="text" name="flugticket-2-heimatclub-hcp" /><label>Heimatclub, Hcp.</label></div>
      </p>
      <p class="flug-row">
        <div class="flugdetail"><input type="text" name="flugticket-3-vorname" /><label>Vorname</label></div>
        <div class="flugdetail"><input type="text" name="flugticket-3-name" /><label>Name</label></div>
        <div class="flugdetail"><input type="text" name="flugticket-3-heimatclub-hcp" /><label>Heimatclub, Hcp.</label></div>
      </p>
      <p class="flug-row">
        <div class="flugdetail"><input type="text" name="flugticket-4-vorname" /><label>Vorname</label></div>
        <div class="flugdetail"><input type="text" name="flugticket-4-name" /><label>Name</label></div>
        <div class="flugdetail"><input type="text" name="flugticket-4-heimatclub-hcp" /><label>Heimatclub, Hcp.</label></div>
      </p>
    </div>
          </div>

          <br/>
          <p>
            <button type="submit">Send</button>
          </p>
    </form>
  )
}


export default SignUpForm
