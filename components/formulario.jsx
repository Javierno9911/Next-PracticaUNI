// @react
import React from 'react';
import styles from './formulario.css';
import Link from 'next/link';
const Formulario = ({ tipo }) => {
  let inputs;

  switch (tipo) {
    case 'admin':
      inputs = (
        <>
          <input type="text" placeholder="Nombre Comercio" />
          <input type="text" placeholder="Contraseña" />
          <input type="text" placeholder="CIF" />
          <input type="text" placeholder="Ciudad" />
          <input type="text" placeholder="Direcion" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Telefono" />
          <button type="submit">Enviar</button>
        </>
      );
      break;
    case 'comercio':
      inputs = (
        <>
          <input
            type="text"
            placeholder="Nombre"
          />
          <input
            type="text"
            placeholder="Ingredientes"
          />
          <button type="submit">
            Enviar
          </button>
        </>
      );
      break;
    case 'usuario':
      inputs = (
        <>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Contraseña" />
          <input type="text" placeholder="Ciudad" />
          <input type="text" placeholder="Edad" />
          <input type="text" placeholder="Actividad" />
          <button type="submit">Enviar</button>
        </>
      );
      break;
    default:
      inputs = null;
  }

  return (
    <form className={styles.formulario}>
      {inputs}
    </form>
  );
};

export default Formulario;