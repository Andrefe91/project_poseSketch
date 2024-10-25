export default function trackTimeOrder(timeBlocks, position) {
	let passedImages = 0;

	for (let i = 0; i < timeBlocks.length; i++) {
		let blockRepetitions = timeBlocks[i][0];
		let blockTime = timeBlocks[i][1];

		if (
			position <=
			(blockRepetitions == "b" ? 1 : blockRepetitions) + passedImages
		) {
			return [
				blockTime,
				blockRepetitions == "b"
					? "Break"
					: `${position - passedImages} of ${blockRepetitions}`,
			];
		} else {
			passedImages += blockRepetitions == "b" ? 1 : blockRepetitions;
		}
	}

	return [1, "End of Study"];
}
