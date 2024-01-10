import "./style.css"
import Link from 'next/link';
function UsuarioPage() {
    return (
        <div className="container-registro">
          <div className="login">
            <h2>LOGIN USUARIO</h2>
            <label for="nombre">Nombre</label>
            <input type="text" id="nom" className="nombre"></input>
            <label for="nombre">Contraseña</label>
            <input className="contraseña" id="con" type="text"></input>
            <Link href="/usuario/menu">
              <button className="boton-login">LOGIN</button>
            </Link>
            <Link href="/usuario/registro">
                <p className="link-registro">¿No tienes cuenta?</p>
            </Link>
          </div>
        </div>
      )
}
export default UsuarioPage;