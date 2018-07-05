import React, { Component } from "react";
import "./ProjectList.css";

// import link from react router

class ProjectList extends Component {
	render() {
		return (
			<div id="project-names">
				<img
					className="projectTile"
					src={require("./media/ABC.png")}
					alt="Karah Icon"
				/>
			</div>
		);
	}
}

export default ProjectList;
