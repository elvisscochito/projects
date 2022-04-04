import React from "react";

import "../styles/Link.css"

const LinkButton = ({reference, text, indexNumber}) => {
    return (
        <a href={reference} role="button" target="_blank" className="button" tabindex={indexNumber}>{text}</a>
    );
};

export default LinkButton;
