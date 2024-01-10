import React from 'react';
import './listaCajas.css';
import Caja from '@/components/cajaPagina';
function Filtros_Page({tipo}) {
    let cajita;
    switch (tipo) {
        case "invitado":
            cajita = (<Caja tipo="invitado"/>)
        break;
        case "usuario":
            cajita = (<Caja tipo="usuario"/>)
        break;
        default:
            cajita = (<Caja/>)
    }
  return (
    <div className="lsita-cajas-main">
        <li>
            <ul>
                {cajita}
            </ul>
        </li>
    </div>
  );
}

export default Filtros_Page;