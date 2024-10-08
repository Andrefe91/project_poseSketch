//Modules
import React from "react";
import { Button } from "@mui/material";
//Components
import DropZone from "../DropZone/DropZone";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../AppBar/AppBar";
//Css
import "./homepage.css";

export default function HomePage() {
	return (
		<>
			<ResponsiveAppBar />
			<div className="container">
				<DropZone />
				<Button variant="contained">
					<Link to={`collection`}>Go to collection</Link>
				</Button>
			</div>
		</>
	);
}
