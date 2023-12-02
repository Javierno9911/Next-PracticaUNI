import Link from 'next/link';

export default function Home() {
  return (
    <div class="container">
      <div>
        <h2>INVITADO</h2>
        <Link href="/invitado">
          <button>INVITADO</button>
        </Link>
      </div>
      <div>
        <div>
          <h2>ADMIN</h2>
          <p></p>
          <Link href="/admin">
            <button>ADMIN</button>
          </Link>
        </div>
        <div>
          <h2>COMERCIO</h2>
          <p></p>
          <Link href="/comercio">
            <button>COMERCIO</button>
          </Link>
        </div>
        <div>
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
