//Modules
import React from "react";
import { PropTypes } from "prop-types";
//Css
import "./theaterImage.css";

function TheaterImage({ imageFile }) {
    //Get the image name from the file
    let imageName =
    imageFile.name.split(".")[0][0].toUpperCase() +
    imageFile.name.toLowerCase().split(".")[0].slice(1);

	return (
		<>
			<div className="theater-image">
				<img src={URL.createObjectURL(imageFile)} alt={imageName} />
			</div>
		</>
	);
}

TheaterImage.propTypes = {
	imageFile: PropTypes.object.isRequired,
};

export default TheaterImage;
