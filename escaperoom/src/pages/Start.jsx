import React from "react";

import {Outlet} from "react-router-dom";

import LinkButton from '../components/LinkButton';

const Start = () => {
    return (
        <>
            <LinkButton reference={"/signup"} text={"Sign Up"} />

            <LinkButton reference={"/login"} text={"Log In"} />
            
            <Outlet />
        </>
    );
};

export default Start;
