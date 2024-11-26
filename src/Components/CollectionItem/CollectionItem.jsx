//Modules
import {React} from "react";
import { PropTypes } from "prop-types";
import { Paper } from "@mui/material";
import useImageURL from "../../Hooks/useImageURL";
//Css
import "./collectionitem.css";

function CollectionItem({ imageFile, number }) {
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
				<div className="image-display">
					<img src={imageURL} alt={imageName} />
				</div>

				<div className="background">
					<div className="image-details">
						<p>{imageName}</p>
						<p>#{number + 1}</p>
					</div>
				</div>
			</Paper>
		</>
	);
}

CollectionItem.propTypes = {
	imageFile: PropTypes.object.isRequired,
	number: PropTypes.number.isRequired,
};

export default CollectionItem;
