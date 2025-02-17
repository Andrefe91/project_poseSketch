//Modules
import React from "react";
import { Button } from "@mui/material";
import { useContext } from "react";
//Components
import DropZone from "../DropZone/DropZone";
import { useNavigate } from "react-router-dom";
import FootBar from "../FootBar/FootBar";
import StaticAppBar from "../StaticAppBar/StaticAppBar";
//Context
import { imageContext } from "../../Context/imageContext";
//Css
import "./homepage.css";
//Icons
import StartIcon from "@mui/icons-material/Start";

export default function HomePage() {
	const { validImages } = useContext(imageContext); //Get the images from the context
	const navigate = useNavigate(); //Get the navigation function from react-router-dom

	return (
		<>
			{/* <ResponsiveAppBar /> */}
			<div className="container">
				<StaticAppBar />
				<div className="mainAction">
					<div className="mainText">
						<h1>Pose Player</h1>
						<p>Your simple tool for Gesture Drawing Practice</p>
						<p id="normalText">
							Locally load and display your practice pictures - no accounts, no
							subscriptions, no data tracking.
						</p>
					</div>
					<DropZone />
					<Button
						variant="contained"
						disabled={validImages.length === 0}
						onClick={() => {
							navigate("collection");
						}}
						endIcon={<StartIcon />}
						sx={{
							"&.Mui-disabled": {
								background: "#eaeaea",
								color: "#c0c0c0",
							},
						}}
					>
						To the collection
					</Button>
				</div>
				<FootBar />
			</div>
		</>
	);
}
