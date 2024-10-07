//Modules
import React from "react";
import { useRouteError } from "react-router-dom";
//CSS
import "./errorpage.css"

export default function ErrorPage() {
    const error = useRouteError();
    console.log(`An error has occurred: ${error}`);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                 <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
