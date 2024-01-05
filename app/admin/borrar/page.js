import "./style.css"
import Link from 'next/link';
import Borrar from '@/components/borrar-en-lista';

function ComercioBorrarPage() {
  return (
    <div>
    <div class="formulario-div">
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