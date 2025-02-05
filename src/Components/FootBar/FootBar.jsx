//Modules
import React from "react";
//Css
import "./footbar.css";
//Icons
import BlueSkyIcon from "../../assets/icons/BlueSky_Icon.svg";
import Discord_Icon from "../../assets/icons/Discord_Icon.svg";
import Github_Icon from "../../assets/icons/Github_Icon.svg";

function FootBar() {
	return (
		<>
			<footer className="footbar">
				<div className="footbarText">
					<p>Pose Player - 2024</p>
				</div>

				<div className="contact">
					<p>Contact me: </p>

					<div className="contactIcons">
						<a href="http://www.google.com">
							<img src={BlueSkyIcon} alt="BlueSky Icon" />
						</a>

						<a href="http://www.google.com">
							<img src={Discord_Icon} alt="BlueSky Icon" />
						</a>

						<a href="http://www.google.com">
							<img src={Github_Icon} alt="BlueSky Icon" />
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}

export default FootBar;
