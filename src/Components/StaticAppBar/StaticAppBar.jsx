//Modules
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//Css
import "./Staticappbar.css";

function StaticAppBar({ selected }) {
	return (
		<div className="staticappbar">
			<div className="logo">
				<Link to={"/"}>
					<h1>Logo</h1>
				</Link>
			</div>

			<div className="mainLinks">
				<Link to={"/faq"} className={selected === "faq" ? "selected" : ""} id="faq">
					F.A.Q
				</Link>
				<Link to={"/about"} className={selected === "about" ? "selected" : ""} id="about">
					About
				</Link>
			</div>
		</div>
	);
}

StaticAppBar.propTypes = {
	selected: PropTypes.string,
};

export default StaticAppBar;
