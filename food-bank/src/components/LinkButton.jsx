import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ path, text}) => {
    return ( 
        <>
            <div className="btn">
                <Link to={path} role="button" className="btn">
                {text}
                </Link>
            </div>
        </>
    );
}   

export default LinkButton;
