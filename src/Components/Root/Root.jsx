//Modules
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import { ToastContainer, Flip } from "react-toastify";
//Context
import { imageContext } from "../../Context/imageContext";
import { settingsContext } from "../../Context/settingsContext";
//Settings
import appSettings from "../../Settings/appSettings";
// Scripts
import { getCache, setCache } from "../../scripts/cacheManagement";
//Css
import "./root.css";

const basic = createTheme({
	palette: {
		primary: {
			main: "#C80000",
		},
		secondary: {
			main: "#00c8c8",
		},
	},
	typography: {
		fontFamily: "Roboto, serif",
		fontSize: 16,
        fontWeight: 400,
	},
});

// Explore the cache to fetch the Settings, if not, set a new Cache.
async function getSettings() {
	// Get settings from the cache
	const cachedSettings = await getCache("settingsCache");

	if (cachedSettings) {
		return cachedSettings;
	}

	// if no settings are cached, set a new Cache
	setCache("settingsCache", appSettings);
	return appSettings;
}

function Root() {
	const [validImages, setValidImages] = useState([]);
	const [invalidImages, setInvalidImages] = useState([]);
	const [settings, setSettings] = useState(appSettings);

	useEffect(() => {
		// Fetch settings
		(async () => {
			const fetchedSettings = await getSettings();
			setSettings(fetchedSettings);
		})();
	}, []);

	return (
		<>
			<ToastContainer transition={Flip}/>
			<ThemeProvider theme={basic}>
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
			</ThemeProvider>
		</>
	);
}

export default Root;
