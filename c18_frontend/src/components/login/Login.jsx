import { Formulario } from './Formulario';
import LoginFooter from './LoginFooter';
import './login-container.css';

function Login() {
  return (
    <div className="">
      <div className="login-container">
      <img src="src\assets\img\imageiniciosesion1.png" alt="Descripción de la imagen" className="imagen-formulario" />
        <div className="wrapper">
          <Formulario />
        </div>
        <LoginFooter />
      </div>
    </div>
  );
}

export default Login;
