import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/form.css';
import FormButton from '../components/FormButton';

function SignUp() {
    const form = useRef();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = form.current.email.value;
        const password = form.current.password.value;
        const passwordConfirm = form.current.passwordConfirm.value;

        if (password !== passwordConfirm) {
            alert('Las contraseñas no coinciden');
        } else {
            if (password === passwordConfirm) {
                navigate('/home', { replace: true });
            } else {
                alert('Error al registrarse');
            }
        }
    }
    return (
        <>
            <h1 className="form">Registrarse</h1>
            <form ref={form} onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Correo electrónico" /* pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" */ required/>
                <input type="password" name="password" placeholder="Contraseña" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" required/>
                <input type="password" name="passwordConfirm" placeholder="Confirmar contraseña" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" required/>
                <button type="submit">Continuar</button>
            </form>
        </>
    );
}

export default SignUp;
