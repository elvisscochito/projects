import React from "react";

import '../styles/ImageButton.css';

const ImageButton = ({picname, caption}) => {
    
    const src = `../assets/img/${picname}.png`

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
