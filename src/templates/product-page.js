import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const ProductPageTemplate = ({
  image,
    title,
    subheading,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => {
  const heroImage = getImage(image) || image;
  const fullWidthImage = getImage(fullImage) || fullImage;

  return (
	  <div className="content">
	  <div className="banner">
	  <FullWidthImage img={heroImage} title="Mitgliedschaft" subheading="Gemeinsam dort helfen, wo Hilfe gebraucht wird." />
	  </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-7 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
          <p>{description}</p>
	  <div className="mitgliedschaft-form-container">
	  <div className="mitgliedschaft-form-left">
	  <h4>Persönliche Mitgliedschaft</h4>
	  <p>Jahresbeitrag CHF 250.00</p>
	  <div className="mitgliedschaft-form-button">
	  <a>Persönliches Mitglied werden</a>
	  </div>
	  </div>
	  <div className="mitgliedschaft-form-right">
	  <h4>Unternehmensmitgliedschaft</h4>
	  <p>Jahresbeitrag CHF 1'000.00</p>
<div className="mitgliedschaft-form-button">
          <a>Unternehmensmitglied werden</a>
</div>
	  </div>
	  </div>
<p>Der Jahresbeitrag ist jeweils für das Kalenderjahr geschuldet. Bitte füllen Sie das verknüpfte Antragsfor mular aus und reichen Sie dieses ein an info@baerenherz.org oder per Post an Bärenherz – Verein für humanitäre Hilfe, c/o Rainer Mück, Untersellenstrasse 37, 8873 Amden. Der Vorstand entscheidet über die Aufnahme neuer Vereinsmitglieder. 
</p>
<div className="mitgliedschaft-testimony">
<h4>„Mit meiner Mitgliedschaft kann ich die großartige
Arbeit von Bärenherz unterstützen und habe
das gute Gefühl, eine Hilfe zu leisten, die auch
ankommt.“</h4>
<p><b>Arno Bohn</b></p>
<p>Selbständiger Unternehmer, Freiburg im Breisgau</p>
</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

ProductPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
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
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
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
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(width: 526, quality: 92, layout: CONSTRAINED)
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                gatsbyImageData(quality: 72, layout: FULL_WIDTH)
              }
            }
          }
        }
        testimonials {
          author
          quote
        }

        full_image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`;
