import React, { Component } from "react";

class Intro extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.heading}</h1>
				<p>{this.props.text}</p>
			</div>
		);
	}
}

export default Intro;
