import React from "react";

import LinkButton from '../components/LinkButton';
import '../styles/Start.css';

const Start = () => {
    return (
        <div className="Start">
            <LinkButton reference={"/signup"} text={"Sign Up"} />

            <LinkButton reference={"/login"} text={"Log In"} />
            
        </div>
    );
};

export default Start;
