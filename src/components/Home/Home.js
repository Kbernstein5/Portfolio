import React, { Component } from "react";

// import components so they can be used
import Nav from "../Nav/Nav.js";
import Footer from "../Footer/Footer.js";
import Welcome from "../Welcome/Welcome.js";

import "./home.css";

// array full of terms for welcome message
const message = [
	"Email Designer",
	"Email Developer",
	"Graphic Designer",
	"Front End Developer",
	"Email Nerd",
	"Web Designer"
];

// set state for the heading by picking random from array
class Home extends Component {
	constructor(props) {
		super(props);
		this.interval = null;
		this.state = {
			randomMessage: message[Math.floor(Math.random() * message.length)]
		};
	}

	// when content is loaded to page update array
	componentDidMount() {
		this.interval = setInterval(this.updateMessage, 2000);
	}

	//fire whenever page closes
	compondentWillUnmount() {
		clearInterval(this.interval);
	}

	updateMessage = () => {
		this.setState({
			randomMessage: message[Math.floor(Math.random() * message.length)]
		});
	};

	render() {
		return (
			<div id="home">
				{/* navigation to mutiple sections */}

				<Nav />

				{/*Create a weclome with a loop*/}
				<img
					className="welcome-image"
					src={require("./media/KB_icon.png")}
					alt="Karah Icon"
				/>
				<Welcome heading={this.state.randomMessage} />

				{/* include footer */}
				<Footer />
			</div>
		);
	}
}

export default Home;
