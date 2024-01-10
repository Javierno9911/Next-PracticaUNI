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
      const response = await fetch("/api/rcomercio", {
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
      // Puedes hacer algo más aquí, como mostrar un mensaje al usuario indicando que ocurrió un error
    }
  };
  //CASE COMERCIO
  const [nombre, setNombre] = useState('');
  const [ingredientes, setIngredientes] = useState('');

  const handleSubmitC = async (e) => {
    e.preventDefault();

    const publicaion = {
      nombre: nombre,
      ingredientes: ingredientes,
    }

    try {
      const response = await fetch("/api/rpublicacion", {
          method: "POST",
          headers: {
              //Authorization: `Bearer ${tokenJWT}`
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(publicaion)
      });
  
      if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
      router.push("/comercio/menu");
  } catch (error) {
      console.error("Error al realizar la solicitud:", error);
      // Puedes hacer algo más aquí, como mostrar un mensaje al usuario indicando que ocurrió un error en el inicio de sesión
  }
  };
  //CASE USUARIO
  const [nombreU, setNombreUsu] = useState('');
  const [contrasenaU, setContrasenaU] = useState('');
  const [ciudadU, setCiudadU] = useState('');
  const [edad, setEdad] = useState('');
  const [actividad, setActividad] = useState('');

  const handleSubmitU = async (e) => {
    e.preventDefault();
  
      const usuario = {
        nombre: nombreU,
        contrasena:contrasenaU,
        ciudad: ciudadU,
        edad: edad,
        actividad: actividad,
      }
  
      try {
        const response = await fetch("/api/rusuario", {
            method: "POST",
            headers: {
                //Authorization: `Bearer ${tokenJWT}`
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        });
    
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
        }
    
        const data = await response.json();
        console.log(data);
        router.push("/usuario");
    } catch (error) {
        console.error("Error al realizar la solicitud:", error);
        // Puedes hacer algo más aquí, como mostrar un mensaje al usuario indicando que ocurrió un error en el inicio de sesión
    }
    };
  let inputs;
  switch (tipo) {
    case 'admin':
      inputs = (
        <>
          <input onChange={(e) => setNombreComercio(e.target.value)} type="text" name="nombre" placeholder="Nombre Comercio" />
          <input onChange={(e) => setContrasenaA(e.target.value)} type="text" name="password" placeholder="Contraseña" />
          <input onChange={(e) => setCif(e.target.value)} type="text" name="cif" placeholder="CIF" />
          <input onChange={(e) => setCiudadA(e.target.value)} type="text" name="ciudad" placeholder="Ciudad"/>
          <input onChange={(e) => setDireccion(e.target.value)} type="text" name="direcion" placeholder="Dirección"/>
          <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" placeholder="E-mail"/>
          <input onChange={(e) => setTelefono(e.target.value)} type="text" name="telefono" placeholder="Teléfono"/>
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
          <input onChange={(e) => setNombreUsu(e.target.value)} type="text" placeholder="Nombre" value={nombreU}/>
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