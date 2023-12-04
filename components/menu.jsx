import React from 'react';
import styles from './menu.css';

function MenuPage({ tipo }) {
  let botones;

  switch (tipo) {
    case 'admin':
      botones = (
        <>
          <div>
            <button className={styles["boton-menu-user"]}>CREAR COMERCIO</button>
          </div>
          <div>
            <button className={styles["boton-menu-user"]}>BORRAR COMERCIO</button>
          </div>
        </>
      );
      break;
    case 'comercio':
      botones = (
        <>
          <div>
            <button className={styles["boton-menu-user"]}>AÑADIR CROQUETA</button>
          </div>
          <div>
            <button className={styles["boton-menu-user"]}>BORRAR CROQUETA</button>
          </div>
          <div>
            <button className={styles["boton-menu-user"]}>BORRAR COMERCIO</button>
          </div>
        </>
      );
      break;
    case 'usuario':
        botones = (
            <>
              <div>
                <button className={styles["boton-menu-user"]}>FILTROS</button>
              </div>
              <div>
                <button className={styles["boton-menu-user"]}>BORRAR</button>
              </div>
            </>
          );
      break;
    default:
      botones = (
        <>
          <div>
            <button className={styles["boton-menu-user"]}>Botón 1</button>
          </div>
          <div>
            <button className={styles["boton-menu-user"]}>Botón 2</button>
          </div>
          <div>
            <button className={styles["boton-menu-user"]}>Botón 3</button>
          </div>
          <div>
            <button className={styles["boton-menu-user"]}>Botón 4</button>
          </div>
        </>
      );
      break;
  }

  return (
    <div>
      <div className={styles["titulo-menu"]}>
        <h1>MENU</h1>
      </div>
      <div className={styles["container-de-select"]}>
        {botones}
      </div>
    </div>
  );
}

export default MenuPage;