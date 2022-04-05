import React from "react";

import LinkButton from '../components/LinkButton';

const Start = () => {
    return (
        <>
            <LinkButton reference={"/"} text={"Sign Up"} />

            <LinkButton reference={"/login"} text={"Log In"} />
        </>
    );
};

export default Start;
