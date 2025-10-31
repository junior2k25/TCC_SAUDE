import './index.scss'
import { Link } from 'react-router';

export default function Desenvolvedores() {
  return (
    <header className="dev-cabecalho">
      <div className="logo-dev-cabecalho">
        <Link to={"/"}>
        <img src="/logoDEV.webp" alt="desenvolveros" className="logo-cabecalho-dev" />
        </Link>
      </div>

      <nav className="nav-dev-cabecalho">
        <a href="contato">Contato</a>
        <a href="">home</a>
        <a href="sobre">Sobre Nós</a>
      </nav>

      <div className=''>

      </div>
    </header>
    

    
  );
}
