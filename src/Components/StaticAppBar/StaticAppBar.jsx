//Modules
import React from "react";
import PropTypes from "prop-types";
//Css
import "./Staticappbar.css";

function StaticAppBar({selected}) {

	return (
		<div className="staticappbar">
			<div className="logo">
				<h1>Logo</h1>
			</div>

			<div className="mainLinks">
				<a href="/faq" className={selected === "faq" ? "selected" : ""}>
					<div>F.A.Q</div>
				</a>
				<a href="/about" className={selected === "about" ? "selected" : ""}>
					<div>About</div>
				</a>
			</div>
		</div>
	);
}

StaticAppBar.propTypes = {
    selected: PropTypes.string,
};

export default StaticAppBar;
