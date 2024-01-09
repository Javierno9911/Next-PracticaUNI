"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Formulario from '@/components/formulario';

function FormuAdminPage() {
  const [comercios, setComercios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Hacer una solicitud GET al servidor para obtener los comercios
        const response = await fetch('http://localhost:3001/admin');
        const data = await response.json();
        setComercios(data.data);
      } catch (error) {
        console.error('Error en la solicitud fetch:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="boton-atras-container">
        <Link href="/admin/menu">
          <button className="bton-atras">⬅</button>
        </Link>
      </div>
      <h1>Informacion Admin</h1>
      <ul>
        {comercios.map((comercio) => (
          <li key={comercio.id}>{comercio.nombre}</li>
        ))}
      </ul>
      <Formulario tipo="admin" />
    </div>
  );
}

export default FormuAdminPage;