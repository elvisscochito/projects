import React from "react";
import '../styles/TextHeader.css';

const TextHeader = ({ text }) => {
    return (
        <header className="Text-header">
            <div>
                <h1>{text}</h1>
            </div>
            <hr/>
        </header>
    );
}

export default TextHeader;
