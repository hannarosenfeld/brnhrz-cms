import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

import showdown from 'showdown'

import projekte1 from '../img/projekte1.jpg'
import projekte2 from '../img/projekte2.jpg'
import projekte3 from '../img/projekte3.jpg'
import projekte4 from '../img/projekte4.jpg'
import projecthope from '../img/logo-project-hope.png'

import projekte from './projekte/index.json'

const ProjektePage = ({ data }) => {
	const converter = new showdown.Converter()
	return (
		<Layout>
			<div
				className="full-width-image-container margin-top-0 banner-projekte banner"
				style={{
					backgroundImage: `url('img/ultrasound.jpg')`
				}}
			>
				<div
					className="banner-text"
					style={{
						marginRight: '50%'
					}}
				>
					<h1
						className="has-text-weight-bold is-size-1"
						style={{
							boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
							backgroundColor: '#f40',
							color: 'white',
							lineHeight: '2.3'
						}}
					>
						Projekte
					</h1>
					<h3>
						<b>Hilfe für die Schwächsten. Direkt und lebensrettend.</b>
					</h3>
				</div>
			</div>

			<div
				className="container"
				style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column'
				}}
			>
				<div style={{ margin: '3em 13% 0 13%', width: '75%' }}>
					<div>
						<div
							dangerouslySetInnerHTML={{
								__html: converter.makeHtml(projekte.einleitung)
							}}
						/>

						<p>
							<b>
								<span>&nbsp;</span>
							</b>
						</p>

						<div
							dangerouslySetInnerHTML={{
								__html: converter.makeHtml(projekte.body)
							}}
						/>

						<p>
							<span>&nbsp;</span>
						</p>

						<div className="blaue-kaesten">
							<div className="medizin-container">
								<p>
									<b>Medizintechnik</b>
								</p>
								<br />
								<div
									dangerouslySetInnerHTML={{
										__html: converter.makeHtml(projekte.medizintechnik)
									}}
								/>
							</div>

							<p>
								<span>&nbsp;</span>
							</p>
							<div className="fortbildung-container">
								<p>
									<b>Fortbildung</b>
								</p>
								<br />
								<div
									dangerouslySetInnerHTML={{
										__html: converter.makeHtml(projekte.fortbildung)
									}}
								/>
							</div>
						</div>
						<p>
							<span>&nbsp;</span>
						</p>

						<div
							dangerouslySetInnerHTML={{
								__html: converter.makeHtml(projekte.description)
							}}
						/>

						<p>
							<span>&nbsp;</span>
						</p>

						<p>
							<span>&nbsp;</span>
						</p>

						<p>
							<span>&nbsp;</span>
						</p>
					</div>
				</div>
				<div className="fourimages">
					<img src={projekte1} />
					<img src={projekte2} />
					<img src={projekte3} />
					<img src={projekte4} />
				</div>

				<div
					style={{ display: 'flex', margin: '1em auto 3em auto', width: '75%' }}
				>
					<div style={{ width: '50%' }}>
						<div
							dangerouslySetInnerHTML={{
								__html: converter.makeHtml(projekte.projecthope)
							}}
						/>
					</div>
					<div style={{ margin: '1em 0 0 2em' }}>
						<img src={projecthope} style={{ margin: '0 20%' }} />
						<br />
						<br />
						<a href="https://www.projecthope.de/" style={{ margin: '4em 20%' }}>
							www.projecthope.de
						</a>
					</div>
				</div>
			</div>

			<div style={{ background: '#84B9E4' }}>
				<div className="spenden-content">
					<h4
						style={{
							color: 'white',
							padding: '1em',
							fontSize: '2.8rem',
							fontWeight: 'bold',
							width: '60%'
						}}
					>
						Mit Ihrer Spende helfen Sie uns, Leben zu retten.
					</h4>
					<a
						className="jetzt-spenden-button"
						style={{
							color: 'white',
							fontSize: '1.3rem',
							background: '#033277'
						}}
						href="/jetzt-spenden"
					>
						Jetzt spenden
					</a>
				</div>
			</div>

			<div className="mitgliedschaft-testimony" style={{ background: 'none' }}>
				<h3 style={{ color: '#033277' }}>
					„Mit meiner Mitgliedschaft kann ich die großartige Arbeit von
					Bärenherz unterstützen und habe das gute Gefühl, eine Hilfe zu
					leisten, die auch ankommt.“
				</h3>
				<div style={{ color: '#033277', lineHeight: '0.2', marginTop: '4em' }}>
					<h4 style={{ margin: '1em' }}>
						<b>Arno Bohn</b>
					</h4>
					<h4>Selbständiger Unternehmer, Freiburg im Breisgau</h4>
				</div>
			</div>
		</Layout>
	)
}

export default ProjektePage
