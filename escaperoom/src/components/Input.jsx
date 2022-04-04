import React from "react";

import '../styles/Input.css';

const Input = ({inputType, labelText, placeholderText}) => {    

    return (
        <>
            <label for="input">{labelText}:</label>
            <input type={inputType} id="input" placeholder={placeholderText} autocomplete autofocus required></input>
        </>
    );
};

export default Input;
