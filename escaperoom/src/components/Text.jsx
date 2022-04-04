import React from "react";

import '../styles/Text.css'

const Text = ({textCaption}) => {
    return (
        <span className="Text-caption">{textCaption}</span>
    );
};

export default Text;
