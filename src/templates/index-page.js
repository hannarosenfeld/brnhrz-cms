import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

import HomepageBanner from "../components/HomepageBanner"

import care from "../img/care.jpg"
import radicia from "../img/radicia.jpeg"


// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
}) => {
  const heroImage = getImage(image) || image;

  return (
	  <div>
	  <HomepageBanner style={{marginBottom: "5em"}}/>
	  <div style={{margin: "3em"}}></div>
          <div className="container" style={{display: "flex",alignItems: "center", flexDirection: "column"}}>
	  <div style={{display: "flex", alignItems: "center", padding: "2em"}} className="image-box">
	  <img src={care}/>
	  <img src={radicia} />
	  </div>
          <h3 className="has-text-weight-semibold" style={{marginBottom: "1em"}}>
	  Bärenherz-Neuigkeiten
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
      </Link>
	  
          </div>
          </div>
	  	    <div style={{background: "#033277", display: "flex", padding: "2em"}}>
	    <h4 style={{color: "white", padding: "1em", fontSize: "2.5rem", fontWeight: "bold"}}>Bleiben Sie informiert!</h4>
	    <div>
	    <p style={{color: "white", padding: "1em", fontSize: "1rem"}}>Wir informieren Sie unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>

	    </div>
	    </div>

	  <div className="mitgliedschaft-testimony">
<h4 style={{color: "white"}}>„Mit meiner Mitgliedschaft kann ich die großartige
Arbeit von Bärenherz unterstützen und habe
das gute Gefühl, eine Hilfe zu leisten, die auch
ankommt.“</h4>
<div style={{lineHeight: "0.2", marginTop: "4em"}}>
	  <p style={{fontSize: "1.2vw", margin: "1em"}}><b>Arno Bohn</b></p>
<p style={{fontSize: "1vw"}}>Selbständiger Unternehmer, Freiburg im Breisgau</p>
</div>
</div>

	  </div>
	  
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
	  <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
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
        heading
        subheading
      }
    }
  }
`;
