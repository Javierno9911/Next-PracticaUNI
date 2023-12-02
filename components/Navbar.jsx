import Link from 'next/link';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar py-5">
      <h1 className="text-3xl font-bold">CRUNCHYBITES</h1>
      <div className="button-container">
      <Link href="/">
          <button className="nav-button">INICIO</button>
        </Link>
        <Link href="/admin">
          <button className="nav-button">ADMIN</button>
        </Link>
        <Link href="/comercio">
          <button className="nav-button">COMERCIO</button>
        </Link>
        <Link href="/usuario">
          <button className="nav-button">USUARIO</button>
        </Link>
        <Link href="/invitado">
          <button className="nav-button">INVITADO</button>
        </Link>
      </div>
    </nav>
  );
}
