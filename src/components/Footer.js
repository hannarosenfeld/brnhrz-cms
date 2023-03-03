import React from 'react'

export default function Footer() {
	return (
		<footer className="footer has-background-black has-text-white-ter">
			<div
				className="container has-text-centered footer-content"
				style={{
					margin: '0 auto',
					padding: '1em',
					display: 'flex',
					justifyContent: 'space-between'
				}}
			>
				<div className="footer-address">
					<p>Bärenherz</p>
					<p>Verein für humanitäre Hilfe</p>
					<p>c/o Rainer Mück</p>
					<p>Untersellenstrasse 27</p>
					<p>CH-8873 Amden</p>
					<p style={{ marginTop: '2em' }}>
						Email: <a href="mailto:info@baerenherz.org">info@baerenherz.org</a>
					</p>
				</div>
				<div className="mt-5">
					<p>Spendenkonto:</p>
					<p>Bärenherz – Verein für humanitäre Hilfe</p>
					<p>Thurgauer Kantonalbank</p>
					<p>IBAN CH91 0078 4297 6098 0200 1</p>
					<p>BIC KBTGCH22</p>
				</div>
				<div
					className="mt-5"
					style={{ display: 'flex', flexDirection: 'column' }}
				>
					<a className="p-0" href="/impressum">
						Impressum
					</a>
				</div>
			</div>
		</footer>
	)
}
