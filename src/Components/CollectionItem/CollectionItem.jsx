//Modules
import React from "react";
import { PropTypes } from "prop-types";
//Css
import "./collectionitem.css"


function CollectionItem({imageFile, number}) {
    let imageName = imageFile.name.split(".")[0][0].toUpperCase() + imageFile.name.toLowerCase().split(".")[0].slice(1);

    if (imageName.length > 15) {
        imageName = imageName.slice(0, 15).trim() + "...";  //Limit the image name to 10 characters and add ellipsis if necessary.  //Limit the image name to 10 characters and add ellipsis if necessary.  //Limit the image name to 10 characters and add ellipsis if necessary.  //Limit the image name to 10 characters and add ellipsis if necessary.  //Limit the image name to 10 characters and add ellipsis if necessary.  //Limit the image name to 10 characters and add ellipsis if necessary.  //Limit the image name to 10 characters and add ellipsis if necessary.  //Limit the image name to 10 characters and add ellipsis if necessary.  //Limit the image name to 10 characters and add ellipsis if necessary.  //Limit the image name to 10 characters and add ellipsis if necessary.  //Limit the image name to 10 characters and add
    }


    return (
        <>
            <div className="collection-item">
                <div className="image-display">
                    <img src={URL.createObjectURL(imageFile)} alt={imageName} />
                </div>

                <div className="background">
                    <div className="image-details">
                        <p>{imageName}</p>
                        <p>#{number + 1}</p>
                    </div>

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
