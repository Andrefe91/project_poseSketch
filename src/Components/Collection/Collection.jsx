//Modules
import React, {useContext, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
//Components
import CollectionItem from "../CollectionItem/CollectionItem";
//CSS
import "./collection.css"
//Context
import { imageContext } from "../../Context/imageContext";
//Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Collection() {
    const { validImages } = useContext(imageContext) //Get the images from the context
    const navigate = useNavigate();

    useEffect(() => {
        //In case there are no images, redirect to HomePage
        if (validImages.length === 0) {
            navigate('/')
        }
    }, [validImages])

    const imageGrid = validImages.map((file, index) => (
        <CollectionItem key={index} imageFile={file} number={index}/>
    ))

    return (
        <>
            <Link to={"/"} className="main-links">
                <ArrowBackIcon /> Go Back
            </Link>

            <div className="collection-container">
                {imageGrid}
            </div>
        </>
    )
}


export default Collection;
