//Modules
import React from "react";
import { Button } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
//Css
import "./footbar.css";
//Icons
import BlueSkyIcon from "../../assets/icons/BlueSky_Icon.svg";
import Discord_Icon from "../../assets/icons/Discord_Icon.svg";
import Github_Icon from "../../assets/icons/Github_Icon.svg";
import GitHubIcon from "@mui/icons-material/GitHub";

function FootBar() {
	const matchesSize = useMediaQuery('(width > 520px)');

	return (
		<>
			<footer className="footbar">
				<div className="footbarText">
					<Button
						variant="outlined"
						size="small"
						sx={{
							p: "0.2rem 0.5rem 0.2rem 0.5rem",
							color: "#4d3d45",
							borderColor: "#4d3d45",
							"&:hover": {
								borderColor: "#c80000",
								backgroundColor: "#c80000",
								color: "#ffffff",
								boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
							},
						}}
						startIcon={<GitHubIcon />}
						href="https://github.com/Andrefe91/project_poseSketch/blob/main/CHANGELOG.md"
					>
						{matchesSize && "Changelog"} (V1.0.0)
					</Button>
				</div>

				<div className="contact">
					<p className="hide">Contact: </p>

					<div className="contactIcons">
						<a href="https://bsky.app/profile/poseplayer.bsky.social">
							<img src={BlueSkyIcon} alt="BlueSky Icon" />
						</a>

						<a href="https://discord.gg/2WkEVBY3">
							<img src={Discord_Icon} alt="BlueSky Icon" />
						</a>

						<a href="https://github.com/Andrefe91/project_poseSketch">
							<img src={Github_Icon} alt="Github Icon" />
						</a>
					</div>
				</div>
			</footer>
		</>
	);
}

export default FootBar;
