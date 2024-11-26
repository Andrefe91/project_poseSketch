//Modules
import React from "react";
import { Container, IconButton } from "@mui/material";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
//CSS
import "./theaterTop.css";
//Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CancelIcon from '@mui/icons-material/Cancel';

function TheaterTop({ imageTitle, showTitle }) {
	const navigate = useNavigate();

	function backToCollection() {
		navigate("/collection");
	}

	return (
		<>
			<Container
				sx={{
					display: "flex",
					justifyContent: "center",
				}}
				className="positionReference"
			>
				<div className="imageTitle-top">{showTitle && <p>{imageTitle}</p>}</div>

				<div className="imageTitle-top" >
					<IconButton id="back-button" onClick={backToCollection}>
						<CancelIcon color="primary"  fontSize="large" />{" "}
					</IconButton>
				</div>
			</Container>
		</>
	);
}

TheaterTop.propTypes = {
	imageTitle: PropTypes.string.isRequired,
	showTitle: PropTypes.bool.isRequired,
};

export default TheaterTop;
