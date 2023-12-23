import React from 'react';
import './listaCajas.css';
import Caja from '@/components/cajaPagina';
import Caja2 from '@/components/cajaCroqueta';
function Filtros_Page({ ciudad, actividad, tipo }) {
    let cajita;
    let cajita2;
    switch (tipo) {
        case "invitado":
            cajita = (<Caja/>)
            cajita2 = (<Caja2 tipo="invitado" />)
        break;
        case "usuario":
            cajita = (<Caja ciudad={ciudad} actividad={actividad}/>)
            cajita2 = (<Caja2 tipo="usuario" />)
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
                {cajita2}
               {/* FALTA HACER QUE SALGAN LAS CAJAS QUE ESTEN EN LA BASE DE DATOS */}
            </ul>
        </li>
    </div>
  );
}

export default Filtros_Page;