import React from "react";

import {Outlet} from "react-router-dom";

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
