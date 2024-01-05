import React from 'react';
import styles from './borrar.css';

function UsuarioBorrarPage({ tipo }) {
  let labelText = "";

  switch (tipo) {
    case "usuario":
      labelText = "SI DESEAS BORRAR EL USUARIO, DALE AL BOTÓN";
      break;
    case "comercio":
      labelText = "SI DESEAS BORRAR EL COMERCIO, DALE AL BOTÓN";
      break;
    default:
      labelText = "SI DESEAS BORRAR, DALE AL BOTÓN";
  }

  return (
    <div className={styles["container-borrar"]}>
      <div className={styles["titulo-menu"]}>
      </div>
      <div className={styles["boton-borrar-usur"]}>
        <label htmlFor="select1">{labelText}</label>
        <button className={styles["boton-menu-user"]}>BORRAR</button>
      </div>
    </div>
  );
}

export default UsuarioBorrarPage;