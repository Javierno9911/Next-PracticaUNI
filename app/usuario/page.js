"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function LoginUsuario() {

    const router = useRouter()

    const [nombre, setNombre] = useState("")
    const [contrasena, setPassword] = useState("")

    const redirigir = (code) => {
        console.log("Code", code)
        if (code == 200) {
            router.push("/usuario/menu")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            nombre: nombre,
            contrasena: contrasena,
        }

        fetch("/api/lusuario", {
            method: "POST",
            headers: {
            //Authorization: `Bearer ${tokenJWT}`
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
           .then((res) => res.json())
           .then((data) => redirigir(data.status))
    }
    return (
        <section className="bg-[#4586ef]">
            <div className="container-registro">
                <div className="login">
                    <h2>LOGIN USUARIO</h2>
                    <label htmlFor="nombre">Nombre</label>
                    <input onChange={(e) => setNombre(e.target.value)} type="text" id="nom" className="nombre"></input>
                    <label htmlFor="nombre">Contraseña</label>
                    <input onChange={(e) => setPassword(e.target.value)} className="contraseña" id="con" type="text"></input>
                    <button onClick={handleSubmit} className="boton-login">LOGIN</button>
                    <Link href="/usuario/registro">
                      <p className="link-registro">¿No tienes cuenta?</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}