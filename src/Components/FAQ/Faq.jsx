//Modules
import React from "react";
//Components
import StaticAppBar from "../StaticAppBar/StaticAppBar";
import FootBar from "../FootBar/FootBar";

function Faq() {
    return (
        <>
            <StaticAppBar selected="faq" />
            <p> Ok, yes, but why ?. </p>
            <FootBar />
        </>
    );
}

export default Faq;
