import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import './Inicio.scss';

export default function Inicio() {
  const navigate = useNavigate();

  useEffect(() => {
    const usuario = localStorage.getItem("USUARIO");
    const token = localStorage.getItem("TOKEN");

    if (!usuario || !token) {
      navigate('/login');
    }
  }, [navigate]);


  return (
    <div className="inicio-container">
      <Cabecalho />

      <section className="main-consulta">
        <div className="main-logo">
          <img src="/medica2.png" alt="Médica" className="main-hero-img" />
        </div>

        <div className="main-agenda">
          <h1>
            AGENDE SUA <br /> CONSULTA
          </h1>
          <p>
            Profissionais qualificados prontos para cuidar da sua saúde,
            oferecendo atenção humanizada, experiência comprovada e
            acompanhamento personalizado.
          </p>
          <button className="btn-agendar-main">AGENDE AQUI</button>
        </div>
      </section>

    
      <div className="onda-separadora">
        <svg
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="#fde7d9"
            d="M0,240 C300,400 1140,100 1440,260 L1440,400 L0,400 Z"
          />
        </svg>
      </div>

      <section className="qualidade-saude">
        <div className="qualidade-conteudo">
          <h2>Saúde de qualidade é para todos,<br />para qualquer dia e lugar</h2>

          <div className="qualidade-grid">
            <div className="qualidade-imagem">
              <img src="/ulta.jpeg" alt="Consulta com paciente" />
            </div>

            <div className="qualidade-cards">
              <div className="card card-grande">
                <img src="/imgcard.png" />
                <p>Seja atendido por profissionais qualificados, usando equipamentos de alta tecnologia, com alta precisão</p>
              </div>


              <div className="card">
                <img src="/imgcard1.png" />
                <p>Controle todo seu histórico médico pelo aplicativo</p>
              </div>


              <div className="retorno">
                <img src="/imgcard2.png" />
                <p>Agende seu retorno facilmente</p>
              </div>


              <div className="calend">
                <img src="/imgcard3.png" />
                <p>Agende pelo aplicativo, site ou telefone, até para o mesmo dia</p>
              </div>


              <div className="pagamento">
                <img src="/imgcard4.png" />
                <p>Pague de forma facilitada, com exames em até 10x sem juros</p>
              </div>
              

            </div>


          </div>

        </div>


      </section>
    </div>
  );
}
