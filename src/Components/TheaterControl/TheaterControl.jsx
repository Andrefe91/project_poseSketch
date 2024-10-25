//Modules
import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Button, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
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
import CachedIcon from "@mui/icons-material/Cached";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";


function TheaterControl({
	imageIndex,
	imageTimer,
	practiceBlock,
	handleNextImage,
	handlePreviousImage,
	timerBeeps
}) {
	const navigate = useNavigate();
	//Timer for the current image
	const [timer, setTimer] = useState(0);
	const [timerInterval, setTimerInterval] = useState(1000);
	//Declaring the constant variable for navigation


	if (timer > imageTimer - 1) {
		console.log("Timer", timer)
		handleNextImage();
		setTimer(0);
	}

	// Generate beep sound when timer reaches value less than timerBeeps
	if (timerBeeps != 0) {
		//If timer is 0, the options got deactivated
		if (timer >= imageTimer - timerBeeps) {
			generateBeep(80, 800, 20);
		}
	}

	// Set the timer for the current image
	useInterval(() => {
		setTimer(timer + 1);
	}, timerInterval);

	// Function to handle the pause/play button
	function handlePausePlay() {
		if (timerInterval === 1000) {
			setTimerInterval(null);
		} else {
			setTimerInterval(1000);
		}
	}

	// Detect the keydown and act accordingly
	useEffect(() => {
		document.addEventListener("keydown", keyDownActions);
	}, []);

	function keyDownActions(e) {
		switch (e.keyCode) {
			case 27: // Escape Key
				navigate("/collection"); //Navigate back to the collection
				break;
			case 39: // Right Arrow Key
				handleNextImage();
				break;
			default:
				console.log("Key:", e.keyCode);
				return;
		}
	}

	return (
		<div className="timer-info">
			<p>
				<TimerBlock time={timer} /> / <TimerBlock time={imageTimer} />
			</p>

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
						}}
						disabled={imageIndex === 0}
					>
						<ArrowBackIosIcon />
					</Button>
					<Button>
						<CachedIcon />
					</Button>
					<Button onClick={() => handlePausePlay()}>
						{timerInterval && <PauseIcon />}
						{!timerInterval && <PlayArrowIcon />}
					</Button>
					<Button
						onClick={() => {
							handleNextImage();
							setTimer(0);
						}}
					>
						<ArrowForwardIosIcon />
					</Button>
				</ButtonGroup>
			</div>

			<p>{practiceBlock}</p>
		</div>
	);
}

TheaterControl.propTypes = {
	imageIndex: PropTypes.number.isRequired,
	practiceBlock: PropTypes.string.isRequired,
	imageTimer: PropTypes.number.isRequired,
	handleNextImage: PropTypes.func.isRequired,
	handlePreviousImage: PropTypes.func.isRequired,
	timerBeeps: PropTypes.string.isRequired,
};

export default TheaterControl;
