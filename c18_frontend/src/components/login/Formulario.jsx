import { useState } from 'react';

export function Formulario() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log(password);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <h2>INICIAR SESIÓN</h2>
      <br />

      <div>
        <label htmlFor="email">Correo Electrónico</label>
        <br />
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          id="email"
          value={email}
        />
      </div>

      <div>
        <label htmlFor="password">Ingrese su Contraseña</label>
        <br />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          id="password"
          value={password}
        />
      </div>

      <div>
        <button type="button" className="text-purple-700">
          Recupere su contraseña
        </button>
        <button type="submit" className="my-2">
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
}
