import * as React from "react";

import logo from "../img/logo.png";
//import facebook from "../img/social/facebook.svg";
//import instagram from "../img/social/instagram.svg";
//import twitter from "../img/social/twitter.svg";
//import vimeo from "../img/social/vimeo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
            <div className="container has-text-centered footer-content" style={{margin: "0 auto", padding: "1em", display: "flex", justifyContent: "space-between"}}>
	      <div className="footer-address">
		  <p>Bärenherz</p>
		  <p>Verein für humanitäre Hilfe</p>
		  <p>c/o Rainer Mück</p>
		  <p>Untersellenstrasse 27</p>
		  <p>CH-8873 Amden</p>
		  <p style={{marginTop: "2em"}}>Email: <a href="mailto:info@baerenherz.org" >info@baerenherz.org</a></p>
		  </div>
              <div className="mt-5" style={{display: "flex", flexDirection: "column"}}>
	            <a className="p-0" href="/impressum" >Impressum</a>
                <a className="pt-2" href="/news" >Newsletter</a>
              </div>
            </div>
	    {/*
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw"}} className="columns">
            <div className="column is-4 social" style={{margin: "0 auto"}}>
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
             </div>
             </div>
	     */}
      </footer>
    );
  }
};

export default Footer;
