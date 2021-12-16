import React from "react"
import {Helmet} from "react-helmet"
import Layout from "../components/Layout";


const RaiseNow = () => (
	<div>
	<Helmet>
	<script type='text/javascript' async >
	{` window.rnw.tamaro.runWidget('.dds-widget-container', {language: 'de'}) `}
        </script>
	<script  type='text/javascript' async src="https://tamaro.raisenow.com/brenh-1353/latest/widget.js"></script>
	</Helmet>
	<div style={{width: "75%", margin: "4em auto"}} className="dds-widget-container"></div>
	</div>
)

export default RaiseNow
