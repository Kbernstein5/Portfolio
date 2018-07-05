import React, { Component } from "react";
import Nav from "../Nav/Nav.js";
import Footer from "../Footer/Footer.js";

import "./About.css";

class About extends Component {
	render() {
		return (
			<div>
				{/* navigation to mutiple sections */}
				<Nav />

				{/* about specific content */}
				<div id="welcome-content">
					{/* placeholder for image*/}
					<p>
						I&rsquo;m a email designer and and front end developer currently
						living in New England.<br />
						<br />
						I currently work at an in-house agency with a focus on email design
						and development.<br />
						<br />
						In my spare time, I enjoy traveling with my husband, researching the
						latest fashion trends, and working on my hand-stitched art work.<br />
						<br />
					</p>
					<button onClick="">CV</button>
				</div>
				{/* include footer */}

				<Footer />
			</div>
		);
	}
}

export default About;
