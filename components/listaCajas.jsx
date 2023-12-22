import React from 'react';
import './listaCajas.css';
import Caja from '@/components/cajaPagina';

function Filtros_Page({ ciudad, actividad, tipo }) {
    let cajita;
    switch (tipo) {
        case "invitado":
            cajita = (<Caja/>)
        break;
        case "usuario":
            cajita = (<Caja ciudad={ciudad} actividad={actividad}/>)
        break;
        default:
            cajita = (<Caja/>)
    }
  return (
    <div className="lsita-cajas-main">
        <li>
            <ul>
                {cajita}
               {/* FALTA HACER QUE SALGAN LAS CAJAS QUE ESTEN EN LA BASE DE DATOS */}
            </ul>
            <ul>
                {cajita}
               {/* FALTA HACER QUE SALGAN LAS CAJAS QUE ESTEN EN LA BASE DE DATOS */}
            </ul>
        </li>
    </div>
  );
}

export default Filtros_Page;