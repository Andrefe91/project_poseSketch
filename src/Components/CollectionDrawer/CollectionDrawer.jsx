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
} from "@mui/material";
//CSS
import "./collection-drawer.css";
//Context
import { settingsContext } from "../../Context/settingsContext";
//Icons
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";

function CollectionDrawer({ anchor, drawerState, toggleDrawerFunc }) {
	const [openSelectionSettings, setOpenSelectionSettings] = useState(true);
	const [openStudySettings, setOpenStudySettings] = useState(false);
	const [openEffectsSettings, setOpenEffectsSettings] = useState(false);
	const [saveOptions, setSaveOptions] = useState(false);

	//Settings of the whole application, obtained from a context
	const { settings, setSettings } = useContext(settingsContext);

	//From settings, handle options change
	let options = settings.options;

	function handleOptionChange(event) {
		const name = event.target.name;
		const value = event.target?.value;

		//Only set option value y name and value exist and are defined
		if (name && value) {
			options[name] = value;
		}

		// Update the options in the App Settings
		setSettings((prevSettings) => ({
			...prevSettings,
			options: options,
		}));

		console.log(settings);
	}

	//Allow to save options
	function handleSaveOptions() {
		setSaveOptions(true);
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
					width: 300,
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
						<Box sx={{ pl: "2rem", mt: "1rem", pr: "1rem" }}>
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
									defaultValue={options.order}
									name="order"
									onChange={handleSaveOptions}
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
							<FormControl sx={{ minWidth: 220 }}>
								<InputLabel id="study-format-setting-label">Preset</InputLabel>
								<Select
									labelId="study-format-setting-label"
									id="study-format-setting"
									value={"30 minutes"}
									label="Preset"
								>
									<MenuItem value={"30 minutes"}>30 minutes</MenuItem>
									<MenuItem value={"default_2"}>Default 2</MenuItem>
									<MenuItem value={"default_3"}>Default 3</MenuItem>
								</Select>
							</FormControl>

							<Button
								size="small"
								sx={{ mt: "0.2rem", mb: "0.2rem" }}
								startIcon={<AddIcon />}
							>
								Add Preset
							</Button>
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
									defaultValue={options.image_information}
									onChange={handleSaveOptions}
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
									defaultValue={options.timer_visibility}
									onChange={handleSaveOptions}
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
									defaultValue={options.timer_beeps}
									onChange={handleSaveOptions}
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
									defaultValue={options.pause_controls}
									onChange={handleSaveOptions}
									name="pause_control"
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
					<Button variant="contained" disableElevation disabled={!saveOptions}>
						Save
					</Button>
					<Button variant="contained" disableElevation sx={{ ml: "0.2rem" }}>
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
