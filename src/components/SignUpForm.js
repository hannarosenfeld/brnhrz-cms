import React from 'react'


function SignUpForm() {
  return(
    <form className="signupform" name="turnier-form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="turnier-form" />
      <div style={{margin: "0 auto", padding: "0.5em"}}>
        <header>image goes here</header>
        <h2 style={{background: "#00aeef", color: "white", textAlign: "center", letterSpacing: "0.2em", fontSize: "1.8rem", margin: "0.5em auto"}}>ANMELDUNG</h2>
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
          <label><input type="checkbox" name="teilnahmebestätigung"/>Ja, ich/wir nehmen am Charity Golf Cup 2022 teil.</label>
        </p>
        <p>
          <label>
            <input type="checkbox" name="gala"/>
            Ich komme in Begleitung von
            <input type="text" name="begleitung-name" />
            <input type="text" name="begleitung-club" />
          </label>
        </p>
      </div>
      <br/>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}


export default SignUpForm
