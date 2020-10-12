import React from "react";

export function NavMenu() {
	return (
		<div>
			<nav className="navbar fixed-top mr-auto navbar-expand-lg navbar-dark bg-dark ">
				<a className="navbar-brand" href="#">
					Start Boostrap
				</a>
				<button
					className="navbar-toggler "
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavAltMarkup">
					<div className="navbar-nav ml-auto">
						<a className="nav-item nav-link active" href="#">
							Home <span className="sr-only">(current)</span>
						</a>
						<a className="nav-item nav-link" href="#">
							About
						</a>
						<a className="nav-item nav-link" href="#">
							Service
						</a>
						<a className="nav-item nav-link" href="#">
							Contact
						</a>
					</div>
				</div>
			</nav>
		</div>
	);
}
