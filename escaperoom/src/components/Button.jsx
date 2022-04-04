import React from "react";

import '../styles/Button.css';

const Button = ({classStyle, buttonText}) => {
    return (
        <>
            <button className={classStyle}>{buttonText}</button>
        </>
    );
};

export default Button;
