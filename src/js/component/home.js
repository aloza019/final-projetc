import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Card } from "./Card.js";
import { NavMenu } from "./NavMenu";

import { About } from "./About";
import { Contact } from "./Contact.js";
import { Services } from "./Services.js";
import { Tracking } from "./Tracking.js";

//create your first component
export function Home() {
	return (
		<div className="container">
			<Router>
				<NavMenu />
				<Switch>
					<Route exact path="/">
						{/* <h1>Home page</h1> */}
						<Header />
					</Route>

					<Route path="/About" component={About}>
						<About />
					</Route>

					<Route path="/Contact" component={Contact}>
						<Contact />
					</Route>
					<Route path="/Services" component={Services}>
						<Services />
					</Route>
					<Route path="/Tracking" component={Tracking}>
						<Tracking />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}
