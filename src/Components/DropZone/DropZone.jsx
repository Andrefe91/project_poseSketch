//Modules
import React, { useCallback, useMemo, useContext } from "react";
import { useDropzone } from "react-dropzone";
//CSS
import "./dropzone.css";
//Context
import { imageContext } from "../../Context/imageContext";

const baseStyle = {
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "20px",
	borderWidth: 2,
	borderRadius: 2,
	borderColor: "#eeeeee",
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
    const { setValidImages } = useContext(imageContext)


    //Pass the uploaded images to the wrapper component state
	const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            setValidImages((prevState) => [...prevState, file]);
        })
	});

	const {
		getRootProps,
		getInputProps,
		isDragActive,
		isDragAccept,
		isDragReject,
		acceptedFiles,
		fileRejections,
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

	return (
		<section>
			<div {...getRootProps({ style })} className="test">
				<input {...getInputProps()} />
			</div>

			<div>
				{isDragAccept && <p>All files are valid</p>}
				{isDragReject && <p>Some files are not images (.png or .jpg)</p>}
				{!isDragActive && (
					<p>Drag and drop images here or click to select files</p>
				)}
			</div>

            {/* Baisc feedback about the loaded files */}
			<aside>
				<h4>Files:</h4>
				<ul>
                    {acceptedFiles.length > 0 && (
                        <li>{acceptedFiles.length} images are loaded and valid</li>
                    )}

                    {fileRejections.length > 0 && (
                        <li>{fileRejections.length} files are not valid (only PNG and JPG are allowed)</li>
                    )}
                </ul>
			</aside>
		</section>
	);
}

export default DropZone;
