import React from 'react';
import styles from './borrar.css';

function UsuarioBorrarListaPage({ tipo }) {
  let labelText = "";

  switch (tipo) {
    case "admin":
      labelText = "SI DESEAS BORRAR EL USUARIO, DALE AL BOTÓN A";
      break;
    case "comercio":
      labelText = "SI DESEAS BORRAR EL COMERCIO, DALE AL BOTÓN";
      break;
    default:
      labelText = "SI DESEAS BORRAR, DALE AL BOTÓN A";
  }

    {/* ESTE NO ES LA INTERFAZ FINAL */}

  return (
    
    <div className={styles["container-borrar"]}>
      <div className={styles["titulo-menu"]}>
        <h1>MENU</h1>
      </div>
      <div className={styles["boton-borrar-usur"]}>
        <label htmlFor="select1">{labelText}</label>
        <button className={styles["boton-menu-user"]}>BORRAR</button>
      </div>
    </div>
  );
}

export default UsuarioBorrarListaPage;