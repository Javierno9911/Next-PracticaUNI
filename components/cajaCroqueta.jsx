// @react
import React from 'react';
import PropTypes from 'prop-types';
import './cajaCroqueta.css';
import Link from 'next/link';

function Croqueta_Info({ tipo }) {
    let puntuar;

    switch (tipo) {
        case 'usuario':
            puntuar = (
            <Link href="/usuario/puntuacion">
                <button className="puntuar-boton">⭐</button>
            </Link>
            );
            break;
        case 'invitado':
            break;
        default:
            break;
    }

    return (
        <div className="container-lista-croqueta">
            <div className="div-caja-croqueta">
                <div className="nombre-croqueta">
                    <h4>CROQUETAS 1</h4>
                </div>
                <div className="informacion-croqueta">
                    <p>JAMON Y COCIDO</p>
                </div>
                <div className="elementos-importantes">
                    <div className="container-puntuar-boton">
                        {puntuar}
                    </div> 
                </div>
            </div>  
        </div>
    );
}

Croqueta_Info.propTypes = {
    tipo: PropTypes.oneOf(['usuario', 'invitado']),
};

export default Croqueta_Info;