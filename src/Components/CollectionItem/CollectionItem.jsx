//Modules
import { React, useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Paper, IconButton } from "@mui/material";
import useImageURL from "../../Hooks/useImageURL";
//Css
import "./collectionitem.css";
//Scripts
// import resizeImage from "../../scripts/resizeImage";
//Icons
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function CollectionItem({ imageFile, number, visibility }) {
	const [expand, setExpand] = useState(visibility);

	useEffect( () => {
		setExpand(visibility);
	}, [visibility]);

	// const [resizedImageURL, setResizedImageURL] = useState(null);

	// [TODO] Fix this - Too expensive to calculate for hundreds of images
	// Saving the calculations to improve performance
	// useMemo(
	// 	() =>
	// 		resizeImage(imageFile, 300, 300, function (resizedBlob) {
	// 			setResizedImageURL(resizedBlob);
	// 		}),
	// 	[imageFile],
	// );

	let imageName =
		imageFile.name.split(".")[0][0].toUpperCase() +
		imageFile.name.toLowerCase().split(".")[0].slice(1);

	if (imageName.length > 12) {
		imageName = imageName.slice(0, 12).trim() + "..."; //Limit the image name to 10 characters and add ellipsis if necessary.
	}

	const imageURL = useImageURL(imageFile);


	return (
		<>
			<Paper
				className="collection-item"
				elevation={5}
				sx={{ bgcolor: "background.default" }}
			>
				<div className="button-container">
					<IconButton aria-label="toggle image" size="small" onClick={() => setExpand(!expand)}>
						{expand ? <ExpandLessIcon /> : <ExpandMoreIcon />}
					</IconButton>
				</div>

				{expand && <div className="image-display">
					<img src={imageURL} alt={imageName} />
				</div>}

				<div className="background">
					<div className="image-details">
						<p>{imageName}</p>
						<p><b>#{number + 1}</b></p>
					</div>
				</div>
			</Paper>
		</>
	);
}

CollectionItem.propTypes = {
	imageFile: PropTypes.object.isRequired,
	number: PropTypes.number.isRequired,
	visibility: PropTypes.bool.isRequired,
};

export default CollectionItem;
