import React, { useEffect, useState } from "react";
import { graphql } from 'gatsby';
import PropTypes from "prop-types";
import showdown from 'showdown'
import { Modal, Button } from 'react-bootstrap';


import Layout from "../components/Layout";
import SignUpForm from "../components/SignUpForm"
import Mailchimp from "../components/Mailchimp"

import golfer from "../img/golfer.png"
import ski from  "../img/ski.png"

import einladung from "../../static/pdf/einladung.pdf"


// logos
import ey from  "../img/logos/EY.jpg"
import albego from "../img/logos/albego.jpg"
import mmp from "../img/logos/mmp.png"
import kitzhof from "../img/logos/Kitzhof.png"
import beuerberg from "../img/logos/Logo_Beuerberg.png"
import b_services from "../img/logos/b_selection.png"
import golf_leuk from "../img/logos/GolfLeuk_logo_.png"
import hotel from "../img/logos/hotel.jpeg"
import baur from "../img/logos/baur.png"
import oerlikon from "../img/logos/oerlikon.jpg"
import wein from "../img/logos/wein.jpg"
import sunresorts from "../img/logos/sunresorts.jpeg"
import dior from "../img/logos/Dior.svg.png"
import sensolar from "../img/logos/sensolar.png"
import porsche from "../img/logos/porschez.png"


import golferin from "../img/Anmeldung_Header.png"


function SignUpModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="signupmodal" style={{margin: "8em 0 4em 0", padding: "8em 0 14em 0"}}>
      <div className="d-flex flex-center m-4">
      <Button variant="primary" onClick={handleShow} style={{margin: "0 auto"}}>
        Hier Anmelden
      </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <SignUpForm/>
        </Modal.Body>
      </Modal>
    </div>
  );
}





export const EventsPageTemplate = ({
  golfturnier,
  skiweekend,
}) => {
  const converter = new showdown.Converter()
  return (
	<div>
	  <div
        className="full-width-image-container margin-top-0 banner-aktivitaeten banner"
        style={{
          backgroundImage: `url('/img/glove.jpg')`,

        }}
      >
	    <div
          className="banner-text"
	      style={{
		    marginRight: "50%"
		  }}
	    >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
		      color: "white",
		      lineHeight: "2.3",
            }}
          >

	        Unsere Aktivitäten
          </h1>

	      <h3><b>Spass haben und Gutes tun: Seien Sie dabei!</b></h3>
	    </div>
      </div>

	  <div>
	    <section className="section">
          <div className="container">
            <div id="golf-turnier" className="content">
	          <img src={golfer} />
	          <div
	            style={{
	              margin: "2em auto",
                }}
	          >
	            <br />
	            <br />
	            <h3 className="has-text-weight-semibold">{golfturnier.title}</h3>
	    	    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(golfturnier.body)}} className="mb-5" />
                <div className="anmelde-buttons">
                  <Button><a href="/signup">Hier Anmelden</a></Button>
                  <Button><a href={einladung} target='_blank' rel='noopener noreferrer'>Download Einladung</a></Button>
                </div>
	            <div className="partner-logos-container">
	              <h3 style={{color: "#0023A5"}}>Unsere Partner:</h3>
	              <div className="partner-logos">
	                <img src={ey} />
	                <img src={mmp} />
	                <img src={albego} />
	                <img src={kitzhof} />
                    <img src={sensolar} />
	                <img src={b_services} />
	                <img src={beuerberg} />
	                <img src={golf_leuk} />
                    <img src={hotel} />
                    <img src={baur} />
                    <img src={oerlikon} />
                    <img src={wein} />
                    <img src={sunresorts} />
	                <img src={dior} />
	                <img src={porsche} />
	              </div>
	            </div>
	          </div>
            </div>
          </div>
          <SignUpModal/>
        </section>

	    <div style={{background: "#033277"}}>
	      <div style={{width: "70%", display: "flex", margin: "0 auto", padding: "2em"}} className="newsletter-box">
	        <h4 style={{color: "white", fontSize: "2.5rem", fontWeight: "bold"}}>Bleiben Sie informiert!</h4>
	        <div style={{display: "flex", flexDirection: "column"}}>
	          <p style={{color: "white", marginTop: "1em", fontSize: "1rem"}}>
                Wir informieren Sie über unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>
	          <Mailchimp />
	        </div>
	      </div>
        </div>
	    <section className="section">
          <div className="container">
            <div id="ski-weekend" className="content">
	          <img src={ski} />
	          <div
	            style={{
	              margin: "2em auto",
                }}
	          >
	          </div>
	          <h3 className="has-text-weight-semibold">{skiweekend.title}</h3>
	    	  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(skiweekend.body)}} />
            </div>
          </div>
        </section>
	  </div>
	</div>
  )
}


const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
	<Layout>
	  <EventsPageTemplate
        golfturnier={frontmatter.golfturnier}
        skiweekend={frontmatter.skiweekend}
	  />
	</Layout>
  );
};

EventsPageTemplate.propTypes = {
  golfturnier: PropTypes.object,
  skiweekend: PropTypes.object,
};

EventsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default EventsPage

export const pageQuery = graphql`
  query EventsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "events-page" } }) {
      frontmatter {
        golfturnier {
          title
          body
        }
        skiweekend {
          title
          body
        }
      }
    }
  }
`;
