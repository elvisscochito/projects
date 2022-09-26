import React from "react";
import { Link } from "react-router-dom";
import '../styles/LinkButton.css';

const LinkButton = ({ path, text}) => {
    return ( 
        <>
            <Link to={path} role="button" className="btn">
            {text}
            </Link>
        </>
    );
}   

export default LinkButton;
