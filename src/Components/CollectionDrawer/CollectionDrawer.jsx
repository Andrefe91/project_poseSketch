//Modules
import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import {
	Box,
	Button,
	Drawer,
	List,
	ListItemButton,
	ListItemText,
	Divider,
	Collapse,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Tooltip,
	InputLabel,
	Select,
	MenuItem,
	IconButton

} from "@mui/material";
//CSS
import "./collection-drawer.css";
//Context
import { settingsContext } from "../../Context/settingsContext";
//Components
import AddPreset from "./AddPreset/AddPreset";
//Scripts
import presetBodyConvert from "../../scripts/presetBodyConvert.js";
//Icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from '@mui/icons-material/Edit';

function CollectionDrawer({ anchor, drawerState, toggleDrawerFunc }) {
	const [openSelectionSettings, setOpenSelectionSettings] = useState(true);
	const [openStudySettings, setOpenStudySettings] = useState(false);
	const [openEffectsSettings, setOpenEffectsSettings] = useState(false);
	const [saveOptions, setSaveOptions] = useState(false);
	const [addingPreset, setAddingPreset] = useState(false);
	const [newPreset, setNewPreset] = useState(["Meaningfull Name", []]);

	//Settings of the whole application, obtained from a context
	const { settings, setSettings } = useContext(settingsContext);
	const [updatedOptions, setUpdatedOptions] = useState(settings.options);

	//Reset the updatedOptions to the saved settings. This means, that unless the settings are "Saved"
	//in the settings pannel, the object used in the panel will return to the previous saved state
	useEffect(() => {
		setUpdatedOptions({ ...settings.options });
	}, [drawerState]);

	//Register the options for study format and selected preset, along with adding presets.
	function changeSelectedPreset(event) {
		//Change the selected study format preset
		if (event.target?.value) {
			setUpdatedOptions((prevSettings) => ({
				...prevSettings,
				selected_study_format: event.target.value,
			}));
		}

		//Allow to save the selected Preset
		handleSaveOptions();
	}

	//The function handles the edit option for the Study Preset
	function handleEditPreset() {
		//organize the information
		let presetName = updatedOptions.selected_study_format;
		let presetBody = updatedOptions.study_format[presetName];

		//Update the preset and activate the Create Component
		setNewPreset(() => ([presetName, presetBody]))
		setAddingPreset(true);
	}

	function handleSaveSettings() {
		// Update the options in the App Settings
		setSettings((prevSettings) => ({
			...prevSettings,
			options: { ...updatedOptions },
		}));

		//Close the drawer
		toggleDrawerFunc(false);
		//And disabled the Save Button
		setSaveOptions(false);
	}

	function registerChange(event) {
		//Then, register the change in settings
		let name = event.target?.name;
		let value = event.target?.value;

		if (name && value) {
			setUpdatedOptions((prevSettings) => ({
				...prevSettings,
				[name]: value,
			}));
		}
		//Then, check if Saving Options is required
		handleSaveOptions();
	}

	function handleCancelSettings() {
		toggleDrawerFunc(false);
		setSaveOptions(false);
	}

	//Allow to save options
	function handleSaveOptions() {
		setSaveOptions(true);
		//[TODO] only update the appSettings if detected change
		// if (JSON.stringify({...options}) !== JSON.stringify({...updatedOptions})) {
		// 	setSaveOptions(true);
		// 	console.log("Can Save")
		// } else {
		// 	setSaveOptions(false);
		//     console.log("Cannot Save")
		// }
	}

	//Handle open state of Setting Menus
	function handleOpenSelectionSettings() {
		setOpenSelectionSettings(!openSelectionSettings);
	}

	function handleOpenStudySettings() {
		setOpenStudySettings(!openStudySettings);
	}

	function handleOpenEffectsSettings() {
		setOpenEffectsSettings(!openEffectsSettings);
	}

	function handleCollapseAllSettings() {
		setOpenSelectionSettings(false);
		setOpenStudySettings(false);
		setOpenEffectsSettings(false);
	}

	function handleOpenAllSettings() {
		setOpenSelectionSettings(true);
		setOpenStudySettings(true);
		setOpenEffectsSettings(true);
	}

	//This function updates the "updatedOptions" object with the new preset before saving to settings
	function setPreset(title, body) {
		setUpdatedOptions((prevSettings) => ({
			...prevSettings,
			study_format: {
				...prevSettings.study_format,
				[title]: presetBodyConvert(body),
			},
		}));

		setAddingPreset(false);
	}

	return (
		<Drawer
			anchor={anchor}
			open={drawerState}
			onClose={() => {
				toggleDrawerFunc(false);
				setSaveOptions(false);
			}}
		>
			<Box
				sx={{
					width: 320,
					borderRight: 1,
					borderColor: "divider",
				}}
			>
				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
					component="nav"
					aria-labelledby="nested-list-subheader"
				>
					<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
						<Button
							size="small"
							onClick={handleCollapseAllSettings}
							sx={{ mr: "0.5rem" }}
						>
							Collapse All
						</Button>
						<Divider orientation="vertical" flexItem />
						<Button
							size="small"
							onClick={handleOpenAllSettings}
							sx={{ mr: "0.5rem", ml: "0.5rem" }}
						>
							{" "}
							Open All
						</Button>
					</Box>

					<Divider variant="middle" sx={{ mt: "0.2rem" }} />

					<ListItemButton onClick={handleOpenSelectionSettings}>
						<ListItemText primary="Selection" />
						{openSelectionSettings ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={openSelectionSettings} timeout="auto" unmountOnExit>
						<Box sx={{ pl: "2rem", mt: "0.2rem", pr: "1rem" }}>
							<FormControl>
								<FormLabel
									id="selection-order-options"
									sx={{ color: "text.primary" }}
								>
									Order
								</FormLabel>

								<RadioGroup
									row
									aria-labelledby="selection-order-options"
									value={updatedOptions.order}
									name="order"
									onChange={registerChange}
								>
									<Tooltip
										title={
											"Every selection is unique and random for all the list. Not two same images will be selected"
										}
										placement="left"
									>
										<FormControlLabel
											value="random"
											control={<Radio />}
											label="Random"
										/>
									</Tooltip>

									<Tooltip
										title={
											"The first image in the list will be selected, then the next one, and so on until you finish the whole list."
										}
										placement="top-start"
									>
										<FormControlLabel
											value="sequential"
											control={<Radio />}
											label="Sequential"
										/>
									</Tooltip>
								</RadioGroup>
							</FormControl>
						</Box>
					</Collapse>

					<Divider variant="middle" />

					<ListItemButton onClick={handleOpenStudySettings}>
						<ListItemText primary="Study Format" />
						{openStudySettings ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={openStudySettings} timeout="auto" unmountOnExit>
						<Box sx={{ pl: "2rem", mt: "1rem", pr: "1rem" }}>
							<FormControl sx={{ display: "flex" }}>
								<InputLabel id="study-format-setting-label">Preset</InputLabel>
								<Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
									<Select
										labelId="study-format-setting-label"
										id="study-format-setting"
										value={updatedOptions.selected_study_format}
										label="Preset"
										onChange={(e) => changeSelectedPreset(e)}
										//Disable the Select if adding a new Preset.
										disabled={addingPreset}
										sx={{ display: "flex", flex: "1"}}
									>
										{/* List all the saved presets */}
										{Object.keys(updatedOptions.study_format).map((preset) => {
											return (
												<MenuItem key={preset} value={preset}>
													{preset}
												</MenuItem>
											);
										})}
									</Select>

									<IconButton
										aria-label="delete preset"
										onClick={handleEditPreset}
									>
										<EditIcon fontSize="small"/>
									</IconButton>

								</Box>
							</FormControl>

							{/* Activate the option to Add a Preset */}
							{!addingPreset && (
								<Button
									size="small"
									sx={{ mt: "0.2rem", mb: "0.2rem" }}
									startIcon={<AddIcon />}
									onClick={() => {
										//Set a new empty Preset
										setNewPreset(["Meaningfull Name", []])

										//And activate the component
										setAddingPreset(true);

										//If the Effects Tab is open, close it.
										if (openEffectsSettings) {
											handleOpenEffectsSettings();
										}

										//If the Selection Tab is open, close it.
										if (openSelectionSettings) {
											handleOpenSelectionSettings();
										}
									}}
								>
									Add Preset
								</Button>
							)}

							{/* Activate an "Add a Preset component" */}
							{addingPreset && (
								<AddPreset
									setAddingPreset={setAddingPreset}
									preset={newPreset}
									setPreset={setPreset}
								/>
							)}
						</Box>
					</Collapse>

					<Divider variant="middle" />

					<ListItemButton onClick={handleOpenEffectsSettings}>
						<ListItemText primary="Effects" />
						{openEffectsSettings ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={openEffectsSettings} timeout="auto" unmountOnExit>
						<Box sx={{ pl: "2rem", pr: "1rem" }}>
							{/* ----------------------------------------------------------------------------------- */}
							<FormControl>
								<FormLabel
									id="image-information-options"
									sx={{ color: "text.primary" }}
								>
									Image Information:
								</FormLabel>

								<RadioGroup
									row
									aria-labelledby="image-information-options"
									value={updatedOptions.image_information}
									onChange={registerChange}
									name="image_information"
								>
									<FormControlLabel
										value="hide"
										control={<Radio />}
										label="Hide"
									/>

									<FormControlLabel
										value="show"
										control={<Radio />}
										label="Show"
									/>
								</RadioGroup>
							</FormControl>

							<Divider variant="inset" sx={{ mt: "0.5rem", mb: "0.5rem" }} />
							{/* ----------------------------------------------------------------------------------- */}
							<FormControl>
								<FormLabel
									id="timer-visibility-options"
									sx={{ color: "text.primary" }}
								>
									Timer Visibility:
								</FormLabel>

								<RadioGroup
									row
									aria-labelledby="timer-visibility-options"
									value={updatedOptions.timer_visibility}
									onChange={registerChange}
									name="timer_visibility"
								>
									<FormControlLabel
										value="constant"
										control={<Radio />}
										label="Constant"
									/>

									<FormControlLabel
										value="fade"
										control={<Radio />}
										label="Fade"
									/>
								</RadioGroup>
							</FormControl>

							<Divider variant="inset" sx={{ mt: "0.5rem", mb: "0.5rem" }} />
							{/* ----------------------------------------------------------------------------------- */}
							<FormControl>
								<FormLabel
									id="timer-beeps-options"
									sx={{ color: "text.primary" }}
								>
									Timer Beeps:
								</FormLabel>

								<RadioGroup
									aria-labelledby="timer-beeps-options"
									value={updatedOptions.timer_beeps}
									onChange={registerChange}
									name="timer_beeps"
								>
									<FormControlLabel
										value={0}
										control={<Radio />}
										label="Deactivated"
									/>

									<FormControlLabel
										value={3}
										control={<Radio />}
										label="3 Seconds"
									/>

									<FormControlLabel
										value={5}
										control={<Radio />}
										label="5 Seconds"
									/>

									<FormControlLabel
										value={10}
										control={<Radio />}
										label="10 Seconds"
									/>

									<FormControlLabel
										value={15}
										control={<Radio />}
										label="15 Seconds"
									/>
								</RadioGroup>
							</FormControl>

							<Divider variant="inset" sx={{ mt: "0.5rem", mb: "0.5rem" }} />
							{/* ----------------------------------------------------------------------------------- */}
							<FormControl>
								<FormLabel
									id="pause-control-options"
									sx={{ color: "text.primary" }}
								>
									Pause Control:
								</FormLabel>

								<RadioGroup
									row
									aria-labelledby="pause-control-options"
									value={updatedOptions.pause_controls}
									onChange={registerChange}
									name="pause_controls"
								>
									<FormControlLabel
										value="allow"
										control={<Radio />}
										label="Allow"
									/>

									<FormControlLabel
										value="dont_allow"
										control={<Radio />}
										label="Don't Allow"
									/>
								</RadioGroup>
							</FormControl>
						</Box>
					</Collapse>
				</List>

				<Box sx={{ display: "flex", justifyContent: "flex-end", pr: "1rem" }}>
					<Button
						variant="contained"
						disableElevation
						disabled={!saveOptions}
						onClick={handleSaveSettings}
					>
						Save
					</Button>

					<Button
						variant="outlined"
						disableElevation
						sx={{ ml: "0.2rem" }}
						onClick={() => {
							handleCancelSettings();
							// setAddingPreset(false);
						}}
					>
						Cancel
					</Button>
				</Box>
			</Box>
		</Drawer>
	);
}

CollectionDrawer.propTypes = {
	anchor: PropTypes.string.isRequired,
	drawerState: PropTypes.bool.isRequired,
	toggleDrawerFunc: PropTypes.func.isRequired,
};

export default CollectionDrawer;


