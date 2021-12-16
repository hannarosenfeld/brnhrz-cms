import React, { Suspense } from "react"
import Layout from "../components/Layout";
const RaiseNow = React.lazy(() => import( "../components/RaiseNow"));

function SpendenPage() {
    return(
	<Layout>
	    <Suspense fallback={<div>Loading...</div>}>
	    <RaiseNow />
	    </Suspense>
	    	</Layout>

    )
}

export default SpendenPage
