//Modules
import React from "react";
import { PropTypes } from "prop-types";

function TimerBlock({ time }) {
	//Format the time from seconds
	let hours = 0;
	let minutes = 0;
	let seconds = time;

	if (seconds >= 60) {
		minutes = Math.floor(seconds / 60);
		seconds = seconds % 60;
	}

	if (minutes >= 60) {
		hours = Math.floor(minutes / 60);
		minutes = minutes % 60;
	}

	return (
		<>
            {/* When the sessions takes hours, render the correct format */}
			{hours > 60 &&
				`${hours.toLocaleString("en-US", {
					minimumIntegerDigits: 2,
					useGrouping: false,
				})}:`}
			{minutes.toLocaleString("en-US", {
				minimumIntegerDigits: 2,
				useGrouping: false,
			})}
			:
			{seconds.toLocaleString("en-US", {
				minimumIntegerDigits: 2,
				useGrouping: false,
			})}
		</>
	);
}

TimerBlock.propTypes = {
	time: PropTypes.number.isRequired,
};

export default TimerBlock;
