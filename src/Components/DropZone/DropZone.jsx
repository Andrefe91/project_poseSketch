//Modules
import React, { useCallback, useMemo, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { IconButton } from "@mui/material";
import { toast } from "react-toastify";
//CSS
import "./dropzone.css";
//Context
import { imageContext } from "../../Context/imageContext";
//Icons
import DeleteIcon from "@mui/icons-material/Delete";

const baseStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "20px",
	borderWidth: 3,
	borderRadius: 2,
	borderColor: "#7777776e",
	borderStyle: "dashed",
	// backgroundColor: "#fafafa",
	color: "#bdbdbd",
	transition: "border .3s ease-in-out",
};

const activeStyle = {
	borderColor: "#2196f3",
};

const acceptStyle = {
	borderColor: "#00e676",
};

const rejectStyle = {
	borderColor: "#ff1744",
};

function DropZone() {
	const { validImages, setValidImages, invalidImages, setInvalidImages } =
		useContext(imageContext);

	//Pass the uploaded images to the wrapper component state
	const onDrop = useCallback((acceptedFiles, fileRejections) => {
		acceptedFiles.forEach((file) => {
			setValidImages((prevState) => [...prevState, file]);
		});

		fileRejections.forEach((file) => {
			setInvalidImages((prevState) => [...prevState, file]);
		});
	});

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
	} = useDropzone({
		onDrop,
		accept: {
			"image/*": [".jpeg", ".png"],
		},
	});

	//Varible to store the styles
	const style = useMemo(
		() => ({
			...baseStyle,
			...(isDragActive ? activeStyle : {}),
			...(isDragAccept ? acceptStyle : {}),
			...(isDragReject ? rejectStyle : {}),
		}),
		[isDragActive, isDragReject, isDragAccept],
	);

	function displayNotification(text) {
		toast.success(text, {
			position: "bottom-center",
			hideProgressBar: true,
			autoClose: 1000,
			closeOnClick: true,
			pauseOnHover: false,
		});
	}

	return (
		<section className="dropZone_container">
			<div {...getRootProps({ style })} className="dropZone">
				<div className="backImage">
					<input {...getInputProps()} />
				</div>
			</div>
			{/* Baisc feedback about the loaded files */}
			<aside>
				<ul className="fileList">
					{validImages.length > 0 && (
						<li>
							🎉{validImages.length}{" "}
							{validImages.length > 1 ? "Images" : "Image"} loaded and valid
							<IconButton
								aria-label="delete"
								size="small"
								color="error"
								className="deleteButton"
								onClick={() => {
									displayNotification("All images removed");
									setValidImages([]);
								}}
							>
								<DeleteIcon />
							</IconButton>
						</li>
					)}

					{invalidImages.length > 0 && (
						<li>
							{"🚨 " + invalidImages.length}{" "}
							{invalidImages.length > 1 ? "Files are" : "File is"} not valid
							(only PNG and JPG are allowed)
							<IconButton
								aria-label="delete"
								size="small"
								color="error"
								className="deleteButton"
								onClick={() => {
									displayNotification("Invalid files removed");
									setInvalidImages([]);
								}}
							>
								<DeleteIcon />
							</IconButton>
						</li>
					)}
				</ul>
			</aside>
		</section>
	);
}

export default DropZone;
