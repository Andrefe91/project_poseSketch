//Modules
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
//Components
import CollectionDrawer from "../CollectionDrawer/CollectionDrawer";
//CSS
import "./collectionAB.css";
//Icons
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SettingsIcon from "@mui/icons-material/Settings";

export default function CollectionAB({ setShowAll }) {
	const [drawerState, setDrawerState] = useState(false);
	const navigate = useNavigate();

	function toggleDrawer() {
		if (drawerState) {
			setDrawerState(false);
		} else {
			setDrawerState(true);
		}
	}

	function startStudy() {
		navigate("/theater");
	}

	// Detect the keydown and act accordingly
	useEffect(() => {
		// Add the event listener
		document.addEventListener("keydown", keyDownActions);

		// Remove the event listener on cleanup
		return () => {
			document.removeEventListener("keydown", keyDownActions);
		};
	}, [drawerState]); // Update the keyDownActions closure function.

	const keyDownActions = (e) => {
		if (drawerState) {
			return;
		} else {
			switch (e.keyCode) {
				case 32: // Space Key
					startStudy();
					break;
				case 83: // s Key
					toggleDrawer();
					break;
				case 72: // h Key
					setShowAll((showAll) => !showAll);
					break;
				default:
					// console.log("Key:", e);
					return;
			}
		}
	};

	return (
		<>
			<AppBar position="sticky" sx={{ marginBottom: "1rem" }}>
				<Container maxWidth="xxl">
					<Box sx={{ flexGrow: 1, display: "flex" }}>
						<Tooltip title="Go back to Home Page" arrow>
							<Button
								startIcon={<ArrowBackIcon />}
								sx={{
									fontWeight: 700,
									color: "inherit",
									padding: "0",
									margin: "0",
								}}
								className="navbar_button"
								onClick={() => navigate("/")}
							>
								<p className="responsiveText">BACK</p>
							</Button>
						</Tooltip>

						<Typography
							noWrap
							sx={{
								flexGrow: 1,
								fontWeight: 700,
								color: "inherit",
								textAlign: "center",
								margin: "0.5rem",
								userSelect: "none",
							}}
						>
							COLLECTION
						</Typography>

						<Tooltip title="Open Settings (S)" arrow>
							<Button
								sx={{
									fontWeight: 700,
									color: "inherit",
									padding: "0",
									margin: "0",
								}}
								className="navbar_button"
								endIcon={<SettingsIcon />}
								onClick={toggleDrawer}
							>
								<p className="responsiveText">Settings</p>
							</Button>
						</Tooltip>
					</Box>
				</Container>
			</AppBar>

			<CollectionDrawer
				anchor="right"
				drawerState={drawerState}
				toggleDrawerFunc={setDrawerState}
			/>
		</>
	);
}

CollectionAB.propTypes = {
	setShowAll: PropTypes.func.isRequired,
};
