//Modules
import React from "react";
import { PropTypes } from "prop-types";
//Css
import "./collectionitem.css"


function CollectionItem({imageFile, number}) {
    const imageName = imageFile.name.toLowerCase();
    const imageNameCapitalize = imageName.split(".")[0][0].toUpperCase() + imageName.split(".")[0].slice(1);

    return (
        <>
            <div className="collection-item">
                <div className="image-display">
                    <img src={URL.createObjectURL(imageFile)} alt={imageNameCapitalize} />
                </div>

                <div className="image-details">
                    <p>{imageNameCapitalize}</p>
                    <p>#{number + 1}</p>
                </div>
            </div>
        </>
    )
}


CollectionItem.propTypes = {
    imageFile: PropTypes.object.isRequired,
    number: PropTypes.number.isRequired
}

export default CollectionItem;
