import * as React from "react";
import { graphql } from 'gatsby';
import PropTypes from "prop-types";

import Layout from "../../components/Layout";
import Mailchimp from "../../components/Mailchimp"

import golfer from "../../img/golfer.png"
import albego from "../../img/albego.jpg"
import mmp from "../../img/mmp.png"
import ski from  "../../img/ski.png"
import ey from  "../../img/EY.jpg"


class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
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
        <section className="section">
          <div className="container">
            <div id="golf-tunier" className="content">
	    <img src={golfer} />
	    <div
	style={{
	    margin: "2em auto",
        }}
	    >

	    <br />
	    <br />	    



	    {/*
	    <p style={{display: "flex", alignItems: "center"}}><a
	  style={{
	      background: "#0023A5",
	      color: "white",
	      margin: "1em auto",
	      padding: "1em",
        }}
>Hier vormerken </a></p>
	     */}
	
	    	    <div className="partner-logos-container">
	    <h3 style={{color: "#0023A5"}}>Unsere Partner:</h3>
	    <div className="partner-logos">
	    <img src={ey} />
	    <img src={mmp} />
	    <img src={albego} />
	    </div>
	    </div>

	    </div>
            </div>
          </div>
            </section>

	  <div style={{background: "#033277"}}>
	  <div style={{width: "70%", display: "flex", margin: "0 auto", padding: "2em"}} className="newsletter-box">
	  <h4 style={{color: "white", fontSize: "2.5rem", fontWeight: "bold"}}>Bleiben Sie informiert!</h4>
	  <div style={{display: "flex", flexDirection: "column"}}>
	  <p style={{color: "white", marginTop: "1em", fontSize: "1rem"}}>Wir informieren Sie über unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>
	  <Mailchimp />
	  </div>
	  </div>
         </div>

	            <section className="section">
          <div className="container">
            <div id="ski-tag" className="content">
	    <img src={ski} />
	    <div
	style={{
	    margin: "2em auto",
        }}
	    >
	    {/*
	    <p style={{display: "flex", alignItems: "center"}}><a
	  style={{
	      background: "#0023A5",
	      color: "white",
	      margin: "1em auto",
	      padding: "1em",
        }}
>Hier vormerken </a></p>
	     */}
	    </div>
            </div>
          </div>
            </section>
      </Layout>
    );
  }
}


export const EventsPageTemplate = ({
    title,
    description,
}) => {
    return (
	    <div>
	    <h3 className="has-text-weight-semibold">{title}</h3>
	    <h3 className="has-text-weight-semibold">{description}</h3>
	</div>
    )
}

EventsPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,

};


const EventsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
	  <Layout>
      <EventsPageTemplate
      title={frontmatter.title}
      description={frontmatter.description}
      />
    </Layout>
  );
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
        title 
        description
      }
    }
  }
`;





