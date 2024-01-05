import React from 'react';
import styles from './menu.css';
import Link from 'next/link';
function MenuPage({ tipo }) {
  let botones;

  switch (tipo) {
    case 'admin':
      botones = (
        <>
          <div>
          <Link href="/admin/crear">
            <button className={styles["boton-menu-user"]}>CREAR COMERCIO</button>
          </Link>
          </div>
          <div>
            <Link href="/admin/borrar">
            <button className={styles["boton-menu-user"]}>BORRAR COMERCIO</button>
            </Link>
          </div>
        </>
      );
      break;
    case 'comercio':
      botones = (
        <>
          <div>
          <Link href="/comercio/crear">
            <button className={styles["boton-menu-user"]}>AÑADIR CROQUETA</button>
            </Link>
          </div>
          <div>
          <Link href="/comercio/borrar_publicacion">
            <button className={styles["boton-menu-user"]}>BORRAR CROQUETA</button>
            </Link>
          </div>
          <div>
          <Link href="/comercio/lista-puntuaciones">
            <button className={styles["boton-menu-user"]}>LSITADO DE PUNTUACIONES</button>
            </Link>
          </div>
          <div>
          <Link href="/comercio/borrar">
            <button className={styles["boton-menu-user"]}>BORRAR COMERCIO</button>
            </Link>
          </div>
        </>
      );
      break;
    case 'usuario':
        botones = (
            <>
              <div>
              <Link href="/usuario/filtros">
                <button className={styles["boton-menu-user"]}>FILTROS</button>
                </Link>
              </div>
              <div>
              <Link href="/usuario/borrar">
                <button className={styles["boton-menu-user"]}>BORRAR</button>
                </Link>
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