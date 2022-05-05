import React from "react";

import Input from "../components/Input";
import Button from "../components/Button";

const LogIn = () => {
    return (
        <>
            <Input inputType={"email"} labelText={"Email"} placeholderText={"example@email.com"} />
            
            <Input inputType={"password"} labelText={"Password"} placeholderText={"type your password"} />

            <Button classStyle={"Button Success"} buttonText={"Submit"}/>
        </>
    );
};

export default LogIn;
