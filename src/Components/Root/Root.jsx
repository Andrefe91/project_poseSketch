//Modules
import React from "react";
import { Outlet } from "react-router-dom";
//Components
//Css
import "./root.css"

function Root () {
    return (
        <>
            <Outlet />
        </>
    )
}

export default Root;
