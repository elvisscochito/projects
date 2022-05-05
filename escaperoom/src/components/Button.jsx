import React from "react";
import Button from "react-bootstrap/Button";

import '../styles/Button.css';

const ButtonComponent = ({Buttonfunction, classStyle, buttonText}) => {
    return (
        <>
            <button onClick={Buttonfunction} className={classStyle} type="submit">{buttonText}</button>
        </>
    );
};

export default ButtonComponent;
