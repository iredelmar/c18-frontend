export function Formulario() {
  return (
    <div>
      <h2>INICIAR SESIÓN</h2>
      <br />
      <div>
        <label htmlFor="email">Correo Electrónico</label>

        <br />
        <input type="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Ingrese su Contraseña</label>
        <br />
        <input type="password" id="password" />
      </div>

      <div className="flex flex-col items-center">
        <button className="text-purple-700">Recupere su contraseña</button>
        <button className="my-2">Iniciar Sesión</button>
      </div>
    </div>
  );
}
