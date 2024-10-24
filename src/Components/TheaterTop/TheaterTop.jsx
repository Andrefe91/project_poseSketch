//Modules
import React from "react";
import { Container } from "@mui/material";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
//CSS
import "./theaterTop.css";
//Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
			>
				<div className="imageTitle-top">
					{showTitle && <p>{imageTitle}</p>}
				</div>

				<div className="imageTitle-top" id="back-button" onClick={backToCollection}>
					<ArrowBackIcon sx={{ color: "white" }} fontSize="large" />{" "}
					<p>Back</p>
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
