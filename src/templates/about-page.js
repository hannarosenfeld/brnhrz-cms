import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
//import Content, { HTMLContent } from "../components/Content";
//import { MDXProvider } from "@mdx-js/react"
//import { MDXRenderer } from "gatsby-plugin-mdx"
import showdown from 'showdown'

import Layout from "../components/Layout";

import Mailchimp from "../components/Mailchimp"



// eslint-disable-next-line
export const AboutPageTemplate = ({
    philosophie,
    vorstand,
    statuten,
    kreise,
}) => {

    const converter = new showdown.Converter()

    return (
	<div>
		    <div
        className="full-width-image-container margin-top-0 banner-aktivitaeten banner"
        style={{
            backgroundImage: `url('/img/philosophie.jpg')`,
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
	    Philosophie
        </h1>
	    <h3><b>Direkte Hilfe, unbürokratisch und schnell.</b></h3>
	    </div>
            </div>

	  <section className="section section--gradient">
      <div className="container">
            <div className="section">
	    <div id="philosophie">
	    <h2 className="title has-text-weight-bold is-bold-light" style={{color: "#0023A5", fontSize: "3rem"}}>{philosophie.title}</h2>	
	    {philosophie.body}
	    <br />
	    <br />
	    <div style={{background: "#D0E4F5", paddingBottom: "2em"}}>
	    <div style={{width: "90%", display: "flex", flexDirection: "column", margin: "0 auto"}}>
	    <h3 style={{padding: "1em 4em", textAlign: "center", fontWeight: "bold"}}>{philosophie.kreise.heading}</h3>
	    <div className="circle-container" style={{display: "flex", justifyContent: "space-between"}}>
	    <div className="circle-section">
	    <div className="circle-with-text">
	    Hilfe zur Selbsthilfe
	</div>
	    <br />
	    	    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(philosophie.kreise.first)}} />

	    </div>
	    <div  className="circle-section">
	    <div className="circle-with-text">
	    Ehrenamtlich aus Überzeugung
	</div>
	    <br />
	    	    	    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(philosophie.kreise.second)}} />
	    </div>
	    <div className="circle-section">
	    <div className="circle-with-text">
	    Unnötige Kosten vermeiden
        </div>
	    <br/>
	    	    	    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(philosophie.kreise.third)}} />	    
	    </div>
	</div>
	    <div>
	    <br />
	    	    	    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(philosophie.kreise.description)}} />	    
	<br />
	    </div>
	    </div>
	</div>
	    </div>
	    <div id="vorstand" style={{margin: "4em auto 0 auto"}}>
	    <div>
	    <h2 className="title has-text-weight-bold is-bold-light" style={{color: "#0023A5", fontSize: "3rem"}}>{vorstand.title}</h2>
	    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(vorstand.body)}} />

	    </div>
	    </div>



            </div>
      </div>
	    </section>
	
	
	
	    <div style={{background: "#033277"}}>
	    <div className="container">
	    <div style={{display: "flex", margin: "0 auto", padding: "2em 0"}} className="newsletter-box">
	    <h4 style={{color: "white", fontSize: "2.5rem", fontWeight: "bold"}}>Bleiben Sie informiert!</h4>
	    <div style={{display: "flex", flexDirection: "column"}}>
	    <p style={{color: "white", marginTop: "1em", fontSize: "1rem"}}>Wir informieren Sie über unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>
	    <Mailchimp />
	    </div>
	    </div>
	    </div>
            </div>

	
	  <section className="section section--gradient">
      <div className="container">
            <div className="section">

	    <div id="statuten" style={{margin: "1em auto"}}>
	    <h2 className="title has-text-weight-bold is-bold-light" style={{color: "#0023A5", fontSize: "3rem"}}>{statuten.title}</h2>
	    <br />
	    <br />
	        	    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(statuten.body)}} />
	    	    </div>
        </div>
      </div>
	    </section>

	
	    </div>
  );
};

AboutPageTemplate.propTypes = {
  philosophie: PropTypes.object,
    vorstand: PropTypes.object,
    statuten: PropTypes.object,
    kreise: PropTypes.object,        
};

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
    return (
	    <Layout>
	    <AboutPageTemplate
        philosophie={frontmatter.philosophie}      
        vorstand={frontmatter.vorstand}
        statuten={frontmatter.statuten}
        kreise={frontmatter.kreise}      		
	  />
	</Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default AboutPage;


export const aboutPageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        philosophie {
          title
          body
          kreise {
          heading
          first
          second
          third
          description
         }
       }
        vorstand {
          title
          body
        }
        statuten {
          title
          body
        }
      }
    }
  }
`;
