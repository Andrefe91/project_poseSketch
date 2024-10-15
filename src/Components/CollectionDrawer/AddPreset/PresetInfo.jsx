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

	function modifySection(e) {
		let name = e.target.name;
		let value = e.target.value;
		let newSection = [];

		if (name == "repetition" && value < 1) {
			console.log(value);
			value = 1;
		}

		if (name == "repetition") {
			newSection = [value, section[1]];
		} else if (name == "time") {
			newSection = [section[0], value];
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
					/>

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
