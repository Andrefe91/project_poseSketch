//Modules
import React, { useContext, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container } from "@mui/material";
//Context
import { settingsContext } from "../../Context/settingsContext";
import { imageContext } from "../../Context/imageContext";
//Scripts
import generateOrder from "../../scripts/generateOrder";

export default function Theater() {
	//Settings of the whole application, obtained from a context
	const { settings } = useContext(settingsContext);
	//Loaded images, obtained from a context
	const { validImages } = useContext(imageContext);
	const navigate = useNavigate();
	//The order of images, generated from the settings and loaded images number
	const random = settings.options.order == "random" ? true : false;
	const imagesOrder = useMemo(
		() => generateOrder(random, validImages.length),
		[settings],
	);

	//Log the generated order of images for debugging purposes
	console.log(imagesOrder);

	//In case there are no images, redirect to HomePage
	useEffect(() => {
		if (validImages.length === 0) {
			navigate("/");
		}
	}, [validImages]);

	return (
		<>
			<Box sx={{ width: "100vw", height: "100vh", bgcolor: 'red' }}>
				<Container>
					
				</Container>
			</Box>
		</>
	);
}
