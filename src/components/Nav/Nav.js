import React, { Component } from "react";
import Contact from "../Contact/Contact.js";
import About from "../About/About.js";
import Password from "../Password/Password.js";
import "./Nav.css";

// import link from react router
import { Link } from "react-router-dom";

class Nav extends Component {
	render() {
		return (
			<div className="navBar">
				<Link to="/about" componet={About} className="nav-link">
					about
				</Link>
				<Link to="/login" componet={Password} className="nav-link">
					work
				</Link>

				<Link to="/contact" component={Contact} className="nav-link">
					contact
				</Link>
			</div>
		);
	}
}

export default Nav;
