//Modules
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
//Components
import PresetItem from "./PresetInfo";
//Icons
import BrushIcon from "@mui/icons-material/Brush";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";

function AddPreset({ setAddingPreset, preset, setPreset }) {
	const [presetName, setPresetName] = useState(
		Object.keys(preset).length > 0 ? Object.keys(preset)[0] : "Meaningful Name",
	);

	//Get the data from the Preset Body, if it exist. If not, create a new Preset Section
	const [presetBody, setPresetBody] = useState(
		Object.keys(preset).length > 0
			? preset[Object.keys(preset)[0]]
			: [[1, "30s"]],
	);

	//Handle the change of the Preset Name
	function handleChangePresetName(event) {
		setPresetName(event.target?.value);
	}

	//Increase the number of sections in the Preset
	function increaseSectionInPreset() {
		setPresetBody((prevBody) => [...prevBody, [1, "30s"]]);
	}

	//Increase the number of Breaks in the Preset
	function increaseBreakInPreset() {
		setPresetBody((prevBody) => [...prevBody, ["b", "30s"]]);
	}

	//Handle deletion of a Section within the Preset
	function deleteSectionInPreset(index) {
		setPresetBody((prevBody) => [
			...prevBody.slice(0, index),
			...prevBody.slice(index + 1),
		]);
	}

	//Handle change of the Preset Body
	function handleChangePresetBody(e) {
		setPresetBody(e);
	}

	function handleFormSubmit() {
		console.log("Form Submited");
	}

	return (
		<div>
			<Box sx={{ mt: "0.5rem" }}>
				New Preset:
				{/* <Divider variant="inset" sx={{ mt: "0.5rem", mb: "0.5rem" }} /> */}
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						mb: "0.5rem",
						mt: "0.5rem",
					}}
				>
					<Button
						size="small"
						color="primary"
						variant="text"
						startIcon={<BrushIcon />}
						disableElevation
						onClick={increaseSectionInPreset}
					>
						+ Study
					</Button>

					<Divider
						orientation="vertical"
						flexItem
						sx={{ mr: "0.5rem", ml: "0.5rem" }}
					/>

					<Button
						size="small"
						variant="text"
						sx={{ ml: "0.2rem" }}
						startIcon={<FreeBreakfastIcon />}
						disableElevation
						onClick={increaseBreakInPreset}
					>
						+ Break
					</Button>
				</Box>
				<FormControl fullWidth onSubmit={handleFormSubmit}>
					<Box sx={{ mt: "1rem" }}>
						<TextField
							required
							id="outlined-required"
							label="Name"
							value={presetName}
							onChange={handleChangePresetName}
							fullWidth
						/>
					</Box>

					{/* Render in Dom the Preset sections */}
					<Box>
						{presetBody.map((section, index) => {
							return (
								<Box key={index} sx={{ mt: "0.5rem", mb: "0.5rem" }}>
									<PresetItem
										section={section}
										index={index}
										deleteSection={deleteSectionInPreset}
										handleChangePresetBody={handleChangePresetBody}
										presetBodyLenght={presetBody.length}
									/>
								</Box>
							);
						})}
					</Box>

					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							mb: "0.5rem",
							mt: "0.5rem",
						}}
					>
						<Button
							size="small"
							color="primary"
							variant="contained"
							disableElevation
							type="submit"
							onClick={() => setPreset()}
						>
							Save
						</Button>

						<Button
							size="small"
							variant="outlined"
							sx={{ ml: "0.2rem" }}
							onClick={() => setAddingPreset(false)}
							disableElevation
						>
							Cancel
						</Button>
					</Box>
				</FormControl>
			</Box>
		</div>
	);
}

export default AddPreset;

AddPreset.propTypes = {
	setAddingPreset: PropTypes.func.isRequired,
	preset: PropTypes.object.isRequired,
	setPreset: PropTypes.func.isRequired,
};
