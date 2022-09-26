import React from "react";
import '../styles/FormButton.css';

const FormButton = ( text ) => {
    return ( 
        <>
            <button type="submit" className="btn">
                {text}
            </button>
        </>
    );
}

export default FormButton;
