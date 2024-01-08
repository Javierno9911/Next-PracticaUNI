import "./style.css"
import Link from 'next/link';
import Borrar from '@/components/borrar';

function UsuarioBorrarPage() {
  return (
    <div>
      <div className="boton-atras-container">
        <Link href="/usuario/menu">
          <button className="bton-atras">⬅</button>
        </Link>
      </div>
      <div class="formulario-div">
        <h1>BORRAR USUARIO</h1>
        <Borrar tipo="usuario" />
      </div>
    </div>
    
    )
}
export default UsuarioBorrarPage;