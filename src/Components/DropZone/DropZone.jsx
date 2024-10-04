//Modules
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
//CSS
import "./dropzone.css"

export default function DropZone() {
    const onDrop = useCallback(acceptedFiles => {
        console.log("Received files:", acceptedFiles);
    }, [])

    const { getRootProps, getInputProps } = useDropzone({onDrop})

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div>Drag and drop images here</div>
        </div>
    )
}
