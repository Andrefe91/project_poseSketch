//Modules
import React from "react";
import { Container, IconButton } from "@mui/material";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
//CSS
import "./theaterTop.css";
//Icons
import CancelIcon from "@mui/icons-material/Cancel";

function TheaterTop({ imageTitle, showTitle }) {
	const navigate = useNavigate();

	//This function handles cancellation of the study session
	const cancelStudyNotification = () =>
		toast.info("Session Cancelled...", {
			position: "bottom-center",
			autoClose: 2500,
			closeOnClick: true,
			pauseOnHover: false,
		});

	function backToCollection() {
		navigate("/collection");
		cancelStudyNotification();
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

				<div className="imageTitle-top">
					<IconButton id="back-button" onClick={backToCollection}>
						<CancelIcon color="primary" fontSize="large" />{" "}
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
