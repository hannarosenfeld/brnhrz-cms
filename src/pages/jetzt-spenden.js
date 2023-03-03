import React from 'react'
import Layout from '../components/Layout'
import RaiseNow from '../components/RaiseNow'

function SpendenPage() {
	const reloadUsingLocationHash = () => {
		window.location.hash = 'reload'
	}

	return (
		<Layout>
			<RaiseNow />
		</Layout>
	)
}

export default SpendenPage
