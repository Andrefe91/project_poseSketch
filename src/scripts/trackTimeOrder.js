export default function trackTimeOrder(timeBlocks, position) {
	let passedImages = 0;

	for (let i = 0; i < timeBlocks.length; i++) {
		let blockRepetitions = timeBlocks[i][0];
		let blockTime = timeBlocks[i][1];

		if (position < blockRepetitions + passedImages) {
			return [
				blockTime,
				`${position - passedImages } of ${blockRepetitions}`,
			];
		} else {
			passedImages += blockRepetitions;
		}
	}
}
