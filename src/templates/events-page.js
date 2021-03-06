import React, { useEffect, useState } from "react"
import { graphql } from 'gatsby'
import PropTypes from "prop-types"
import showdown from 'showdown'

import Layout from "../components/Layout"
import Gallery from "../components/Gallery"
import Mailchimp from "../components/Mailchimp"


import golfer from "../img/golfer.png"
import ski from  "../img/ski.png"

import einladung from "../../static/pdf/einladung.pdf"


// logos
import ey from  "../img/logos/EY.jpg"
import albego from "../img/logos/albego.jpg"
import mmp from "../img/logos/mmp.png"
import kitzhof from "../img/logos/Kitzhof.png"
import beuerberg from "../img/logos/Logo_Beuerberg.png"
import b_services from "../img/logos/b_selection.png"
import golf_leuk from "../img/logos/GolfLeuk_logo_.png"
import hotel from "../img/logos/hotel.jpeg"
import baur from "../img/logos/baur.png"
import oerlikon from "../img/logos/oerlikon.jpg"
import wein from "../img/logos/wein.jpg"
import sunresorts from "../img/logos/sunresorts.jpeg"
import dior from "../img/logos/Dior.svg.png"
import sensolar from "../img/logos/sensolar.png"
import porsche from "../img/logos/porschez.png"
import preis from '../img/preis.jpg'
import sieger from '../img/sieger.jpg'

import golferin from "../img/Anmeldung_Header.png"




export const EventsPageTemplate = ({
    golfturnier,
    skiweekend,
}) => {
    const converter = new showdown.Converter()
    return (
	    <div>
	      <div
            className="full-width-image-container margin-top-0 banner-aktivitaeten banner"
            style={{
                backgroundImage: `url('/img/glove.jpg')`,

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
	            Unsere Aktivit??ten
              </h1>

	          <h3><b>Spass haben und Gutes tun: Seien Sie dabei!</b></h3>
	        </div>
          </div>

	      <div>

              <div className="container">
                <div id="golf-turnier" className="content">
	              <img src={golfer} />
	              <div
	                style={{
	                    margin: "2em auto",
                    }}
	              >
	                <br />
	                <br />
	                <h3 className="has-text-weight-semibold">Das B??renherz Charity Golfturnier: Premiere gegl??ckt!</h3>
                    <Gallery/>
                    <div className="mt-3 mb-5 d-flex" style={{gap: "3em", margin: "0 auto"}}>
                    </div>
                    <p>Stolze 23???163.50 CHF an Spendengeldern hat die B??renherzfamilie bei ihrem ersten Charity Event zusammengebracht. Am 6. Mai 2022 war der Golfclub Lipperswil Turnierschauplatz der 43 Golfer, die f??r einen humanit??ren Zweck mitspielten. Das Projekt Perimac, das durch Ausbildung und verbesserte Infrastruktur die S??uglingssterblichkeit in Nord-Mazedonien drosselt, wurde dadurch unterst??tzt. Die Freude war gross bei den Projektverantwortlichen Sabine Busch und Achim Eckert von Project Hope e.V., die stellvertretend anwesend waren.</p>
                    <p>Die Namen der stolzen Gewinner des ersten Golfturniers werden auf der B??renherz Troph??e verewigt. Alle ??brigen hatten auch ohne Hauptgewinn ihr Vergn??gen an diesem Tag. Die Stimmung war dank den vielen engagierten Teilnehmern trotz anf??nglichem Regenwetter grandios. Vorfreude herrscht auf die n??chstj??hrige Austragung des Charity Golfturniers in Lipperswil am 5. Mai 2023 ??? bitte diesen Termin jetzt schon vormerken!</p>
                    <p>Vor dem n??chsten Golf Event in Lipperswil werden wir das allererste B??renherz Nikolaus Charity Ski-Weekend am 9.-11. Dezember 2022 durchf??hren. Die Flumserberge als Austragungsort und die Prominenz des Schweizer Skizirkus werden den Teilnehmern ein unvergessliches Programm bieten: ein Gaudi-Skirennen, ???Embodied Skiing???, H??ttenzauber und vieles mehr. Merken Sie sich auf jeden Fall das Datum vor! Falls nicht gen??gend Schnee liegen sollte, ist als Verschiebetermin der 31. M??rz bis 2. April 2023 vorgesehen.</p>
                    <p>Wir bedanken uns herzlich f??r die rege Teilnahme und das allgemein grosse Interesse an B??renherz. Auch wenn Sie nicht immer pers??nlich dabei sein k??nnen, werden Sie Mitglied der B??renherzfamilie, werden Sie Vereinsmitglied und unterst??tzen Sie durch ihre Mitgliedschaft humanit??re Projekte, die Leben retten.</p>
                    <div className="d-flex mb-5 flex-wrap justify-content-center" style={{maxWidth: "100%", gap: "2em"}}>
                      <img src={sieger}/>
                      <img src={preis}/>
                    </div>


	                <div className="partner-logos-container">
	                  <h3 style={{color: "#0023A5"}}>Unsere Partner:</h3>
	                  <div className="partner-logos">
	                    <img src={ey} />
	                    <img src={mmp} />
	                    <img src={albego} />
	                    <img src={kitzhof} />
                        <img src={sensolar} />
	                    <img src={b_services} />
	                    <img src={beuerberg} />
	                    <img src={golf_leuk} />
                        <img src={hotel} />
                        <img src={baur} />
                        <img src={oerlikon} />
                        <img src={wein} />
                        <img src={sunresorts} />
	                    <img src={dior} />
	                    <img src={porsche} />
	                  </div>
	                </div>
	              </div>
                </div>
              </div>


	        <div style={{background: "#033277"}}>
	          <div style={{width: "70%", display: "flex", margin: "0 auto", padding: "2em"}} className="newsletter-box">
	            <h4 style={{color: "white", fontSize: "2.5rem", fontWeight: "bold"}}>Bleiben Sie informiert!</h4>
	            <div style={{display: "flex", flexDirection: "column"}}>
	              <p style={{color: "white", marginTop: "1em", fontSize: "1rem"}}>
                    Wir informieren Sie ??ber unsere laufenden Projekte, wie ihre Spenden vor Ort Gutes tun und senden ihnen Einladungen zu unseren Veranstaltungen.</p>
	              <Mailchimp />
	            </div>
	          </div>
            </div>



	        <section className="section">
              <div className="container">
                <div id="ski-weekend" className="content">
	              <img src={ski} />
	              <div
	                style={{
	                    margin: "2em auto",
                    }}
	              >
	              </div>
	              <h3 className="has-text-weight-semibold">{skiweekend.title}</h3>
	    	      <p> Am 9.-11. Dezember 2022 werden wir das erste B??renherz Nikolaus Charity Ski-Weekend durchf??hren. Die Flumserberge als Austragungsort und die Prominenz des Schweizer Skizirkus werden den Teilnehmern ein unvergessliches Programm bieten: ein Gaudi-Skirennen, ???Embodied Skiing???, H??ttenzauber und vieles mehr. Merken Sie sich auf jeden Fall das Datum vor! Falls nicht gen??gend Schnee liegen sollte, ist als Verschiebetermin der 31. M??rz bis 2. April 2023 vorgesehen</p>
                </div>
              </div>
            </section>
	      </div>
	    </div>
    )
}


const EventsPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    return (
	    <Layout>
	      <EventsPageTemplate
            golfturnier={frontmatter.golfturnier}
            skiweekend={frontmatter.skiweekend}
	      />
	    </Layout>
    );
};

EventsPageTemplate.propTypes = {
    golfturnier: PropTypes.object,
    skiweekend: PropTypes.object,
};

EventsPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default EventsPage

export const pageQuery = graphql`
  query EventsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "events-page" } }) {
      frontmatter {
        golfturnier {
          title
          body
        }
        skiweekend {
          title
          body
        }
      }
    }
  }
`;
