/* use client */

import "./style.css";
import Link from 'next/link';
import { GET as getDatabase, database } from '../api/admin/route.js';

export async function GET() {
  const databaseResponse = await getDatabase();

  const databaseData = databaseResponse.data;

  return NextResponse.json({ message: 'Datos obtenidos de la base de datos', data: databaseData });
}
function AdminPage() {

  return (
    <div className="container-registro">
      <div className="login">
        <h2>LOGIN ADMIN</h2>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nom" className="nombre" />
        <label htmlFor="nombre">Contraseña</label>
        <input className="contraseña" id="con" type="text" />
        <Link href="/admin/menu">
          <button className="boton-login">LOGIN</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminPage;

