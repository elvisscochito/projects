import React from "react";

import Input from "../components/Input";

const SignUp = () => {
    return (
        <>
            <Input inputType={"email"} labelText={"Email"} placeholderText={"example@email.com"} />
            
            <Input inputType={"password"} labelText={"Password"} placeholderText={"type your password"} />
        </>
    );
};

export default SignUp;
