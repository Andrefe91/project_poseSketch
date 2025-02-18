//Modules
import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//Hooks
import useInterval from "../../Hooks/useInterval";
//Components
import TimerBlock from "../TimerBlock/TimerBlock";
//Css
import "./theaterControl.css";
//Scripts
import generateBeep from "../../scripts/generateBeep";
//Icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function TheaterControl({
	imageNumber,
	imageTimer,
	practiceBlock,
	handleNextImage,
	handlePreviousImage,
	timerBeeps,
	allowPause,
	timerVisibilityOption,
}) {
	const navigate = useNavigate();
	//Timer for the current image
	const [timer, setTimer] = useState(0);
	const [timerInterval, setTimerInterval] = useState(1000);

	// Control the visibility of the timer
	const [timerVisibility, setTimerVisibility] = useState(timerVisibilityOption);

	//This function handles cancellation of the study session
	const cancelStudyNotification = () =>
		toast.info("Session Cancelled...", {
			position: "bottom-center",
			autoClose: 2500,
			closeOnClick: true,
			pauseOnHover: false,
		});

	// Set the timer for the current image
	useInterval(() => {
		setTimer(timer + 1);
	}, timerInterval);

	useEffect(() => {
		// Set next image by timer
		if (timer > imageTimer - 1) {
			handleNextImage();
			setTimer(0);

			if (timerVisibilityOption == "fade") {
				setTimerVisibility("fade"); //Fade the timer if selected the option
			}
		}

		// Generate beep sound when timer reaches value less than timerBeeps
		if (timerBeeps != 0) {
			//If timer is 0, the options gets deactivated
			if (timer >= imageTimer - timerBeeps) {
				if (timerVisibility == "fade") {
					setTimerVisibility("constant"); //Show timer when beeping
				}
				generateBeep(80, 650, 5);
			}
		}

		// Add the event listener
		document.addEventListener("keydown", keyDownActions);

		// Remove the event listener on cleanup
		return () => {
			document.removeEventListener("keydown", keyDownActions);
		};
	}, [imageNumber, timerInterval, timer]); // Update the keyDownActions closure function with every change of the imageNumber.

	const keyDownActions = (e) => {
		switch (e.keyCode) {
			case 27: // Escape Key
				navigate("/collection"); // Navigate back to the collection
				cancelStudyNotification(); // Notify the user that the session was cancelled
				break;
			case 39: // Right Arrow Key
				handleNextImage();
				setTimer(0);

				//Timer visibility Management
				setTimerVisibility("constant");
				hideTimer();
				break;
			case 37: // Left Arrow Key
				handlePreviousImage();
				setTimer(0);

				//Timer visibility Management
				setTimerVisibility("constant");
				hideTimer();
				break;
			// This case is creating a bug that i can't figure out at the moment
			case 32: //Space KeyBoard
				if (allowPause == "true") {
					handlePausePlay();
				}
				break;
			case 40: //Down arrow key
				if (allowPause == "true") {
					handlePausePlay();
				}
				break;
			default:
				return;
		}
	};

	// Function to handle the pause/play button
	function handlePausePlay() {
		if (timerInterval) {
			setTimerVisibility("constant");
			setTimerInterval(null);
		} else {
			if (timerVisibilityOption == "fade") {
				setTimerVisibility("fade");
			}
			setTimerInterval(1000);
		}
	}

	function hideTimer() {
		//Hide the timer again if the option is selected
		setTimeout(() => {
			if (timerVisibilityOption == "fade") {
				setTimerVisibility("fade");
			}
		}, 1000);
	}

	return (
		<div className="timer-info">
			<div className={timerVisibility + " text"}>
				<TimerBlock time={timer} /> / <TimerBlock time={imageTimer} />
			</div>

			<div>
				<ButtonGroup
					variant="contained"
					aria-label="action control"
					size="large"
				>
					<Button
						onClick={() => {
							handlePreviousImage();
							setTimer(0);

							//Timer visibility Management
							setTimerVisibility("constant");
							hideTimer();
						}}
						disabled={imageNumber === 1}
						sx={{
							"&.Mui-disabled": {
								background: "#5b1818",
								color: "#6b4747",
							},
						}}
					>
						<ArrowBackIosIcon />
					</Button>

					{allowPause == "true" && (
						<Button onClick={() => handlePausePlay()}>
							{timerInterval && <PauseIcon />}
							{!timerInterval && <PlayArrowIcon />}
						</Button>
					)}

					<Button
						onClick={() => {
							handleNextImage();
							setTimer(0);

							//Timer visibility Management
							setTimerVisibility("constant");
							hideTimer();
						}}
					>
						<ArrowForwardIosIcon />
					</Button>
				</ButtonGroup>
			</div>

			<div className="text">{practiceBlock}</div>
		</div>
	);
}

TheaterControl.propTypes = {
	imageNumber: PropTypes.number.isRequired,
	practiceBlock: PropTypes.string.isRequired,
	imageTimer: PropTypes.number.isRequired,
	handleNextImage: PropTypes.func.isRequired,
	handlePreviousImage: PropTypes.func.isRequired,
	timerBeeps: PropTypes.string.isRequired,
	allowPause: PropTypes.string.isRequired,
	timerVisibilityOption: PropTypes.string.isRequired,
};

export default TheaterControl;
