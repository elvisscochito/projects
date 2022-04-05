import React from "react";

import '../styles/ImageButton.css';

const ImageButton = ({pictureName, caption}) => {
    
    const src = require(`../assets/img/${pictureName}.png`)

    return (
        <>
            <figure>
                <img src={src} />
                <figcaption>{caption}</figcaption>
            </figure>
        </>
    );
}

export default ImageButton;
