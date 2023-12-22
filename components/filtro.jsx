import React from 'react';
import './filtro.css';
import Link from 'next/link';

function Filtros_Page() {
  return (
    <div className="container-menu">
      <div className="titulo-menu">
        <h1>MENU</h1>
      </div>
      <div className="container-de-select">
        <div>
          <label htmlFor="select1">Ciudad</label>
          <select className="ciudad-select" id="select1">
            <option value="">Ninguna ciudad ❌</option>
            <option value="">Madrid 🏙️</option>
            <option value="">Barcelona 🏙️</option>
            <option value="">Valencia 🏙️</option>
          </select>
        </div>

        <div>
          <label htmlFor="select2">Actividad</label>
          <select className="actividad-select" id="select2">
            <option value="">Ninguna actividad ❌</option>
            <option value="">Tapeo 🍺</option>
            <option value="">Gourmet 🍽️</option>
            <option value="">Menu 🍱</option>
          </select>
        </div>
      </div>
      <div className="boton-buscar-usur">
        <Link href="/usuario/main_usuario">
          <button className="boton-menu-user">BUSCAR</button>
        </Link>
      </div>
    </div>
  );
}

export default Filtros_Page;