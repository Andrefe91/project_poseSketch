//Modules
import React from "react";
import { PropTypes } from "prop-types";
import useResizedImage from "../../Hooks/useResizedImage";
//Assets
import restIcon from "../../assets/Rest_Icon.svg";
//Css
import "./theaterImage.css";

function TheaterImage({ imageFile, studyBreak }) {
	//Check if the image exists
	if (!imageFile) {
		return;
	}

	//Get the imageURL
	const imageURL = useResizedImage(imageFile);

	//Get the image name from the file
	let imageName =
		imageFile?.name.split(".")[0][0].toUpperCase() +
		imageFile?.name.toLowerCase().split(".")[0].slice(1);

	return (
		<>
			<div className="theater-image">
				{!studyBreak && (
					<img src={imageURL} alt={imageName} className="shadowed" />
				)}

				{/* If the section is a break, display the icon */}
				{studyBreak && <img src={restIcon} alt="Rest" />}
				{/* [TODO] Decide if i leave this effect active or change it with another thing */}
				{/* <img src={URL.createObjectURL(imageFile)} alt={imageName} id="blur-effect"/> */}
			</div>
		</>
	);
}

TheaterImage.propTypes = {
	imageFile: PropTypes.object.isRequired,
	studyBreak: PropTypes.bool.isRequired,
};

export default TheaterImage;
