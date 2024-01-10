'use client';
import Link from 'next/link';
import "./style.css"
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

async function getUsers() {
    const res = await fetch("http://localhost:3000/api/comercio");
    if (!res.ok) {
        throw new Error(`Error en la solicitud: ${res.status}`);
    }
    const data = await res.json();
    console.log(data.users);
    return data.users;
}

export default function Inicio() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Llamada a la función getUsers y actualización del estado con los datos obtenidos
        getUsers()
            .then(data => setUsers(data))
            .catch(error => console.error("Error al obtener usuarios:", error));
    }, []); // El segundo parámetro [] indica que este efecto se ejecuta solo una vez al montar el componente

    return (
        <div>
            <div className="boton-atras-container">
                <Link href="/admin/menu">
                    <button className="bton-atras">⬅</button>
                </Link>
            </div>
            <ul>
                <p>LISTA DE COMERCIOS</p>
                {users.map((user) => (
                    <li key={uuidv4()}>
                        <h5 className="font-bold">{user.nombre}</h5>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}