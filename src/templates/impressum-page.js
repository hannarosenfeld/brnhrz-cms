import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

// eslint-disable-next-line
export const ImpressumPageTemplate = ({ title }) => {
	return (
		<div>
			<section
				className="section section--gradient"
				style={{ width: '80%', margin: '0 auto' }}
			>
				<div className="container">
					<div className="section"></div>
				</div>
			</section>
		</div>
	)
}

ImpressumPageTemplate.propTypes = {
	title: PropTypes.string
}

const ImpressumPage = ({ data }) => {
	const { frontmatter } = data.markdownRemark
	return (
		<Layout>
			<ImpressumPageTemplate title={frontmatter.title} />
		</Layout>
	)
}

ImpressumPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
}

export default ImpressumPage

export const pageQuery = graphql`
	query ImpressumPageTemplate {
		markdownRemark(frontmatter: { templateKey: { eq: "impressum-page" } }) {
			frontmatter {
				title
			}
		}
	}
`
