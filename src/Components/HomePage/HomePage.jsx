//Modules
import React from "react";
import { Button } from "@mui/material";
//Components
import DropZone from "../DropZone/DropZone";
import { Link } from "react-router-dom";
//Css
import "./homepage.css"

export default function HomePage () {
    return (
        <div className="container">
            <DropZone />
            <Button variant="contained">
                <Link to={`collection`}>Go to collection</Link>
            </Button>
        </div>
    )
}

