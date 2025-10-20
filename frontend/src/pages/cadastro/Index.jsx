import './index.scss'
import { Link } from 'react-router';

export default function Cadastro() {
  return (
    <div className="cadastro-container">
      <div className="cadastro-lado-esquerdo">
        <img src="./Logo1.png" className="cadastro-logo" />
      </div>

      <div className="cadastro-lado-direito">
        <h1>Cadastro - Usuario</h1>

        <form className="cadastro-formulario">
          <label>Email:</label>
          <input type="email" placeholder="Digite seu E-mail" />

          <label>Cpf:</label>
          <input type="text" placeholder="Digite seu CPF" />

          <label>Senha:</label>
          <input type="password" placeholder="Digite sua Senha" />

          <button type="submit">Cadastrar</button>
        </form>

        <p className="cadastro-login">
          Já possui uma conta? 
          <Link to={'/login'}> Login</Link>
        </p>
      </div>
    </div>
  )
}
