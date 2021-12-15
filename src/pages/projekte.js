import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import projekte1 from "../img/projekte1.jpg"
import projekte2 from "../img/projekte2.jpg"
import projekte3 from "../img/projekte3.jpg"
import projekte4 from "../img/projekte4.jpg"
import projecthope from "../img/logo-project-hope.png"

const ProjektePage = ({ data }) => {
  return (
	  <Layout>
	          <div
          className="full-width-image-container margin-top-0 banner-projekte banner"
          style={{
              backgroundImage: `url('img/ultrasound.jpg')`,
          }}
            >
	    <div
        	className="banner-text"
	        style={{
		    marginRight: "50%"
		}}
	    >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
              backgroundColor: "#f40",
		color: "white",
		lineHeight: "2.3",

            }}
          >
	  Projekte
        </h1>
	  <h3><b>Hilfe für die Schwächsten. Direkt und lebensrettend.</b></h3>
	    </div>
	  </div>

      
          <div className="container" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
	  <div style={{margin: "5em 13% 0 13%", width: "75%"}}>
	  <p>Für 2022 haben wir uns entschlossen, die sämtliche Erlöse unseres Vereins dem Projekt PeriMAC-E von Project Hope e.V. zukommen zu lassen. </p>
	  <p>Hilfe zur Selbsthilfe als Teil unserer Philosophie heisst, dass wir die Situation in den jeweiligen Projekten langfristig und nachhaltig verbessern wollen. Das bedeutet, dass wir nicht nur Geräte und Hilfsmittel zur Verfügung stellen, sondern ganz gezielt sicherstellen wollen, dass diese Zuwendungen auch richtig zum Einsatz kommen. Daher sind Training und Ausbildung des Personals vor Ort ein wesentlicher Bestandteil. 
	  </p>
	  </div>
	  <div className="fourimages">
	  <img src={projekte1} />
	  <img src={projekte2} />
	  <img src={projekte3} />
	  <img src={projekte4} />	  
	  </div>

      
	  <div style={{display: "flex", margin: "1em auto 6em auto",width: "75%"}}>
	  <div style={{width: "50%"}}>
	  <p>Inspiriert wurden die Gründer von Bärenherz durch 
ihre langjährige aktive Unterstützung von Project Hope 
e.V. in Deutschland zur Verbesserung der Lebensbedin 
gungen von Mutter und Kind in den ärmsten Ländern 
Europas. Diesem Thema fühlen wir uns in besonderer 
Weise verbunden und werden auch zukünftig versu 
chen, als verlässlicher Partner die Arbeit von Project 
Hope e.V. aktiv zu unterstützen. 
</p>
	  </div>
	  <div style={{margin: "1em 0 0 4em"}}>
	  <img src={projecthope} style={{margin: "0 20%"}}/>
	  <a href="https://www.projecthope.de/" style={{margin: "0 20%"}}>www.projecthope.de</a>
	  </div>
	  </div>
	  </div>
	  
	  <div style={{background: "#84B9E4", display: "flex", padding: "1em 15%", alignItems: "center", marginTop: "1em", justifyContent: "space-between"}}>
	  <h4 style={{color: "white", padding: "1em", fontSize: "2.8rem", fontWeight: "bold", width: "60%"}}>
	  Mit Ihrer Spende helfen Sie uns, Leben zu retten.
	  </h4>
	  <a style={{color: "white", fontSize: "1.3rem", background: "#033277", padding: "0.5em 2em"}} href="/jetzt-spenden">Jetzt spenden</a>
	  </div>


      	  <div className="mitgliedschaft-testimony" style={{background: "none"}}>
	  <h3 style={{color: "#033277"}}>„Mit meiner Mitgliedschaft kann ich die großartige
Arbeit von Bärenherz unterstützen und habe
das gute Gefühl, eine Hilfe zu leisten, die auch
ankommt.“</h3>
	  <div style={{color: "#033277", lineHeight: "0.2", marginTop: "4em"}}>
	  <h4 style={{margin: "1em"}}><b>Arno Bohn</b></h4>
<h4>Selbständiger Unternehmer, Freiburg im Breisgau</h4>
</div>
</div>

    </Layout>
  );
};

export default ProjektePage;
