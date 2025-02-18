//Modules
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//Css
import "./Staticappbar.css";
//Icons
import PosePlayer from "../../assets/icons/pose_player_logo.svg"
import SmallPosePlayer from "../../assets/icons/small_pose_player_logo.svg"

function StaticAppBar({ selected }) {
	return (
		<div className="staticappbar">
			<div className="logo">
				<Link to={"/"}>
					<img src={PosePlayer} id="normal_logo" alt="Pose Player Logo" />
					<img src={SmallPosePlayer} id="small_logo" alt="Pose Player Logo" />
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
