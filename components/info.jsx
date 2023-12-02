import React from 'react';
import './info.css';

const ContactosRedesSociales = () => {
  return (
    <div className="contactos-redes-sociales">
      <div className="contactos">
        <h3>Contacto</h3>
        <p>Email: javier.nunez@live.u-tad.com</p>
        <p>Teléfono: (555) 123-4567</p>
      </div>
      <div className="redes-sociales">
        <h3>Redes Sociales</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/javier-núñez-osuna-04aa23175">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactosRedesSociales;