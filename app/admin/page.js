import "./style.css"
import Link from 'next/link';
function AdminPage() {
    return (
        <div class="container-registro">
          <div class="login">
            <h2>LOGIN ADMIN</h2>
            <label for="nombre">Nombre</label>
            <input type="text" id="nom" class="nombre"></input>
            <label for="nombre">Contraseña</label>
            <input class="contraseña" id="con" type="text"></input>
            <Link href="/admin/menu">
              <button class="boton-login">LOGIN</button>
            </Link>
          </div>
        </div>
      )
}
export default AdminPage;