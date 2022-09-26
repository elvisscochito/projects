import React, { useRef, useState } from 'react';
import '../styles/form.css';
import { useNavigate } from 'react-router-dom';

function LogIn() {
    const form = useRef();
    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = form.current.email.value;
        const password = form.current.password.value;

        if (email === "test@email.com" && password === "Testing193!") {
            navigate('/home', { replace: true });
            alert('Bienvenido');
        } else {
            alert('Error al iniciar sesión');
        }
    }
    return (
        <>
            <h1 className="form">Iniciar sesión</h1>
            <form ref={form} onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Correo electrónico" pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?" required/>
                <input type="password" name="password" placeholder="Contraseña" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" required/>
                <button type="submit">Continuar</button>
            </form>
        </>
    );
}

export default LogIn;
