import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";


// eslint-disable-next-line
export const EventPageTemplate = ({ skiweekend, golfturnier }) => {
    return (
  );
};

EventPageTemplate.propTypes = {
  skiweekend: PropTypes.string,
  golfturnier: PropTypes.string,
};

const EventPage = ({ data }) => {
  const { markdownRemark: event } = data;
    return (
    <Layout>
    </Layout>
  );
};

EventPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EventPage;

export const eventPageQuery = graphql`
  query EventPage {
    markdownRemark {
      frontmatter {
        skiweekend,
        golfturnier
      }
    }
  }
`;
