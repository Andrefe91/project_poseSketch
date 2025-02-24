let appSettings = {
	theme: "light",
	// Add more settings as needed
	options: {
		order: "random",
		study_format: {
			"30 minutes": [[10, 30], [5, 60], [2, 300], [1, 600]],
			"1 hour": [
				[10, 30],
				[5, 60],
				[2, 300],
				[1, 600],
				["b", 300],
				[1, 1500],
			],
            "1 hour 30 minutes": [
                [6, 30],
                [3, 60],
                [2, 180],
                [1, 600],
                [1, 1500],
                ["b", 480],
                [1, 2100],
            ]
		},
		selected_study_format: "30 minutes",
        image_information: "hide",
        timer_visibility: "constant",
        timer_beeps: "3",
        pause_controls: "true",
	},
};

export default appSettings;
