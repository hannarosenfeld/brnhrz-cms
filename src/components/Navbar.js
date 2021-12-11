import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from "react-bootstrap";

import "../styles/styles.css"

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="logo" />
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
            <NavDropdown.Item eventKey="Unsere Philosophie">
	    <Link to="/about">Unsere Philosophie</Link>
	</NavDropdown.Item>
            <NavDropdown.Item eventKey="Vorstand">Vorstand</NavDropdown.Item>
	    <NavDropdown.Item eventKey="Statuen">
	        <Link to="/about#Statuen">Statuen</Link>
	</NavDropdown.Item>
	    
            </NavDropdown>
              <Link className="navbar-item" to="/products">
                Mitgliedschaft
              </Link>
              <Link className="navbar-item" to="/blog">
                Projekte
        </Link>
	    <NavDropdown title="Aktivitäten" id="nav-dropdown">
            <NavDropdown.Item eventKey="Charity Golftunier 2022">Charity Golftunier 2022</NavDropdown.Item>
            <NavDropdown.Item eventKey="Charity Skitag 2022">Charity Skitag 2022</NavDropdown.Item>
            </NavDropdown>
                
            <Link className="spenden-button navbar-item" to="/jetzt-spenden">
                Jetzt spenden!
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;

