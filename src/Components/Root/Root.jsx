//Modules
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
//Context
import { imageContext } from "../../Context/imageContext";
import { settingsContext } from "../../Context/settingsContext";
//Settings
import appSettings from "../../Settings/appSettings";

const theme = createTheme({
	palette: {
		primary: {
			main: "#e2cd0d",
		},
		secondary: {
			main: "#FF8A65",
		},
		background: {
			default: "#242424",
			paper: "#242424",
		},
		text: {
			primary: "#FFFFFF",
		},
	},
});

function Root() {
	const [validImages, setValidImages] = useState([]);
	const [invalidImages, setInvalidImages] = useState([]);
	const [settings, setSettings] = useState(appSettings);

	return (
		<>
			<CssBaseline />
			<settingsContext.Provider value={{ settings, setSettings }}>
				<imageContext.Provider
					value={{
						validImages,
						setValidImages,
						invalidImages,
						setInvalidImages,
					}}
				>
					<Outlet />
				</imageContext.Provider>
			</settingsContext.Provider>
		</>
	);
}

export default Root;
