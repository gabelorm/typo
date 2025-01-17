import React, { Component } from "react";
import { Link } from "react-router-dom";

import AccountsUIWrapper from "./AccountsUIWrapper.js";

export default class HomeHeader extends Component {
	render() {
		return (
			<div id="home-header">
				<div className="text-center">
					<h1 id="home-title">
						<Link to="/">eLearning</Link>
					</h1>
					<h2 id="welcome-message">A typing competition for KNUST Students</h2>
					<div id="home-login">
						<AccountsUIWrapper />
					</div>
				</div>
			</div>
		);
	}
}
