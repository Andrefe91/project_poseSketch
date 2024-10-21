//Modules
import React, { useContext, useMemo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
//Context
import { settingsContext } from "../../Context/settingsContext";
import { imageContext } from "../../Context/imageContext";
//Scripts
import generateOrder from "../../scripts/generateOrder";
import trackTimeOrder from "../../scripts/trackTimeOrder";
//Hooks
import useInterval from "../../Hooks/useInterval";
//Components
import TheaterImage from "../TheaterImage/TheaterImage";
//Filters
import "../../assets/noise.svg"

export default function Theater() {
	//Settings of the whole application, obtained from a context
	const { settings } = useContext(settingsContext);
	//Loaded images, obtained from a context
	const { validImages } = useContext(imageContext);
	const navigate = useNavigate();
	//The order of images, generated from the settings and loaded images number
	const random = settings.options.order == "random" ? true : false;
	const imagesOrder = useMemo(
		() => generateOrder(random, validImages.length),
		[settings],
	);
	//Track the index of the displayed image within the list generated, starting with the first
	const [imageIndex, setImageIndex] = useState(0);
	//Used to track the timer of a given image or image block
	const [imageTimer, setImageTimer] = useState(1000);
	//Used to track the number of completed images
	const [imageNumber, setImageNumber] = useState(0);
	//Timer for the current image
	const [timer, setTimer] = useState(0);

	//This function handles the time blocks for the images
	const timeBlocks =
		settings.options.study_format[settings.options.selected_study_format];
	let [time, trackingText] = trackTimeOrder(timeBlocks, imageNumber);

	//In case there are no images, redirect to HomePage
	useEffect(() => {
		if (validImages.length === 0) {
			navigate("/");
		}
	}, [validImages]);

	//This function handles the change of index for the images
	function handleNextImage() {
		setImageNumber(imageNumber + 1);

		if (imageIndex + 1 >= imagesOrder.length) {
			//If the current image is the last one, reset the index to the first
			setImageIndex(0);
		} else {
			setImageIndex(imageIndex + 1);
		}
		console.log(trackingText);
		setImageTimer(time * 1000);
		//Reset the timer of the current image
		setTimer(0);
	}

	//Set the interval for displaying the next image
	useInterval(() => handleNextImage(), imageTimer);
	//Set the timer for the current image
	useInterval(() => setTimer(timer + 1), 1000);
	console.log(timer);

	return (
		<>
			<Box
				sx={{
					width: "100vw",
					height: "100vh",
					bgcolor: "#111111",
				}}
			>
				<Container
					sx={{
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<TheaterImage imageFile={validImages[imagesOrder[imageIndex]]} />
				</Container>
			</Box>
		</>
	);
}
