import React from "react";
import {Link, useNavigate} from "react-router-dom";

import "../styles/Link.css"

const LinkButton = ({reference, text}) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(reference, {replace: true})} role="button" className="button">{text}</button>
    );
};

export default LinkButton;
