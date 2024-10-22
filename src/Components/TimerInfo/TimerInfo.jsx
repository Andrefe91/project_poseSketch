//Modules
import React from "react";
import { PropTypes } from "prop-types";
//Css
import "./theaterInfo.css";

function TimerInfo({timer, practiceBlock, imageTimer}) {
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
};

export default TimerInfo;
