//Modules
import React from "react";
//Components
import StaticAppBar from "../StaticAppBar/StaticAppBar";
import FootBar from "../FootBar/FootBar";

function Faq() {
	return (
		<>
			<div className="container">
				<StaticAppBar selected="faq" />
				<p> Ok, yes, but why ?. </p>
				<FootBar />
			</div>
		</>
	);
}

export default Faq;
