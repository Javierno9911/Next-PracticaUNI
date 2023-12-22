import React from 'react';
import './cajaPagina.css';
import Link from 'next/link';

function Filtros_Page(ciudad, actividad) {
    let c = ciudad;
    let a = actividad;
  return (
    <div className="container-lista-pagina">
        <div className="div-caja">
            <div className="nombre-actividad">
                <h4>CROQUETAS AL HORNO</h4>
            </div>
            <div className="informacion-extra">
                {/* {c} */}
                <p>MADIRD</p>
                <p>PINTO</p>
                <p>609678903</p>
            </div>
            <div className="elementos-importantes">
                <div className="tipo-de-actividad">
                    {/* {a}*/}
                    <p>🍽️</p>
                </div>

                    <div className="continuar-pagina">
                        <p>➡️</p>
                    </div> 

            </div>
        </div>  
    </div>
    
  );
}

export default Filtros_Page;