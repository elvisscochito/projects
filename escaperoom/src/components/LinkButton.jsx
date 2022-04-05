import React from "react";
import {Link} from "react-router-dom";

import "../styles/Link.css"

const LinkButton = ({reference, text, indexNumber}) => {
    return (
        <Link to={reference} role="button" className="button" tabindex={indexNumber}>{text}</Link>
    );
};

export default LinkButton;
