'use client';
import {useRouter} from 'next/navigation'
import Link from 'next/link';
import "./style.css"
function UsuarioPage() {
    const router = useRouter();

    const handleClick = async (valor) => {
        console.log(`Valor seleccionado: ${valor}`);

        // Cambia 'valorSeleccionado' a 'valor' en el body del fetch
        try {
            const response = await fetch("/api/rpuntuacion", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ valor }), // Cambio aquí
            });

            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            router.push("/usuario/publicaciones");
        } catch (error) {
            console.error("Error al realizar la solicitud:", error);
        }
    };

    return (
        <div className="container-registro">
            <div className="boton-atras-container">
                <Link href="/usuario/publicaciones">
                    <button className="bton-atras">⬅</button>
                </Link>
            </div>
            <div className="col">
                <div className="titulo">
                    <h1>PUNTUACION CROQUETA</h1>
                </div>
                <div className="col-0">
                    <h4>0</h4>
                    <button className="estrellas-p" onClick={() => handleClick(0)}>⭐</button>
                </div>
                
                <div className="col-1">
                    <h4>1</h4>
                    <button className="estrellas-p" onClick={() => handleClick(1)}>⭐</button>
                </div>
                
                <div className="col-2">
                    <h4>2</h4>
                    <button className="estrellas-p" onClick={() => handleClick(2)}>⭐</button>
                </div>
                
                <div className="col-3">
                    <h4>3</h4>
                    <button className="estrellas-p" onClick={() => handleClick(3)}>⭐</button>
                </div>
                
                <div className="col-4">
                    <h4>4</h4>
                    <button className="estrellas-p" onClick={() => handleClick(4)}>⭐</button>
                </div>
                
                <div className="col-5">
                    <h4>5</h4>
                    <button className="estrellas-p" onClick={() => handleClick(5)}>⭐</button>  
                </div>
                
            </div>
        </div>
      )
}
export default UsuarioPage;