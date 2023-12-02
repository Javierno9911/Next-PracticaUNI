import Link from 'next/link';
import "./style.css"
export default function Home() {
  return (
    <div class="container">
      <div class="inivtado_inicio">
        <h2>INVITADO</h2>
        <Link href="/invitado">
          <button>INVITADO</button>
        </Link>
      </div>
      <div class="container-3">
        <div class="admin_inicio">
          <h2>ADMIN</h2>
          <p></p>
          <Link href="/admin">
            <button>ADMIN</button>
          </Link>
        </div>
        <div class="comercio_inicio">
          <h2>COMERCIO</h2>
          <p></p>
          <Link href="/comercio">
            <button>COMERCIO</button>
          </Link>
        </div>
        <div class="usuairo_inicio">
          <h2>USUARIO</h2>
          <p></p>
          <Link href="/usuario">
            <button>USUARIO</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
