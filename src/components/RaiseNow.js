import React, { useState, useEffect } from "react"
import {Helmet} from "react-helmet"

function Child() {
        return(
	    <>
	<Helmet>
	<script type='text/javascript' aysnc>
	{` window.rnw.tamaro.runWidget('.dds-widget-container', {language: 'de'}) `}
        </script>
	</Helmet>
		    <div style={{width: "75%", margin: "4em auto"}} className="dds-widget-container"></div>
	  </>  
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
	    {loaded ? <Child /> : 'not loaded'}
	</>
    )
}


export default RaiseNow
