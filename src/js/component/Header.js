import React from "react";
import Card from "./Card";

export function Header() {
	return (
		<div className="jumbotron">
			{/* <h1 className="display-4">A warm Welcome</h1>

			<p>
				It uses utility classes for typography and spacing to space
				content out within the larger container. This is a simple hero
				unit, a simple jumbotron-style component for calling extra
				attention to featured content or information. It uses utility
				classes for typography and spacing to space content out within
				the larger container. This is a simple hero unit, a simple
				jumbotron-style component for calling extra attention to
				featured content or information.
			</p>

			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call to action!
			</a> */}

			<div className="row">
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/3999659/pexels-photo-3999659.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="Air Transportation"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="Ocean Transportation"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="Land Transportation"
					/>
				</div>
				<div className="col-sm">
					<Card
						myPicture="https://images.pexels.com/photos/3821385/pexels-photo-3821385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						myTittle="Warehouse Services"
					/>
				</div>
			</div>
		</div>
	);
}
