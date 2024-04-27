import { Formulario } from './Formulario';
import LoginFooter from './LoginFooter';
import './login-container.css';

function Login() {
  return (
    <div className="">
      <div className="login-container">
        <div className="wrapper">
          <Formulario />
        </div>
        <LoginFooter />
      </div>
    </div>
  );
}

export default Login;
