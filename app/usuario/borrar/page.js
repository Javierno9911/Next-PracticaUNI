import "./style.css"
import Link from 'next/link';
import Borrar from '@/components/borrar';

function UsuarioBorrarPage() {
  return (
    <div class="formulario-div">
      <h1>BORRAR USUARIO</h1>
      <Borrar tipo="usuario" />
    </div>
    )
}
export default UsuarioBorrarPage;