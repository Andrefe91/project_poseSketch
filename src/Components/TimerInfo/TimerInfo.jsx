//Modules
import React from "react";
import { PropTypes } from "prop-types";
//Hooks
import useInterval from "../../Hooks/useInterval";
//Css
import "./theaterInfo.css";

function TimerInfo({timer, practiceBlock, imageTimer, setTimer}) {
	// Set the timer for the current image
	useInterval(() => {
		setTimer(timer + 1);
	}, 1000);

    return (
        <div className="timer-info">
            <p>{timer}/{imageTimer/1000}</p>
            <p>{practiceBlock}</p>
        </div>
    );
}


TimerInfo.propTypes = {
    timer: PropTypes.number.isRequired,
    practiceBlock: PropTypes.string.isRequired,
    imageTimer: PropTypes.number.isRequired,
    setTimer: PropTypes.func.isRequired,

};

export default TimerInfo;
