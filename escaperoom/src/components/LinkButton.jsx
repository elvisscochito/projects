import React from "react";
import {Link} from "react-router-dom";

import "../styles/Link.css"

const LinkButton = ({reference, text}) => {
    return (
        <Link to={reference} role="button" className="Link-button">{text}</Link>
    );
};

export default LinkButton;
