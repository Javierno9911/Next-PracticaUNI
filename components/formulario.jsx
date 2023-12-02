import React from 'react';
import styles from './formulario.css';

const Formulario = ({ tipo }) => {
  let inputs;

  switch (tipo) {
    case 'admin':
      inputs = (
        <>
          <input type="text" placeholder="Nombre Comercio" />
          <input type="text" placeholder="CIF" />
          <input type="text" placeholder="Ciudad" />
          <input type="text" placeholder="Direcion" />
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Telefono" />
        </>
      );
      break;
    case 'comercio':
      inputs = (
        <>
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Imagen" />
          <input type="text" placeholder="Ingredientes" />
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
        </>
      );
      break;
    default:
      inputs = null;
  }

  return (
    <form className={styles.formulario}>
      {inputs}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;