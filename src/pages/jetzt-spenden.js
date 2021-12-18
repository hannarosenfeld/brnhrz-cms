import React from "react"
import Layout from "../components/Layout";
const RaiseNow = React.lazy(() => import( "../components/RaiseNow"));

function SpendenPage() {
    return(
	<Layout>
	    <RaiseNow />
	    	</Layout>

    )
}

export default SpendenPage
