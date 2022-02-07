import React, { useState, useEffect } from "react"
import {Helmet} from "react-helmet"

import Loading from "./Loading"

function Child() {
  return(
	<div style={{width: "75%", margin: "4em auto"}} >
	  <Helmet>
	    <script type='text/javascript' aysnc>
	      {` window.rnw.tamaro.runWidget('.dds-widget-container', {language: 'de'}) `}
        </script>
	  </Helmet>
	  <div className="dds-widget-container"></div>
	</div>
  )
}

function RaiseNow() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
	const scriptTag = document.createElement('script')
	scriptTag.src='https://tamaro.raisenow.com/brenh-1353/latest/widget.js'
	scriptTag.addEventListener('load', ()=> setLoaded(true))
	document.body.appendChild(scriptTag)
  }, []);

  useEffect(() => {
	if (!loaded) return;
  }, [loaded])

  return (
	<>
	  {loaded ? <Child /> : <Loading/>}
	</>
  )
}


export default RaiseNow
