import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (usuario === 'admin' && password === 'abcd') {
      login(usuario);
      console.log('Login Exitoso!');
      navigate('/admin');
    } else if(usuario === 'user' && password === '1234'){
        login(usuario);
        console.log('User logueado correctamente');
        navigate('/');
      
    } else {
        alert('Credenciales incorrectas');
    }


  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      <div>
        <label htmlFor='user'>Usuario:</label>
        <input
          id="user"
          type="text"
          value={usuario}
          placeholder='admin o user'
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='contrasenia'>Contraseña:</label>
        <input
          id="contrasenia"
          type="password"
          placeholder='abcd o 1234'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Aceptar</button>
    </form>);
}
export default Login;