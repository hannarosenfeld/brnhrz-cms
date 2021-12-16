import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

import mitgliedschaftsantrag from "../../static/pdf/Mitgliedschaftsantrag.pdf"

// eslint-disable-next-line
export const ProductPageTemplate = ({
  image,
  title,
  subheading,
  heading,
  fullImage,
}) => {

  return (
	  <div className="">
	          <div
          className="full-width-image-container margin-top-0 banner-aktivitaeten banner"
          style={{
              backgroundImage: `url('/img/hands.jpg')`,

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
	  Mitgliedschaft
        </h1>
	  <h3><b>Gemeinsam dort helfen, wo Hilfe gebraucht wird.</b></h3>
	    </div>
	  </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="center-page">
          <h3 className="has-text-weight-semibold is-size-2" style={{marginBottom: "0.5em",}}>
                  {heading}
                </h3>
          <p>Gerne nehmen wir neue Mitglieder auf, die die Philosophie und Projekte unseres karitativen Vereins unterstützen. Es gibt zwei Arten von Mitgliedschaften:

</p>
	  <div className="mitgliedschaft-form-container">
	  <div className="mitgliedschaft-form-left">
	  <h4>Persönliche Mitgliedschaft</h4>
	  <p>Jahresbeitrag CHF 250.00</p>
	  <div className="mitgliedschaft-form-button">
	  <a href={mitgliedschaftsantrag} target='_blank' rel='noopener noreferrer'>Persönliches Mitglied werden</a>
	  </div>
	  </div>
	  <div className="mitgliedschaft-form-right">
	  <h4>Unternehmensmitgliedschaft</h4>
	  <p>Jahresbeitrag CHF 1'000.00</p>
<div className="mitgliedschaft-form-button">
          <a href={mitgliedschaftsantrag} target='_blank' rel='noopener noreferrer'>Unternehmensmitglied werden</a>
</div>
	  </div>
	  </div>
<p>Der Jahresbeitrag ist jeweils für das Kalenderjahr geschuldet. Bitte füllen Sie das verknüpfte Antragsfor mular aus und reichen Sie dieses ein an info@baerenherz.org oder per Post an Bärenherz – Verein für humanitäre Hilfe, c/o Rainer Mück, Untersellenstrasse 37, 8873 Amden. Der Vorstand entscheidet über die Aufnahme neuer Vereinsmitglieder. 
</p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/*
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
*/}

    </div>
  );
};

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ProductPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        heading={frontmatter.heading}
        fullImage={frontmatter.full_image}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default ProductPage;

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        full_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;
