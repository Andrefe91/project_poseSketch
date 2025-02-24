//Modules
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Fab,
	Typography,
	Box,
	Tooltip,
	ButtonGroup,
	Button,
} from "@mui/material";
//Components
import CollectionItem from "../CollectionItem/CollectionItem";
import CollectionAB from "../CollectionAB/CollectionAB";
//CSS
import "./collection.css";
//Context
import { imageContext } from "../../Context/imageContext";
//Icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Collection() {
	const { validImages } = useContext(imageContext); //Get the images from the context
	const navigate = useNavigate();
	const [showAll, setShowAll] = useState(false);

	useEffect(() => {
		//In case there are no images, redirect to HomePage
		if (validImages.length === 0) {
			navigate("/");
		}
	}, [validImages]);

	const imageGrid = validImages.map((file, index) => (
		<CollectionItem
			key={index}
			imageFile={file}
			number={index}
			visibility={showAll}
		/>
	));

	function startSession() {
		navigate("/theater");
	}

	return (
		<>
			<div className="page-container">
				<Box sx={{ width: "100%" }}>
					<CollectionAB setShowAll={setShowAll}/>
					<div className="visibility-options">
						<Tooltip title={"Toggle the visibility of all images (H)"} placement="left">
							<ButtonGroup size="small" aria-label="visibility options">
								{!showAll && <Button
									startIcon={<VisibilityIcon />}
									onClick={() => {
										setShowAll(true);
									}}
								>
									Show All
								</Button>}
								{showAll && <Button
									startIcon={<VisibilityOffIcon />}
									onClick={() => {
										setShowAll(false);
									}}
								>
									Hide All
								</Button>}
							</ButtonGroup>
						</Tooltip>
					</div>
					<div className="collection-container">{imageGrid}</div>
				</Box>

				<Tooltip
					title={"Start the session in the Theater (Space Bar)"}
					placement="top-start"
				>
					<Fab
						color="primary"
						aria-label="start"
						className="start-theater"
						onClick={() => startSession()}
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
				</Tooltip>
			</div>
		</>
	);
}

export default Collection;
