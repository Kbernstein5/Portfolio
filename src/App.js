import React, { Component } from "react";

// import components so they can be used
import Contact from "./components/Contact/Contact.js";
import About from "./components/About/About.js";
import Home from "./components/Home/Home.js";
import Password from "./components/Password/Password.js";

// import react router
import { Route, Switch } from "react-router";

// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

//then move all of this into the home

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/contact" component={Contact} />
				<Route path="/login" component={Password} />
			</Switch>
		);
	}
}

export default App;
