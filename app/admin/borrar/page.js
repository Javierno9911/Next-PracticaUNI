import "./style.css"
import Link from 'next/link';
import Borrar from '@/components/borrar-en-lista';

function ComercioBorrarPage() {
  return (
    <div className="formulario-div">
      <div className="boton-atras-container">
        <Link href="/admin/menu">
          <button className="bton-atras">⬅</button>
        </Link>
      </div>
      <div className="borrar-container">
        <Borrar tipo="admin" />
      </div>
    </div>
  );
}

export default ComercioBorrarPage;