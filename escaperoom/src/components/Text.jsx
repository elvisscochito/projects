import React from "react";

import '../styles/Text.css'

const Text = ({textCaption}) => {
    return (
        <h1 className="Text-caption">{textCaption}</h1>
    );
};

export default Text;
