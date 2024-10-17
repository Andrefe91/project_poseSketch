export default function presetBodyConvert(body) {
	let bodyConverted = [];

	body.forEach((item) => {
		let repetitions = item[0] == "b" ? "b" : item[0] * 1;
		let format = `${item[1]}`.slice(-1);
        let time;

        if ( /[sSmM]/.test(format)) {
            time = item[1].slice(0, -1);
        } else {
            time = item[1];
        }

		if (format === "m") {
			time = time * 60;
			bodyConverted.push([repetitions, time]);
		} else {
			bodyConverted.push([repetitions, time * 1.0]);
		}
	});

	return bodyConverted;
}
