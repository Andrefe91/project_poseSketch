//Modules
import React, { useState } from "react";
import { PropTypes } from "prop-types";
//Hooks
import useInterval from "../../Hooks/useInterval";
//Components
import TimerBlock from "../TimerBlock/TimerBlock";
//Css
import "./theaterInfo.css";
//Scripts
import generateBeep from "../../scripts/generateBeep";

function TimerInfo({ imageTimer, practiceBlock, handleNextImage, timerBeeps }) {
	//Timer for the current image
	const [timer, setTimer] = useState(0);

	if (timer > imageTimer - 1) {
		handleNextImage();
		setTimer(0);
	}

	// Generate beep sound when timer reaches value less than timerBeeps
	if (timerBeeps != 0 ) { //If timer is 0, the options got deactivated
		if (timer >= imageTimer - timerBeeps) {
			(generateBeep(80, 800, 20));
		}
	}

	// Set the timer for the current image
	useInterval(() => {
		setTimer(timer + 1);
	}, 1000);

	return (
		<div className="timer-info">
			<p>
				<TimerBlock time={timer} /> / <TimerBlock time={imageTimer} />
			</p>
			<p>{practiceBlock}</p>
		</div>
	);
}

TimerInfo.propTypes = {
	practiceBlock: PropTypes.string.isRequired,
	imageTimer: PropTypes.number.isRequired,
	handleNextImage: PropTypes.func.isRequired,
	timerBeeps: PropTypes.string.isRequired,
};

export default TimerInfo;
