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
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

function AddPreset({ setAddingPreset, preset, setPreset, openDeleteDialog }) {
	const [presetName, setPresetName] = useState(preset[0]);

	//Define verb for the preset action
	const presetAction = preset[1].length > 0 ? "Edit" : "New";

	//Get the data from the Preset Body, if it exist. If not, create a new Preset Section
	const [presetBody, setPresetBody] = useState(
		preset[1].length > 0 ? preset[1] : [[1, "30"]],
	);

	//Handle the change of the Preset Name
	function handleChangePresetName(event) {
		let name = event.target?.value;

		if (name.length <= 20) {
			setPresetName(name);
		} else {
			return;
		}
	}

	//Increase the number of sections in the Preset
	function increaseSectionInPreset() {
		setPresetBody((prevBody) => [...prevBody, [1, "30"]]);
	}

	//Increase the number of Breaks in the Preset
	function increaseBreakInPreset() {
		setPresetBody((prevBody) => [...prevBody, ["b", "30"]]);
	}

	//Handle deletion of a Section within the Preset
	function deleteSectionInPreset(index) {
		setPresetBody((prevBody) => [
			...prevBody.slice(0, index),
			...prevBody.slice(index + 1),
		]);
	}

	//Handle total time calculation of preset
	function calculateTotalTime(presetBody) {
		let totalTime = 0;
		let hours = 0;
		let minutes = 0;
		let seconds = 0;

		presetBody.forEach((section) => {
			totalTime += section[1] * (section[0] == "b" ? 1 : section[0]);
		});

		//Convert to hours, minutes and seconds
		if (totalTime >= 3600) {
			hours = Math.floor(totalTime / 3600);
			totalTime = totalTime - hours * 3600;
		}

		if (totalTime >= 60) {
			minutes = Math.floor(totalTime / 60);
			totalTime = totalTime - minutes * 60;
		}

		seconds = totalTime;

		return `${hours}h ${minutes}m ${seconds}s`;
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
				{`${presetAction} Preset: `}
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
					<Box sx={{ mb: "0.5rem" }}>
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
					<Box>{`Total study time: ${calculateTotalTime(presetBody)}`}</Box>
					<Divider variant="inset" sx={{ mt: "0.5rem", mb: "0.5rem" }} />
					<Box
						sx={{
							display: "flex",
							justifyContent:
								presetAction == "Edit" ? "space-between" : "flex-end",
							mb: "0.5rem",
							mt: "0.5rem",
						}}
					>
						{presetAction == "Edit" && (
							<Button
								size="small"
								color="secondary"
								variant="outlined"
								disableElevation
								onClick={() => openDeleteDialog()}
								startIcon={<DeleteIcon />}
							>
								Delete
							</Button>
						)}

						<Button
							size="small"
							color="primary"
							variant="contained"
							disableElevation
							type="submit"
							onClick={() => setPreset(presetName, presetBody)}
							startIcon={<SaveIcon />}
						>
							Save
						</Button>

						{presetAction == "New" && (
							<Button
								size="small"
								variant="outlined"
								sx={{ ml: "0.2rem" }}
								onClick={() => setAddingPreset(false)}
								disableElevation
							>
								Cancel
							</Button>
						)}
					</Box>
				</FormControl>
			</Box>
		</div>
	);
}

export default AddPreset;

AddPreset.propTypes = {
	setAddingPreset: PropTypes.func.isRequired,
	preset: PropTypes.array.isRequired,
	setPreset: PropTypes.func.isRequired,
	openDeleteDialog: PropTypes.func.isRequired,
};
