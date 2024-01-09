"use client";
//react
import React, { useState, useEffect  } from 'react';
import styles from './formulario.css';

const Formulario = ({ tipo }) => {
  //CASE ADMIN
  const [nombreComercio, setNombreComercio] = useState('');
  const [contrasenaA, setContrasenaA] = useState('');
  const [cif, setCif] = useState('');
  const [ciudadA, setCiudadA] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNombreComercioChange = (e) => {
    setNombreComercio(e.target.value);
  };

  const handleContrasenaAChange = (e) => {
    setContrasenaA(e.target.value);
  };

  const handleCifChange = (e) => {
    setCif(e.target.value);
  };

  const handleCiudadAChange = (e) => {
    setCiudadA(e.target.value);
  };

  const handleDireccionChange = (e) => {
    setDireccion(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    setTelefono(e.target.value);
  };

  const handleSubmitA = async (e) => {
    e.preventDefault();

    try {
      // Hacer una solicitud POST al servidor Next.js
      const response = await fetch('/api/admin/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: nombreComercio,
          password: contrasenaA,
          cif,
          city: ciudadA,
          direcion: direccion,
          correo: email,
          telefono,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        setSuccessMessage('Datos enviados correctamente.');
        setErrorMessage('');
        // Lógica para manejar la respuesta del servidor después de guardar los datos...
      } else {
        setSuccessMessage('');
        setErrorMessage('Error al enviar los datos.');
      }

    } catch (error) {
      console.error('Error en la solicitud fetch:', error);
      setSuccessMessage('');
      setErrorMessage('Error al enviar los datos.');
    }
  };

  //CASE COMERCIO
  const [nombre, setNombre] = useState('');
  const [ingredientes, setIngredientes] = useState('');

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleIngredientesChange = (e) => {
    setIngredientes(e.target.value);
  };

  const handleSubmitC = (e) => {
    e.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Ingredientes:', ingredientes);
  };

  //CASE USUARIO

  const [nombreUsu, setNombreUsu] = useState('');
  const [contrasenaU, setContrasenaU] = useState('');
  const [ciudadU, setCiudadU] = useState('');
  const [edad, setEdad] = useState('');
  const [actividad, setActividad] = useState('');

  const handleNombreUsuChange = (e) => {
    setNombreUsu(e.target.value);
  };

  const handleContrasenaUChange = (e) => {
    setContrasenaU(e.target.value);
  };

  const handleCiudadUChange = (e) => {
    setCiudadU(e.target.value);
  };

  const handleEdadChange = (e) => {
    setEdad(e.target.value);
  };

  const handleActividadChange = (e) => {
    setActividad(e.target.value);
  };

  const handleSubmitU = (e) => {
    e.preventDefault();

    console.log('Nombre:', nombreUsu);
    console.log('Contraseña:', contrasenaU);
    console.log('Ciudad:', ciudadU);
    console.log('Edad:', edad);
    console.log('Actividad:', actividad);
  };

  let inputs;

  switch (tipo) {
    case 'admin':
      inputs = (
        <>
          <input type="text" placeholder="Nombre Comercio" value={nombreComercio} onChange={handleNombreComercioChange} />
          <input type="text" placeholder="Contraseña" value={contrasenaA} onChange={handleContrasenaAChange} />
          <input type="text" placeholder="CIF" value={cif} onChange={handleCifChange} />
          <input type="text" placeholder="Ciudad" value={ciudadA} onChange={handleCiudadAChange} />
          <input type="text" placeholder="Dirección" value={direccion} onChange={handleDireccionChange} />
          <input type="text" placeholder="E-mail" value={email} onChange={handleEmailChange} />
          <input type="text" placeholder="Teléfono" value={telefono} onChange={handleTelefonoChange} />
          <button type="submit" onClick={handleSubmitA}>Enviar</button>
        </>
      );

    break;
    case 'comercio':
      inputs = (
        <>
          <input type="text" placeholder="Nombre" value={nombre} onChange={handleNombreChange} />
          <input type="text" placeholder="Ingredientes" value={ingredientes} onChange={handleIngredientesChange} />
          <button type="submit" onClick={handleSubmitC}>Enviar</button>
        </>
      );
    break;
    case 'usuario':
      inputs = (
        <>
          <input type="text" placeholder="Nombre" value={nombreUsu} onChange={handleNombreUsuChange} />
          <input type="text" placeholder="Contraseña" value={contrasenaU} onChange={handleContrasenaUChange} />
          <input type="text" placeholder="Ciudad" value={ciudadU} onChange={handleCiudadUChange} />
          <input type="text" placeholder="Edad" value={edad} onChange={handleEdadChange} />
          <input type="text" placeholder="Actividad" value={actividad} onChange={handleActividadChange} />
          <button type="submit" onClick={handleSubmitU}>Enviar</button>
        </>
      );
      break;
    default:
      inputs = null;
  }

  return (
    <form className={styles.formulario}>
      {inputs}
      {successMessage && <div className={styles.successMessage}>{successMessage}</div>}
      {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
    </form>
  );
};

export default Formulario;