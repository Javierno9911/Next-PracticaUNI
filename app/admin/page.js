/* use client */

/*import { useRouter } from 'next/navigation'*/
import Link from 'next/link';
import React from 'react';
function AdminPage() {/*
  const router = useRouter();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Validar credenciales (usuario y contraseña)
    if (username === 'admin' && password === '123') {
      // Credenciales correctas, redirigir a la página de menú del admin
      router.push('/admin/menu');
    } else {
      // Credenciales incorrectas, puedes manejar esto de acuerdo a tus necesidades
      alert('Credenciales incorrectas. Por favor, verifica tu nombre de usuario y contraseña.');
    }
  };*/
  return (
    <div className="container-registro">
      <div className="login">
        <h2>LOGIN ADMIN</h2>
        <label htmlFor="nom">Nombre</label>
        <input
          type="text"
          id="nom"
          className="nombre"
          /*value={username}
          onChange={handleUsernameChange}*/
        />
        <label htmlFor="con">Contraseña</label>
        <input
          className="contraseña"
          id="con"
          type="password"  // Cambiado a type="password" para ocultar la contraseña
         /* value={password}
          onChange={handlePasswordChange}*/
        />
        <Link href="/admin/menu">
          <button className="boton-login"/* onClick={handleLogin}*/>
            LOGIN
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminPage;