//Modules
import React, { useState } from "react";
import { PropTypes } from "prop-types";
//Hooks
import useInterval from "../../Hooks/useInterval";
//Components
import TimerBlock from "../TimerBlock/TimerBlock";
//Css
import "./theaterInfo.css";

function TimerInfo({ imageTimer, practiceBlock }) {
	//Timer for the current image
	const [timer, setTimer] = useState(0);

	if (timer > imageTimer / 1000 - 1) {
		setTimer(0);
	}

	// Set the timer for the current image
	useInterval(() => {
		setTimer(timer + 1);
	}, 1000);

    console.log(timer)
	return (
		<div className="timer-info">
			<p>
				<TimerBlock time={timer + 1} /> / <TimerBlock time={imageTimer / 1000} />
			</p>
			<p>{practiceBlock}</p>
		</div>
	);
}

TimerInfo.propTypes = {
	practiceBlock: PropTypes.string.isRequired,
	imageTimer: PropTypes.number.isRequired,
};

export default TimerInfo;
