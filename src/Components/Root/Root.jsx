//Modules
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
//Context
import { imageContext } from "../../Context/imageContext";

const theme = createTheme({
  palette: {
    primary: {
      main: '#e2cd0d',
    },
    secondary: {
      main: '#FF8A65',
    },
    background: {
      default: '#242424',
    },
    text: {
      primary: '#FFFFFF',
    },
  }
})

function Root() {
	const [validImages, setValidImages] = useState([]);
	const [invalidImages, setInvalidImages] = useState([]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<imageContext.Provider
				value={{ validImages, setValidImages, invalidImages, setInvalidImages }}
			>
				<Outlet />
			</imageContext.Provider>
		</ThemeProvider>
	);
}

export default Root;
