//Modules
import React from "react";
import { FormControl, TextField, Box, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import InputAdornment from "@mui/material/InputAdornment";
//Icons
import DeleteIcon from "@mui/icons-material/Delete";

function PresetItem({
	index,
	section,
	deleteSection,
	handleChangePresetBody,
	presetBodyLenght,
}) {
	let [repetition, time] = section;
	let timePatter = /^\d+(s|m)?$/;

	//Convert to text time for User commodity
	if (time % 60 == 0) {
		time = Math.floor(time / 60) + "m";
	} else {
		time = time + "s";
	}

	function modifySection(e) {
		let name = e.target.name;
		let value = e.target.value;
		let newSection = [];

		if (name == "repetition" && value < 1) {
			value = 1;
		}

		if (name == "repetition") {
			newSection = [value, section[1]];
		} else if (name == "time") {

			//Only allow the patter defined for a time in minutes or seconds
			if (timePatter.test(value) || value == "") {
				newSection = [section[0], value];
			} else { return }
		} else {
			return;
		}

		handleChangePresetBody((prevBody) => [
			...prevBody.slice(0, index),
			newSection,
			...prevBody.slice(index + 1),
		]);
	}

	return (
		<>
			<FormControl>
				<Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
					{repetition != "b" ? (
						// When is a Study Section
						<TextField
							id={`Section-${index}-repetition`}
							type="number"
							required
							name="repetition"
							value={repetition}
							onChange={(e) => modifySection(e)}
							slotProps={{
								input: {
									startAdornment: (
										<InputAdornment position="start">#</InputAdornment>
									),
								},
							}}
							sx={{ width: "80%" }}
						/>
					) : (
						// When is a Break Section
						<TextField
							disabled
							id={`Section-${index}-repetition`}
							type="text"
							required
							name="repetition"
							value="Break"
							sx={{ width: "80%" }}
						/>
					)}

					<div>-</div>

					<TextField
						id={`Section-${index}-time`}
						type="text"
						required
						name="time"
						onChange={(e) => modifySection(e)}
						value={time}
					/>

					<IconButton
						aria-label="delete section"
						onClick={() => deleteSection(index)}
						disabled={presetBodyLenght < 2}
					>
						<DeleteIcon />
					</IconButton>
				</Box>
			</FormControl>
		</>
	);
}

PresetItem.propTypes = {
	index: PropTypes.number.isRequired,
	section: PropTypes.array.isRequired,
	deleteSection: PropTypes.func.isRequired,
	handleChangePresetBody: PropTypes.func.isRequired,
	presetBodyLenght: PropTypes.number.isRequired,
};

export default PresetItem;
