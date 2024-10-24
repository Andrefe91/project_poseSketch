//Modules
import React, { useState } from "react";
import { PropTypes } from "prop-types";
//Hooks
import useInterval from "../../Hooks/useInterval";
//Components
import TimerBlock from "../TimerBlock/TimerBlock";
//Css
import "./theaterInfo.css";

function TimerInfo({ imageTimer, practiceBlock, handleNextImage }) {
	//Timer for the current image
	const [timer, setTimer] = useState(0);

	if (timer > imageTimer - 1) {
		handleNextImage();
		setTimer(0);
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
};

export default TimerInfo;
