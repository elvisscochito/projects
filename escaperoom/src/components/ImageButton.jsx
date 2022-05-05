import React from "react";

import { useNavigate } from "react-router-dom";

import '../styles/ImageButton.css';

const ImageButton = ({path, pictureName}) => {
    
    const src = `/assets/img/${pictureName}.svg`;

    const navigate = useNavigate();
  
    const goTo = (path) => {
        navigate(path)
    }

    return (
        <div onClick={() => goTo(path)} className="ImageButton">
            <img src={src} />
        </div>
    );
}

export default ImageButton;
