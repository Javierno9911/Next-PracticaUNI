"use client";
import React, { useState} from 'react';
import {useRouter} from 'next/navigation'
import styles from './formulario.css';

const Formulario = ({ tipo }) => {
  const router = useRouter()
  //CASE ADMIN

  const [nombreComercio, setNombreComercio] = useState('');
  const [contrasenaA, setContrasenaA] = useState('');
  const [cif, setCif] = useState('');
  const [ciudadA, setCiudadA] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');

 // const [successMessage, setSuccessMessage] = useState('');
 // const [errorMessage, setErrorMessage] = useState('');

  const handleSubmitA = async (e) => {
  e.preventDefault();

    const comercio = {
      nombre: nombreComercio,
      password: contrasenaA,
      cif: cif,
      city: ciudadA,
      direcion: direccion,
      correo: email,
      telefono: telefono,
    }

    try {
      const response = await fetch("/api/regiscomercio/route", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${tokenJWT}`
        },
        body: JSON.stringify(comercio)
      });

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      router.push("/admin/menu");
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
      }
  };
  //CASE COMERCIO
  const [nombre, setNombre] = useState('');
  const [ingredientes, setIngredientes] = useState('');

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
          <input onChange={(e) => setNombreComercio(e.target.value)} type="text" placeholder="Nombre Comercio" value={nombreComercio}  />
          <input onChange={(e) => setContrasenaA(e.target.value)} type="text" placeholder="Contraseña" value={contrasenaA}  />
          <input onChange={(e) => setCif(e.target.value)} type="text" placeholder="CIF" value={cif}  />
          <input onChange={(e) => setCiudadA(e.target.value)} type="text" placeholder="Ciudad" value={ciudadA}  />
          <input onChange={(e) => setDireccion(e.target.value)} type="text" placeholder="Dirección" value={direccion}/>
          <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="E-mail" value={email}  />
          <input onChange={(e) => setTelefono(e.target.value)} type="text" placeholder="Teléfono" value={telefono}  />
          <button type="submit" onClick={handleSubmitA}>Enviar</button>
        </>
      );

    break;
    case 'comercio':
      inputs = (
        <>
          <input onChange={(e) => setNombre(e.target.value)} type="text" placeholder="Nombre" value={nombre}/>
          <input onChange={(e) => setIngredientes(e.target.value)} type="text" placeholder="Ingredientes" value={ingredientes}/>
          <button type="submit" onClick={handleSubmitC}>Enviar</button>
        </>
      );
    break;
    case 'usuario':
      inputs = (
        <>
          <input onChange={(e) => setNombreUsu(e.target.value)} type="text" placeholder="Nombre" value={nombreUsu}/>
          <input onChange={(e) => setContrasenaU(e.target.value)} type="text" placeholder="Contraseña" value={contrasenaU}  />
          <input onChange={(e) => setCiudadU(e.target.value)} type="text" placeholder="Ciudad" value={ciudadU}  />
          <input onChange={(e) => setEdad(e.target.value)} type="text" placeholder="Edad" value={edad}  />
          <input onChange={(e) => setActividad(e.target.value)} type="text" placeholder="Actividad" value={actividad}  />
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
    </form>
  );
};

export default Formulario;