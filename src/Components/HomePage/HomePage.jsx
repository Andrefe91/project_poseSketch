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

export default function HomePage() {
	const { validImages } = useContext(imageContext); //Get the images from the context
	const navigate = useNavigate(); //Get the navigation function from react-router-dom

	return (
		<>
			{/* <ResponsiveAppBar /> */}
			<div className="container">
				<StaticAppBar />
				<div className="mainAction">
					<DropZone />
					<Button
						variant="contained"
						disabled={validImages.length === 0}
						onClick={() => {navigate("collection")}}
					>
						Go to collection
					</Button>
				</div>
				<FootBar />
			</div>
		</>
	);
}
