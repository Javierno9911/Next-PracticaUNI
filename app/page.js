import Link from 'next/link';
import "./style.css"
export default function Home() {
  return (
    <div class="container">
      <div class="inivtado_inicio">
        <div class="img-cro">
          <img  src="./ci.jpg"></img>
        </div>
        <div class="img-cro">
          <h2>INVITADO</h2>
          <p>Mira las croquetas mejor puntuadas sin registrarte en ningun apartado</p>
        </div>
        <div class="boton-entrar-inv">
          <Link href="/invitado">
            <button>ENTRAR</button>
          </Link>
        </div>
      </div>
      <div class="container-3">
        <div class="admin_inicio">
          <div class="texto-inicio">
            <h2>ADMIN</h2>
            <p>Gestiona comercios con facilidad y mantén a tus proveedores informados.</p>
          </div>
          <div class="boton-inicio">
            <Link href="/admin">
              <button>ENTRAR</button>
            </Link>
          </div>
        </div>
        <div class="admin_inicio">
          <div class="texto-inicio">
            <h2>COMERCIO</h2>
            <p>Añade, edita o elimina croquetas en un abrir y cerrar de ojos.</p>
          </div>
          <div class="boton-inicio">
            <Link href="/comercio">
              <button>ENTRAR</button>
            </Link>
          </div>
        </div>
        <div class="admin_inicio">
          <div class="texto-inicio">
            <h2>USUARIO</h2>
            <p>Conoce las mejores croquetas de tu region con filtros personalizados.</p>
          </div>
          <div class="boton-inicio">
            <Link href="/usuario">
              <button>ENTRAR</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
