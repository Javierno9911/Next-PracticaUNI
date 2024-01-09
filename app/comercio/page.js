"use client";

import "./style.css"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

function ComercioPage() {

    const router = useRouter()

    const [nombre, setNombre] = useState("")
    const [password, setPassword] = useState("")

    const redirigir = (code) => {
      console.log("Code", code)
      if (code == 200) {
          router.push("/comercio/menu")
      }
    }
    const handleSubmit = (e) => {

      e.preventDefault();
      const comercio = {
          email: nombre,
          password: password,
      }

      fetch("/api/lcomercio", {
          method: "POST",
          headers: {
          //Authorization: `Bearer ${tokenJWT}`
          'Content-Type': 'application/json',
          },
          body: JSON.stringify(comercio)
      })
         .then((res) => res.json())
         .then((data) => redirigir(data.status))
    }

    return (
        <div class="container-registro">
          <div class="login">
            <h2>LOGIN COMERCIO</h2>
            <label for="nombre">Nombre</label>
            <input onChange={(e) => setNombre(e.target.value)} type="text" id="nom" class="nombre"></input>
            <label for="nombre">Contraseña</label>
            <input onChange={(e) => setPassword(e.target.value)} class="contraseña" id="con" type="text"></input>
            <button onClick={handleSubmit} class="boton-login">LOGIN</button>
          </div>
        </div>
      )
}
export default ComercioPage;