import React from 'react';
import LinkButton from '../components/LinkButton';
import TextHeader from '../components/TextHeader';

function Start() {
    return (
        <>
            {/* <TextHeader text="Welcome to the Food Bank!" /> */}
            <LinkButton path="/signup" text="Sign Up" />
            <LinkButton path="/login" text="Log In" />
        </>
    );
}

export default Start;
