//Modules
import React from "react";
//Components
import DropZone from "../DropZone/DropZone";
import { Link } from "react-router-dom";
//Css
import "./homepage.css"

export default function HomePage () {
    return (
        <div className="container">
            <DropZone />
            <Link to={`collection`}>Go to collection</Link>
        </div>
    )
}

