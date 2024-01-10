"use client";

import "./style.css";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const redirigir = (code, router) => {
    console.log("Code", code);
    if (code === 200) {
        console.log("Redireccionando a /comercio/menu");
        router.push("/comercio/menu");
    }
};

// Función para manejar la lógica asíncrona
const loginComercio = async (nombre, password, router) => {
    const comercio = {
        email: nombre,
        password: password,
    };

    try {
        const response = await fetch("/api/lcomercio", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(comercio),
        });

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const data = await response.json();
        redirigir(data.status, router);

    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        // Puedes hacer algo más aquí, como mostrar un mensaje al usuario indicando que ocurrió un error en el inicio de sesión
    }
};

// Componente del cliente
function ComercioPage() {
    const router = useRouter();
    const [nombre, setNombre] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        loginComercio(nombre, password, router);
    };

    return (
        <div className="container-registro">
            <div className="login">
                <h2>LOGIN COMERCIO</h2>
                <label htmlFor="nombre">Nombre</label>
                <input onChange={(e) => setNombre(e.target.value)} type="text" id="nom" className="nombre"></input>
                <label htmlFor="nombre">Contraseña</label>
                <input onChange={(e) => setPassword(e.target.value)} className="contraseña" id="con" type="text"></input>
                <button onClick={handleSubmit} className="boton-login">LOGIN</button>
            </div>
        </div>
    );
}
export default ComercioPage;