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
	IconButton,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
} from "@mui/material";

//CSS
import "./collection-drawer.css";
//Context
import { settingsContext } from "../../Context/settingsContext";
//Components
import AddPreset from "./AddPreset/AddPreset";
//Scripts
import presetBodyConvert from "../../scripts/presetBodyConvert.js";
import { setCache } from "../../scripts/cacheManagement.js";
//Icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";

function CollectionDrawer({ anchor, drawerState, toggleDrawerFunc }) {
	const [openSelectionSettings, setOpenSelectionSettings] = useState(true);
	const [openStudySettings, setOpenStudySettings] = useState(false);
	const [openEffectsSettings, setOpenEffectsSettings] = useState(false);
	const [saveOptions, setSaveOptions] = useState(false);
	const [addingPreset, setAddingPreset] = useState(false);
	const [newPreset, setNewPreset] = useState(["Meaningfull Name", []]);
	const [openDeletePresetConfirm, setOpenDeletePresetConfirm] = useState(false);

	//Settings of the whole application, obtained from a context
	const { settings, setSettings } = useContext(settingsContext);
	const [updatedOptions, setUpdatedOptions] = useState(settings.options);

	//Reset the updatedOptions to the saved settings. This means that, unless the settings are "Saved"
	//in the settings pannel, the object used in the panel will return to the previous saved state
	useEffect(() => {
		setUpdatedOptions({ ...settings.options });

		// Add the event listener
		document.addEventListener("keydown", keyDownActions);

		// Remove the event listener on cleanup
		return () => {
			document.removeEventListener("keydown", keyDownActions);
		};
	}, [drawerState, addingPreset]); // Update the keyDownActions closure function.

	const keyDownActions = (e) => {
		if (addingPreset) {
			return;
		} else {
			switch (e.keyCode) {
				case 83: // s Key - Close the drawer when open
					handleCancelSettings();
					break;
			}
		}
	};

	//Register the options for study format and selected preset, along with adding presets.
	function changeSelectedPreset(event) {
		console.log(updatedOptions)
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

		//If the Effects Tab is open, close it.
		if (openEffectsSettings) {
			handleOpenEffectsSettings();
		}

		//If the Selection Tab is open, close it.
		if (openSelectionSettings) {
			handleOpenSelectionSettings();
		}

		//Update the preset and activate the Create Component
		setNewPreset(() => [presetName, presetBody]);
		setAddingPreset(true);
	}

	async function handleSaveSettings() {
		// Update the options in the App Settings
		setSettings((prevSettings) => ({
			...prevSettings,
			options: { ...updatedOptions },
		}));

		//Save updated settings to cache
		setCache("settingsCache", {
			...settings,
			options: { ...updatedOptions },
		});

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
		setAddingPreset(false);
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
			selected_study_format: `${title}`,
		}));

		//Allow to save the selected Preset
		handleSaveOptions();

		setAddingPreset(false);
	}

	//This function handles the deletion of the Selected Preset
	function handleDeletePreset() {
		//First, close the Edit Preset Component and the Confirm Delete Dialog
		setAddingPreset(false);
		closeDeleteDialog();

		//Call the presets and the selected to be removed
		const presetToDelete = updatedOptions.selected_study_format;
		const presetsAsArray = Object.entries(updatedOptions.study_format);

		// Filter out the preset to be removed
		const remainingPresetsArray = presetsAsArray.filter(
			([key]) => key !== presetToDelete,
		);

		const remainingPresetsObject = Object.fromEntries(remainingPresetsArray);

		// Get the first preset remaining
		const firstRemainingPresetName = remainingPresetsArray[0][0];

		// Update the updatedOptions with the remaining presets
		setUpdatedOptions((prevSettings) => ({
			...prevSettings,
			study_format: { ...remainingPresetsObject },
			selected_study_format: `${firstRemainingPresetName}`,
		}));
		//Allow to save the selected Preset
		handleSaveOptions();
	}

	//This code handles the Dialog to confirm the deletion of the Preset
	function openDeleteDialog() {
		setOpenDeletePresetConfirm(true);
	}

	function closeDeleteDialog() {
		setOpenDeletePresetConfirm(false);
	}

	return (
		<>
			<Dialog
				open={openDeletePresetConfirm}
				onClose={closeDeleteDialog}
				aria-labelledby="alert-dialog-delete-preset"
				aria-describedby="alert-dialog-confirm-delete-preset"
			>
				<DialogContent>
					<DialogContentText id="alert-dialog-delete-preset-description">
						Are you sure you want to delete this preset ? Once Saved, the preset
						can be recovered.
					</DialogContentText>
				</DialogContent>

				<DialogActions>
					<Button onClick={closeDeleteDialog} color="primary" autoFocus>
						Cancel
					</Button>
					<Button
						onClick={handleDeletePreset}
						color="secondary"
						variant="outlined"
					>
						Delete
					</Button>
				</DialogActions>
			</Dialog>

			<Drawer
				anchor={anchor}
				open={drawerState}
				onClose={() => {
					toggleDrawerFunc(false);
					setSaveOptions(false);
					setAddingPreset(false);
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
									<InputLabel id="study-format-setting-label">
										Preset
									</InputLabel>
									<Box
										sx={{
											display: "flex",
											alignItems: "center",
											gap: "0.5rem",
										}}
									>
										<Select
											labelId="study-format-setting-label"
											id="study-format-setting"
											value={updatedOptions.selected_study_format}
											label="Preset"
											onChange={(e) => changeSelectedPreset(e)}
											//Disable the Select if adding a new Preset.
											disabled={addingPreset}
											sx={{ display: "flex", flex: "1" }}
										>
											{/* List all the saved presets */}
											{Object.keys(updatedOptions.study_format).map(
												(preset) => {
													return (
														<MenuItem key={preset} value={preset}>
															{preset}
														</MenuItem>
													);
												},
											)}
										</Select>

										<Box
											sx={{
												display: "flex",
												flexDirection: "column",
												gap: "0.5rem",
											}}
										>
											{/* Edit the Preset */}
											{!addingPreset && (
												<IconButton
													aria-label="edit preset"
													onClick={handleEditPreset}
												>
													<EditIcon fontSize="small" />
												</IconButton>
											)}

											{/* Close the Preset */}
											{addingPreset && (
												<IconButton
													aria-label="close preset"
													onClick={() => setAddingPreset(false)}
												>
													<CloseIcon fontSize="small" />
												</IconButton>
											)}
										</Box>
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
											setNewPreset(["Meaningfull Name", []]);

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
										openDeleteDialog={openDeleteDialog}
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
											value={true}
											control={<Radio />}
											label="Allow"
										/>

										<FormControlLabel
											value={false}
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
							disabled={!saveOptions || addingPreset}
							onClick={handleSaveSettings}
							startIcon={<SaveIcon />}
						>
							Save
						</Button>

						<Button
							variant="outlined"
							disableElevation
							sx={{ ml: "0.2rem" }}
							onClick={() => {
								handleCancelSettings();
								setAddingPreset(false);
							}}
						>
							Cancel
						</Button>
					</Box>
				</Box>
			</Drawer>
		</>
	);
}

CollectionDrawer.propTypes = {
	anchor: PropTypes.string.isRequired,
	drawerState: PropTypes.bool.isRequired,
	toggleDrawerFunc: PropTypes.func.isRequired,
};

export default CollectionDrawer;
