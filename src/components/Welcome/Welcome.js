import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
	render() {
		return (
			<div className="welcome-text">
				<h1>
					Hi there. I'm a{" "}
					<span className="welcome-state-text">New England </span>
					based{" "}
					<span className="welcome-desc-text">
						{this.props.heading}
					</span>...
				</h1>
			</div>
		);
	}
}

export default Welcome;
