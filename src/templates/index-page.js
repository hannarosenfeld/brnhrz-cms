import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";

import BlogRoll from "../components/BlogRoll";

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


  return (
	  <div>
	  <HomepageBanner style={{marginBottom: "5em"}}/>
	  
	  <p style={{margin: "3em"}}></p>
	  
            <div className="container" style={{display: "flex",alignItems: "center", flexDirection: "column"}}>
              <div style={{display: "flex", alignItems: "center", width: "77%"}} className="image-box">
	        <img src={care}/>
                <img src={radicia} />
	      </div>
	  
	  <div style={{margin: "2em auto", width: "75%"}}>
	  <div >
 	  <h3 className="has-text-weight-semibold">Headline</h3>
	  <p style={{margin: "1em auto 4em auto"}}>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
	  </div>
	  </div>
	  </div>
      
	  <div style={{background: "#033277", display: "flex", padding: "2em"}}>
	  <h4 style={{color: "white", padding: "1em", fontSize: "2.5rem", fontWeight: "bold"}}>Bleiben Sie informiert!</h4>
	  <div>
	  <p style={{color: "white", padding: "1em", fontSize: "1rem"}}>Wir informieren Sie unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>
         </div>
         </div>

          <div className="container" style={{display: "flex",alignItems: "center", flexDirection: "column", marginTop: "5em"}}>
	  <div>
	  <h3 className="has-text-weight-semibold" style={{marginBottom: "1em", textAlign: "left"}}>Bärenherz-Neuigkeiten</h3>
	        <div>
                  <BlogRoll />
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
