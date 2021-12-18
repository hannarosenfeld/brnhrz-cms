import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import BlogRoll from "../components/BlogRoll";
import Mailchimp from "../components/Mailchimp"
import HomepageBanner from "../components/HomepageBanner"

import care from "../img/care.jpg"
import radicia from "../img/radicia.jpeg"


// eslint-disable-next-line
export const IndexPageTemplate = ({
    title,
    subheading,
    description,    
}) => {


  return (
	  <div>
	  <HomepageBanner style={{marginBottom: "5em"}}/>
	  
	  <p style={{margin: "3em"}}></p>
	  
            <div className="container" style={{display: "flex",alignItems: "center", flexDirection: "column"}}>
          <div style={{display: "flex", alignItems: "center", width: "77%", margin: "2em auto"}} className="image-box">
	        <img src={care}/>
                <img src={radicia} />
	      </div>
	  
	  <div style={{margin: "2em auto", width: "75%"}}>
	  <div >
 	  <h3 className="has-text-weight-semibold">{title}</h3>
                      <p>{description}</p>
	  </div>
	  </div>
	  </div>
      
	  <div style={{background: "#033277"}}>
	  <div style={{width: "80%", display: "flex", margin: "0 auto", padding: "2em"}} className="newsletter-box">
	  <h4 style={{color: "white", fontSize: "2.5rem", fontWeight: "bold"}}>Bleiben Sie informiert!</h4>
	  <div style={{display: "flex", flexDirection: "column"}}>
	  <p style={{color: "white", marginTop: "1em", fontSize: "1rem"}}>Wir informieren Sie über unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>
	  <Mailchimp />
	  </div>
	  </div>
         </div>

      {/*
          <div className="container" style={{display: "flex",alignItems: "center", flexDirection: "column", margin: "5em auto"}}>
	  <div>
	  <h3 className="has-text-weight-semibold" style={{marginBottom: "1em", textAlign: "left"}}>Bärenherz-Neuigkeiten</h3>
	        <div>
                  <BlogRoll />
	  </div>
	  </div>
	  </div>
       */}


      {/*	  <div className="mitgliedschaft-testimony">
<h3 style={{color: "white"}}>„Mit meiner Mitgliedschaft kann ich die großartige
Arbeit von Bärenherz unterstützen und habe
das gute Gefühl, eine Hilfe zu leisten, die auch
ankommt.“</h3>
<div style={{lineHeight: "0.2", marginTop: "4em"}}>
	  <h4 style={{margin: "1em"}}><b>Arno Bohn</b></h4>
<h4>Selbständiger Unternehmer, Freiburg im Breisgau</h4>
</div>
</div>
       */}
	  </div>
	  
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,

};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
	  <Layout>
      <IndexPageTemplate
      title={frontmatter.title}
      description={frontmatter.description}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        description
      }
    }
  }
`;
