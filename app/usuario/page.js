import "./style.css"
import Link from 'next/link';
function UsuarioPage() {
    return (
        <div class="container-registro">
          <div class="login">
            <h2>LOGIN USUARIO</h2>
            <label for="nombre">Nombre</label>
            <input type="text" id="nom" class="nombre"></input>
            <label for="nombre">Contraseña</label>
            <input class="contraseña" id="con" type="text"></input>
            <button class="boton-login">LOGIN</button>
            <Link href="/usuario/registro">
                <p class="link-registro">¿No tienes cuenta?</p>
            </Link>
          </div>
        </div>
      )
}
export default UsuarioPage;