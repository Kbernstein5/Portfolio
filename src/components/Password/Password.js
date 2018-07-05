import React, { Component } from "react";
import Nav from "../Nav/Nav.js";
import Footer from "../Footer/Footer.js";
import ProjectList from "../ProjectList/ProjectList.js";

import { password } from "../../global/constants.js";

import "./Password.css";

// import link from react router

class Password extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authorized: false
		};

		this.authorize = this.authorize.bind(this);
	}
	// authorize = () => {
	// const password = e.target.querySelector('input[type="password"]').value;
	// const auth = password === this.state.password;
	// this.setState({
	// 	authorized: auth
	// 	});
	// };

	authorize(e) {
		const typedPassword = e.target.querySelector('input[type="password"]')
			.value;
		const auth = typedPassword === password;
		this.setState({
			authorized: auth
		});
	}

	render() {
		const login = (
			<div className="login">
				<form action="#" onSubmit={this.authorize}>
					<label>Please enter the password to view</label>
					<input type="password" />
					<button>Go!</button>
				</form>
				<p>
					Unfortunately, some client work cannot be displayed without
					a password. Please reach out directly to gain access to this
					page!
				</p>
			</div>
		);

		const portfolio = <ProjectList />;

		return (
			<div>
				<Nav />
				<div>{this.state.authorized ? portfolio : login}</div>

				<Footer />
			</div>
		);
	}
}

export default Password;
