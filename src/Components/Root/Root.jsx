//Modules
import React, {useState} from "react";
import { Outlet } from "react-router-dom";
//Css
import "./root.css"
//Context
import { imageContext } from "../../Context/imageContext";

function Root () {
    const [validImages, setValidImages] = useState([])

    return (
        <imageContext.Provider value={{validImages, setValidImages}}>
            <Outlet />
        </imageContext.Provider>
    )
}

export default Root;
