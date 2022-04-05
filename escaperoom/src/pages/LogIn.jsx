import React from "react";

import Input from "../components/Input";

const LogIn = () => {
    return (
        <>
            <Input inputType={"email"} labelText={"Email"} placeholderText={"example@email.com"} />
            
            <Input inputType={"password"} labelText={"Password"} placeholderText={"type your password"} />
        </>
    );
};

export default LogIn;
