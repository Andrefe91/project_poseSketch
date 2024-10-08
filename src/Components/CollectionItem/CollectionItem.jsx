//Modules
import React from "react";
import { PropTypes } from "prop-types";
//Css
import "./collectionitem.css"


function CollectionItem({imageFile}) {
    return (
        <>
            <div className="collection-item">
                <div className="image-display">
                    <img src={URL.createObjectURL(imageFile)} alt={imageFile.name} />
                </div>
                {console.log(imageFile)}
            </div>
        </>
    )
}


CollectionItem.propTypes = {
    imageFile: PropTypes.object.isRequired
}

export default CollectionItem;
