import "./style.css"
import Link from 'next/link';
import Borrar from '@/components/borrar';

function ComercioBorrarPage() {
  return (
    <div>
    <div class="formulario-div">
      <h1>Informacion Comercio</h1>
      <Borrar tipo="admin" />
    </div>
    <div class="formulario-div">
      <h1>Atras</h1>
      <Link href="/admin/menu">
        <button>⬅</button>
      </Link>
    </div>
    </div>
    )
}
export default ComercioBorrarPage;