import React from 'react'

import Layout from '../components/Layout'
import CharitySkitag2023 from '../pages/events/charity-skitag-2023'
import Mailchimp from '../components/Mailchimp'

import golf23 from '../img/GOLF_2023.png'

export const EventsPageTemplate = () => {
	return (
		<>
			{/* hero Unsere Aktivitaten */}
			<header
				className="full-width-image-container margin-top-0 banner-aktivitaeten banner"
				style={{ backgroundImage: `url('/img/glove.jpg')` }}
			>
				<div className="banner-text" style={{ marginRight: '50%' }}>
					<h1
						className="has-text-weight-bold is-size-1"
						style={{
							boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
							backgroundColor: '#f40',
							color: 'white',
							lineHeight: '2.3'
						}}
					>
						Unsere Aktivitäten
					</h1>

					<h3>
						<b>Spass haben und Gutes tun: Seien Sie dabei!</b>
					</h3>
				</div>
			</header>

			<CharitySkitag2023 />

			{/* golf 2023 */}
			<section className="section">
				<div className="container">
					<div className="content">
						<img
							src={golf23}
							alt="Golftunier"
							style={{ margin: '1em 0 2em' }}
						/>
						<p>
							Wir freuen uns sehr, nach dem grossen Erfolg vom letzten Jahr,
							wieder zum Bärenherz Charity Golf am 05. Mai nach Lipperswil
							einzuladen, um gemeinsam
						</p>
						<p>Gutes zu tun und Spass zu haben. </p>
					</div>
				</div>
			</section>

			{/* footer */}
			<div style={{ background: '#033277', margin: '2em 0 0' }}>
				<div
					style={{
						width: '70%',
						display: 'flex',
						margin: '0 auto',
						padding: '2em'
					}}
					className="newsletter-box"
				>
					<h4
						style={{ color: 'white', fontSize: '2.5rem', fontWeight: 'bold' }}
					>
						Bleiben Sie informiert!
					</h4>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<p style={{ color: 'white', marginTop: '1em', fontSize: '1rem' }}>
							Wir informieren Sie über unsere laufenden Projekte, wie ihre
							Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren
							Veranstaltungen.
						</p>
						<Mailchimp />
					</div>
				</div>
			</div>
		</>
	)
}

export default function EventsPage() {
	return (
		<Layout>
			<EventsPageTemplate />
		</Layout>
	)
}
