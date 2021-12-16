import React from "react"
import Layout from "../components/Layout";
import { Suspense, lazy } from 'react';

const RaiseNow  = React.lazy(() => import("../components/RaiseNow"));

const SpendenPage = () => (
	<Layout>
	<div>
	<Suspense fallback={<div>Loading...</div>}>
	<RaiseNow />
	</Suspense>
	</div>
	</Layout>
)

export default SpendenPage
