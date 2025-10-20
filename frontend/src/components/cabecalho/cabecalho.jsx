import { Link } from "react-router";
import './cabecalho.scss';

export default function Header() {
  return (
    <header className="header-cabecalho">
      <div className="logo-area-cabecalho">
        <img src="/logo.png" alt="Saúde com Você" className="logo-cabecalho" />
        <h1>SAÚDE COM VOCÊ</h1>
      </div>

      <nav className="nav-cabecalho">
        <a href="#">Início</a>
        <a href="#">Contato</a>
        <a href="#">Sobre Nós</a>
      </nav>

    </header>
  )
}
