//Modules
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fab, Typography, Box } from "@mui/material";
//Components
import CollectionItem from "../CollectionItem/CollectionItem";
import CollectionAB from "../CollectionAB/CollectionAB";
//CSS
import "./collection.css";
//Context
import { imageContext } from "../../Context/imageContext";
//Icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Collection() {
	const { validImages } = useContext(imageContext); //Get the images from the context
	const navigate = useNavigate();

	useEffect(() => {
		//In case there are no images, redirect to HomePage
		if (validImages.length === 0) {
			navigate("/");
		}
	}, [validImages]);

	const imageGrid = validImages.map((file, index) => (
		<CollectionItem key={index} imageFile={file} number={index} />
	));

	return (
		<>
			<div className="page-container">
				<Box sx={{ width: "100%" }}>
					<CollectionAB />
					<div className="collection-container">{imageGrid}</div>
				</Box>

				<Fab
					color="primary"
					aria-label="start"
					className="start-theater"
					onClick={() => navigate("/theater")}
					variant="extended"
					sx={{ position: "fixed", bottom: "20px", right: "20px" }}
				>
					<PlayArrowIcon sx={{ mr: 0.5 }} fontSize="large" />
					<Typography
						variant="body1"
						component="h2"
						sx={{ fontWeight: 700, letterSpacing: ".1rem" }}
					>
						Start
					</Typography>
				</Fab>
			</div>
		</>
	);
}

export default Collection;
