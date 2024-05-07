import { useState } from 'react';

export function Formulario() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email);
  console.log(password);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center ">
      <h1>
        <b>INICIE SESION</b>
      </h1>
      <br />

      <div>
        <label htmlFor="email" className="text-purple-700">
          Correo Electrónico:
        </label>
        <br />
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          id="email"
          value={email}
        />
      </div>

      <div>
        <label htmlFor="password" className="text-purple-700">
          Ingresa tu contraseña:
        </label>
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
          <b>Recupera tu contraseña</b>
        </button>
        <br />
      </div>
      <div>
        <br />
        <button
          type="submit"
          className="bg-white text-purple-700 px-4 py-2 rounded-full shadow-md border border-purple-700 transition duration-300 ease-in-out hover:bg-purple-700 hover:text-white hover:border-transparent  "
        >
          <b>INICIAR SESION</b>
        </button>
      </div>
    </form>
  );
}
