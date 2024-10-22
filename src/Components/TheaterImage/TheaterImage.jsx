//Modules
import React from "react";
import { PropTypes } from "prop-types";
//Css
import "./theaterImage.css";

function TheaterImage({ imageFile }) {
	//Check if the image exists
	if (!imageFile) {
		return;
	}

	//Get the image name from the file
	let imageName =
		imageFile?.name.split(".")[0][0].toUpperCase() +
		imageFile?.name.toLowerCase().split(".")[0].slice(1);

	return (
		<>
			<div className="theater-image">
				<img src={URL.createObjectURL(imageFile)} alt={imageName} />
				{/* [TODO] Decide if i leave this effect active or change it with another thing */}
				{/* <img src={URL.createObjectURL(imageFile)} alt={imageName} id="blur-effect"/> */}
			</div>
		</>
	);
}

TheaterImage.propTypes = {
	imageFile: PropTypes.object,
};

export default TheaterImage;
