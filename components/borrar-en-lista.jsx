// TipoLista.jsx
import React from 'react';
import styles from './tipo-lista.css';  // Importar el archivo de estilos
import Link from 'next/link';

function BorrarLista({ tipo }) {
  let botones;

  switch (tipo) {
    case 'admin':
      botones = (
        <>
          <div className="caja">
            <div className="titulo-menu">
              <h1>LISTA DE COMERCIOS</h1>
            </div>
            <ul>
              <li>Nombre CIF Ciudad <button>BORRAR</button></li>
              <li>Nombre CIF Ciudad <button>BORRAR</button></li>
              <li>Nombre CIF Ciudad <button>BORRAR</button></li>
            </ul>
          </div>
        </>
      );
      break;
    case 'comercio':
      botones = (
        <>
          <div className="caja">
            <div className="titulo-menu">
              <h1>LISTA DE USUARIOS</h1>
            </div>
            <ul>
              <li>Nombre <button>BORRAR</button></li>
              <li>Nombre <button>BORRAR</button></li>
              <li>Nombre <button>BORRAR</button></li>
            </ul>
          </div>
        </>
      );
      break;
    default:
      botones = (
        <>
          <div className="caja">
            <div className="titulo-menu">
              <h1>LISTA DE INVITADOS</h1>
            </div>
            <ul>
              <li>Nombre</li>
              <li>Nombre</li>
              <li>Nombre</li>
            </ul>
          </div>
        </>
      );
      break;
  }

  return (
    <div className="contenedor">
      {botones}
    </div>
  );
}

export default BorrarLista;