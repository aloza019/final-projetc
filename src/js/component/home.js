import React from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";
import { Header } from "./Header.js";
import { Footer } from "./Footer.js";
import { Card } from "./Card.js";
import { NavMenu } from "./NavMenu";

//create your first component
export function Home() {
	return (
		<div className="container">
			<NavMenu />
			<Header />
			<div className="row">
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/3688760/pexels-photo-3688760.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="My Tittle"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/38565/iphone-visa-business-buying-38565.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="My Tittle2"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="My Tittle3"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="My Tittle"
					/>
				</div>
			</div>

			<Footer />
		</div>
	);
}
