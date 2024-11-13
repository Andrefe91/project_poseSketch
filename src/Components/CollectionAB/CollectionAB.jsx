//Modules
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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

export default function CollectionAB() {
	const [drawerState, setDrawerState] = useState(false);
	const navigate = useNavigate();

	function toggleDrawer() {
		if (drawerState) {
			setDrawerState(false);
		} else {
			setDrawerState(true);
		}
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
					navigate("/theater");
					break;
				case 13: //Enter Key
					navigate("/theater");
					break;
				case 83: // s Key
					toggleDrawer();
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
								}}
								className="navbar-button"
								onClick={() => navigate("/")}
							>
								BACK
							</Button>
						</Tooltip>

						<Typography
							variant="h5"
							noWrap
							sx={{
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								color: "inherit",
								textAlign: "center",
								margin: "0.5rem",
							}}
						>
							COLLECTION
						</Typography>

						<Button
							sx={{
								fontWeight: 700,
								color: "inherit",
							}}
							className="navbar-button"
							onClick={toggleDrawer}
						>
							Settings
						</Button>
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
