import React from 'react';
import LinkButton from '../components/LinkButton';
import TextHeader from '../components/TextHeader';
import '../styles/Start.css';
import logo from '../images/logo.png';

function Start() {
    return (
        <>
        <div className="start">
                {/* <figure> */}
                    <img src={logo} alt="logo" />
                    {/* <figcaption>Welcome to the Food Bank!</figcaption>
                </figure> */}
            <div className="container">
                <LinkButton path="/login" text="Iniciar sesión" />
                <LinkButton path="/signup" text="Registrarse" />
            </div>
        </div>
        </>
    );
}

export default Start;
