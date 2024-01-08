"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

function AdminPage() {
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
    if (username === 'admin' && password === '123') {
      router.push('/admin/menu');
    } else {
      console.log('Verifica tu nombre de usuario y contraseña, una de las dos esta incorrecta.');
    }
  };

  return (
    <div className="container-registro">
      <div className="login">
        <h2>LOGIN ADMIN</h2>
        <label htmlFor="nom">Nombre</label>
        <input
          type="text"
          id="nom"
          className="nombre"
          value={username}
          onChange={handleUsernameChange}
        />
        <label htmlFor="con">Contraseña</label>
        <input
          className="contraseña"
          id="con"
          type="password" 
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="boton-login" onClick={handleLogin}>
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default AdminPage;