import React from "react";

import LinkButton from '../components/LinkButton';
import '../styles/Start.css';

const Start = () => {
    return (
        <div className="Start vw-100 vh-100">
            <div className="centerLinkButton">
                <LinkButton reference={"/signup"} text={"Sign Up"} />

                <LinkButton reference={"/login"} text={"Log In"} />
            </div>
        </div>
    );
};

export default Start;
