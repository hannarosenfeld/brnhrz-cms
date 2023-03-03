import * as React from 'react'
import Layout from '../components/Layout'
import impressum from './impressum/index.json'
import showdown from 'showdown'

const Impressum = () => {
	const converter = new showdown.Converter()
	return (
		<Layout>
			<div
				style={{
					width: '80%',
					display: 'flex',
					flexDirection: 'column',
					margin: '0 auto'
				}}
			>
				<div style={{}}>
					<p>Bärenherz – Verein für humanitäre Hilfe</p>
					<p>c/o Rainer Mück</p>
					<p>Untersellenstrasse 27</p>
					<p>CH-8873 Amden</p>
					<p>Switzerland</p>

					<p> Vorsitzender: Rainer Mück</p>
					<p>
						<a href="mailto:info@baerenherz.org">info@baerenherz.org</a>
					</p>
				</div>

				<div style={{ margin: '2em auto' }}>
					<h2>Disclaimer</h2>
					<br />
					<div
						dangerouslySetInnerHTML={{
							__html: converter.makeHtml(impressum.body)
						}}
					/>
				</div>
			</div>
		</Layout>
	)
}

export default Impressum
