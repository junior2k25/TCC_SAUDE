import './login.scss'
import { Link } from 'react-router'

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-lado-esquerdo">
        <img src="./Logo1.png" className="login-logo" />
      </div>

      <div className="login-lado-direito">
        <h1> Login - Usuario</h1>

        <form className="login-formulario">

          <label>Cpf:</label>
          <input type="text" placeholder="Digite seu CPF" />

          <label>Senha:</label>
          <input type="password" placeholder="Digite sua Senha" />

          <button type="submit">Entrar</button>

          <p className="login-registro">
            não possui uma conta?
            <Link to={'/cadastro'}> Cadastrar</Link>
          </p>
        </form>

      </div>
    </div>
  )
}
