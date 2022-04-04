import React from "react";

import '../styles/Inputs.css';

const Inputs = ({inputType, labelText, placeholderText}) => {    

    return (
        <>
            <label for="input">{labelText}:</label>
            <input type={inputType} id="input" placeholder={placeholderText} autocomplete autofocus required></input>
        </>
    );
};

export default Inputs;
