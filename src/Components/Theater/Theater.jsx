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

//Components
import TheaterImage from "../TheaterImage/TheaterImage";
import TheaterControl from "../TheaterControl/TheaterControl";
import TheaterTop from "../TheaterTop/TheaterTop";
//Filters
import "../../assets/noise.svg";
//Hooks

//This functions handles the case where there are no next images - End of study

export default function Theater() {
	const navigate = useNavigate();
	//Settings of the whole application, obtained from a context
	const { settings } = useContext(settingsContext);
	//Loaded images, obtained from a context
	const { validImages } = useContext(imageContext);
	//In case there are no images, redirect to HomePage
	useEffect(() => {
		if (validImages.length === 0) {
			navigate("/");
		}
	}, [validImages]);

	//Get Optiosn from settings
	const showOptions =
		settings.options.image_information == "hide" ? false : true;

	//The order of images, generated from the settings and loaded images number
	const random = settings.options.order == "random" ? true : false;
	const imagesOrder = useMemo(
		() => generateOrder(random, validImages.length),
		[settings],
	);
	//Track the index of the displayed image within the list generated. This index tracks the succession of the images
	const [imageIndex, setImageIndex] = useState(0);

	//Used to track the number of completed images
	const [imageNumber, setImageNumber] = useState(1);

	//Used to track the Breaks
	const [studyBreak, setStudyBreak] = useState(false);

	//This function handles the time blocks for the images
	const timeBlocks =
		settings.options.study_format[settings.options.selected_study_format];
	let [time, trackingText] = trackTimeOrder(timeBlocks, imageNumber);

	function handleEndOfStudy() {
		navigate("/collection");
	}

	//Check if it's the end of the study session
	if (trackingText == "End of Study") {
		handleEndOfStudy();
	}

	useEffect(() => {
		//This inform the TheaterImage component if the section is a Study Break
		if (trackingText == "Break") {
			setStudyBreak(true);
		} else {
			setStudyBreak(false);
		}
	}, [imageNumber]);

	//This function handles the change for the next image
	function handleNextImage() {
		setImageNumber(imageNumber + 1);

		//Dont advance index if next block is a Study Break
		if (trackingText != "Break") {
			if (imageIndex + 1 >= imagesOrder.length) {
				//If the current image is the last one, reset the index to the first
				setImageIndex(0); //The index controls the progress of the study
			} else {
				setImageIndex(imageIndex + 1);
			}
		}
	}

	//This function handles the change for the previous image
	function handlePreviousImage() {
		//ImageNumber can go less than 0
		if (imageNumber - 1 <= 0) {
			return;
		} else {
			setImageNumber(imageNumber - 1);
		}

		//Dont advance index if previous block is a Study Break
		if (trackingText != "Break") {
			if (imageIndex - 1 < 0) {
				//If the current image is the first one, reset the index to the last
				setImageIndex(imagesOrder.length - 1);
			} else {
				setImageIndex(imageIndex - 1);
			}
		}
	}

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100vw",
					height: "100vh",
					bgcolor: "#111111",
				}}
			>
				<TheaterTop
					imageTitle={validImages[imagesOrder[imageIndex]].name}
					showTitle={showOptions}
				/>

				<Container
					sx={{
						height: "100vh",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
					}}
				>
					<TheaterImage
						imageFile={validImages[imagesOrder[imageIndex]]}
						studyBreak={studyBreak}
					/>
				</Container>

				<TheaterControl
					imageNumber={imageNumber}
					imageTimer={time}
					practiceBlock={trackingText}
					handleNextImage={handleNextImage}
					handlePreviousImage={handlePreviousImage}
					timerBeeps={settings.options.timer_beeps}
					allowPause = {settings.options.pause_controls}
				/>
			</Box>
		</>
	);
}
