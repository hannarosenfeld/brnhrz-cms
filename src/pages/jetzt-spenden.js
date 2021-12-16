import React, { Suspense } from "react"
import Layout from "../components/Layout";
const RaiseNow = React.lazy(() => import( "../components/RaiseNow"));

function SpendenPageTemplate() {
    return(
	    <div>
	    <div style={{width: "75%", margin: "4em auto"}} className="dds-widget-container"></div>
	    <Suspense fallback={<div>Loading...</div>}>
	    <RaiseNow />
	    </Suspense>
	</div>
    )
}

const SpendenPage = () => (
	<Layout>
	<SpendenPageTemplate />
	</Layout>
)

export default SpendenPage
