import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import Mailchimp from "../components/Mailchimp"

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  return (
	  <section className="section section--gradient">

      <div className="container">
          <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
          <h2 className="title has-text-weight-bold is-bold-light" style={{color: "#0023A5", fontSize: "3rem"}}>
	  Unsere Philosophie
              </h2>
	  <h3>Die Grundidee unseres Vereins ist es, da zu helfen, wo Hilfe wirklich gebraucht wird, um Leben zu retten, lebens werte Bedingungen zu schaffen oder in unverschuldeten Notsituationen einen schnellen und unbürokratischen Beitrag zur Soforthilfe der Betroffenen zu leisten.</h3>
            </div>
          </div>
        </div>
      </div>
	  </section>

  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
	  <Layout>
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

      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
	  />
	  <div style={{background: "#D0E4F5", padding: "1em 2em"}}>
	  <h3 style={{padding: "1em 4em", textAlign: "center", fontWeight: "bold"}}>Die Philosophie unseres Vereins beruht auf einigen drei Grundgedanken:</h3>
	  <div style={{padding: "2em 4em", display: "flex", justifyContent: "space-between"}}>
	  <div className="circle-with-text">
	  Unötige Kosten vermeiden
          </div>
	  <div className="circle-with-text">
	  Ehrenamtlich aus Überzeugung
          </div>
	  <div className="circle-with-text">
	  Hilfe zur Selbsthilfe
          </div>
	  </div>
	  <p style={{padding: "2em 4em", fontSize: "1.5rem"}}>Wir wollen unnötige Kosten vermeiden: Unsere administrativen Aufwendungen halten wir auf einem Minimum und finanzieren diese intern durch unsere Mitgliedbeiträge und sonstigen finanziellen Zuwendungen der Mit glieder und Vorstände. Wir arbeiten ehrenamtlich und aus Überzeugung: Alles was wir bewegen, machen wir mit viel Freunde und Elan in unserer Freizeit, weil wir wissen, dass wir damit einen wertvollen Beitrag für Leben unter lebenswerten Bedingungen leisten können. So wie in der Vergangenheit bei Project Hope e.V. leisten auch wir in den von uns unterstützen Projekten Hilfe zur Selbsthilfe: Wir wollen nicht einfach materielle Zuwendun gen geben, sondern aktiv die jeweilige Notsituation so verbessern, dass mittel- bis langfristig eine nachhaltige Verbesserung erreicht werden kann. Diese Hilfe erreichen wir im Wesentlichen mit unseren Charity Aktionen. Hier möchten wir in einem spannenden Umfeld gemeinsam Spass haben aber gerade mit dem Wissen über un sere persönliche privilegierte Lebenssituation auch einen Teil an diejenigen weiterreichen, denen es nicht so gut geht. Das ist unser Antrieb und unsere Motivation. </p>
	  </div>
	  <br />




            
	  <div style={{background: "#033277"}}>
	  <div style={{width: "70%", display: "flex", margin: "0 auto", padding: "2em"}} className="newsletter-box">
	  <h4 style={{color: "white", fontSize: "2.5rem", fontWeight: "bold"}}>Bleiben Sie informiert!</h4>
	  <div style={{display: "flex", flexDirection: "column"}}>
	  <p style={{color: "white", marginTop: "1em", fontSize: "1rem"}}>Wir informieren Sie unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>
	  <Mailchimp />
	  </div>
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

    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
