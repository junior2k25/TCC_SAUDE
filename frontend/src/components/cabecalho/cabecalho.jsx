import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./cabecalho.scss";

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  function sair() {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USUARIO");
    navigate("/login");
  }

  return (
    <header className="header-cabecalho">
      <div className="logo-area-cabecalho">
        <Link to={'/'}>
        <img src="/logo.png" alt="Saúde com Você" className="logo-cabecalho" />
        </Link>
        <h1>SAÚDE COM VOCÊ</h1>
      </div>

      <nav className="nav-cabecalho">
        <a href="/blogs">Blogs</a>
        <a href="/">Início</a>
        <a href="/sobre">Sobre Nós</a>
      </nav>

      <div
        className={`menu-icone ${menuAberto ? "ativo" : ""}`}
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {menuAberto && (
        <div className="menu-suspenso">
          <a href="/consulta"><button>Consultas</button></a>
            <br />
          <button onClick={sair}>Sair</button>
        </div>
      )}
    </header>
  );
}
