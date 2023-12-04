import React from 'react';
import './filtro.css';

function FormuPage() {
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
        <button className="boton-menu-user">BUSCAR</button>
      </div>
    </div>
  );
}

export default FormuPage;