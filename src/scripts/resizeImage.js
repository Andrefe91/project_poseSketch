function resizeImage(file, maxWidth, maxHeight, callback) {
	// Create a FileReader to read the file
	const reader = new FileReader();

	reader.onload = function (event) {
		const img = new Image();

		img.onload = function () {
			// Create a canvas to draw the image onto
			const canvas = document.createElement("canvas");
			const ctx = canvas.getContext("2d");

			// Calculate the new dimensions
			const ratio = Math.min(maxWidth / img.width, maxHeight / img.height);
			const newWidth = img.width * ratio;
			const newHeight = img.height * ratio;

			// Set the canvas dimensions to the new size
			canvas.width = newWidth;
			canvas.height = newHeight;

			// Draw the resized image onto the canvas
			ctx.drawImage(img, 0, 0, newWidth, newHeight);

			// Convert the canvas to a Blob or Data URL
			canvas.toBlob(function (blob) {
				// Call the callback with the resized image Blob
				callback(blob);
			}, file.type); // Use the original file type (e.g., image/jpeg)
		};

		// Set the image source to the FileReader result (base64 string)
		img.src = event.target.result;
	};

	// Read the image file as a data URL
	reader.readAsDataURL(file);
}

export default resizeImage;
