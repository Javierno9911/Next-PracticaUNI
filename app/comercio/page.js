"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


export default function LoginComercio() {

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
        const user = {
            nombre: nombre,
            password: password,
        }

        fetch("/api/lcomercio", {
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
                    <h2>LOGIN COMERCIO</h2>
                    <label htmlFor="nombre">Nombre</label>
                    <input onChange={(e) => setNombre(e.target.value)} type="text" id="nom" className="nombre"></input>
                    <label htmlFor="nombre">Contraseña</label>
                    <input onChange={(e) => setPassword(e.target.value)} className="contraseña" id="con" type="text"></input>
                    <button onClick={handleSubmit} className="boton-login">LOGIN</button>
                </div>
            </div>
        </section>
    )
}