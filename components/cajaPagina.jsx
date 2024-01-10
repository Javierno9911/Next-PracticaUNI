'use client';
import React from 'react';
import './cajaPagina.css';
import Link from 'next/link';

function Caja({ tipo }) {
    let caja;
    switch (tipo) {
        case "invitado":
            caja = (
                <div className="container-lista-pagina">
                    <div className="div-caja">
                        <div className="nombre-actividad">
                            <h4>CROQUETAS AL HORNO</h4>
                        </div>
                        <div className="informacion-extra">
                            <p>MADIRD</p>
                            <p>PINTO</p>
                            <p>609678903</p>
                        </div>
                        <div className="elementos-importantes">
                            <div className="tipo-de-actividad">
                                <p>🍽️</p>
                            </div>

                                <div className="continuar-pagina">
                                    <Link href="/invitado/publicaciones">
                                        <p>➡️</p>
                                    </Link>
                                </div> 
                        </div>
                    </div>  
                </div>
            );
            break;
        case "usuario":
            caja = (
                <div className="container-lista-pagina">
                    <div className="div-caja">
                        <div className="nombre-actividad">
                            <h4>CROQUETAS AL HORNO</h4>
                        </div>
                        <div className="informacion-extra">
                            <p>MADIRD</p>
                            <p>PINTO</p>
                            <p>609678903</p>
                        </div>
                        <div className="elementos-importantes">
                            <div className="tipo-de-actividad">
                                <p>🍽️</p>
                            </div>

                                <div className="continuar-pagina">
                                    <Link href="/usuario/publicaciones">
                                        <p>➡️</p>
                                    </Link>
                                </div> 
                        </div>
                    </div>  
                </div>
            );
            break;
        default:
            // Manejar el caso por defecto según tu lógica
            break;
    }
    return caja;
}

export default Caja;