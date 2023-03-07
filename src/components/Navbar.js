import React from 'react'
import { Link } from 'gatsby'
import logo_header from '../img/logo_header.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import { NavDropdown } from 'react-bootstrap'

import '../styles/styles.css'

const Navbar = class extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			active: false,
			navBarActiveClass: ''
		}
	}

	toggleHamburger() {
		// toggle the active boolean in the state
		this.setState(
			{
				active: !this.state.active
			},
			// after state has been updated,
			() => {
				// set the class in state for the navbar accordingly
				this.state.active
					? this.setState({
							navBarActiveClass: 'is-active'
					  })
					: this.setState({
							navBarActiveClass: ''
					  })
			}
		)
	}

	render() {
		return (
			<nav className="navbar" role="navigation" aria-label="main-navigation">
				<div className="container">
					<div className="navbar-brand">
						<Link to="/" className="navbar-item" title="Logo">
							<img src={logo_header} alt="logo" />
						</Link>
						{/* Hamburger menu */}
						<div
							className={`navbar-burger burger ${this.state.navBarActiveClass}`}
							data-target="navMenu"
							role="menuitem"
							tabIndex={0}
							onKeyPress={() => this.toggleHamburger()}
							onClick={() => this.toggleHamburger()}
						>
							<span />
							<span />
							<span />
						</div>
					</div>
					<div
						id="navMenu"
						className={`navbar-menu ${this.state.navBarActiveClass}`}
					>
						<div className="navbar-start navbar-item has-text-centered">
							<NavDropdown title="Über uns" id="nav-dropdown">
								<NavDropdown.Item eventKey="Philosophie">
									<Link to="/about#philosophie">Philosophie</Link>
								</NavDropdown.Item>
								<NavDropdown.Item eventKey="Vorstand">
									<Link to="/about#vorstand">Vorstand</Link>
								</NavDropdown.Item>
								<NavDropdown.Item eventKey="Statuten">
									<Link to="/about#statuten">Statuten</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<Link className="navbar-item" to="/products">
								Mitgliedschaft
							</Link>
							<Link className="navbar-item" to="/projekte">
								Projekte
							</Link>
							<NavDropdown title="Aktivitäten" id="nav-dropdown" to="/events">
								<NavDropdown.Item eventKey="Charity Skitag 2023">
									<Link to="/events#ski2023">Charity Skitag 2023</Link>
								</NavDropdown.Item>

								<NavDropdown.Item eventKey="Charity Golftunier 2023">
									<Link to="/events#golf2023">Charity Golftunier 2023</Link>
								</NavDropdown.Item>
								<NavDropdown.Item eventKey="Charity Golftunier 2022">
									<Link to="/events/charity-golfturnier-2022">
										Charity Golftunier 2022
									</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<Link
								className="navbar-item"
								to="/news"
								style={{ marginRight: '1em' }}
							>
								News
							</Link>
							<Link className="spenden-button navbar-item" to="/jetzt-spenden">
								Jetzt spenden!
							</Link>
						</div>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navbar
