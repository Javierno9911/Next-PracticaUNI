import "./style.css"
import Link from 'next/link';
import Borrar from '@/components/borrar';

function UsuarioBorrarPage() {
  return (
    <div class="formulario-div">
      <h1>Informacion Comercio</h1>
      <Borrar tipo="admin" />
    </div>
    )
}
export default UsuarioBorrarPage;