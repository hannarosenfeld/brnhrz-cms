import React from 'react'


function SignUpForm() {
  return(
    <form className="signupform" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
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
      <br/>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}


export default SignUpForm
