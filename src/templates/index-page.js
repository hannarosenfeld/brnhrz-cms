import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Mailchimp from "../components/Mailchimp"
import HomepageBanner from "../components/HomepageBanner"


export const IndexPageTemplate = ({
    title,
    description,    
}) => {
  return (
	  <div>
      {/* Banner img initial */}
        <HomepageBanner style={{marginBottom: "5em"}}/>

        <p style={{margin: "3em"}}></p>
        
        {/* Über uns */}
        <div className="container" style={{display: "flex",alignItems: "center", flexDirection: "column"}}>
            <div style={{padding: "3em 0 2em 0"}}>
                <h3 className="has-text-weight-semibold">{title}</h3>
                <p>{description}</p>
            </div>
            <br/>
            <br/>	  
        </div>
          
        {/* Bleiben Sie informiert */}
        <div style={{background: "#033277"}}>
            <div className="container">
                <div style={{display: "flex", margin: "0 auto", padding: "3em 0"}} className="newsletter-box">
                    <h4 style={{color: "white", fontSize: "2.5rem", fontWeight: "bold"}}>Bleiben Sie informiert!</h4>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <p style={{color: "white", marginTop: "1em", fontSize: "1rem"}}>Wir informieren Sie über unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>
                        <Mailchimp />
                    </div>
                </div>
            </div>
        </div>

	  </div>
	  
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,

};

export default function IndexPage ({ data }) {
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



export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
