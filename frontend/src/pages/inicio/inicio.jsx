import Cabecalho from "../../components/cabecalho/Cabecalho";
import './Inicio.scss';

export default function Inicio() {
  return (
    <div className="inicio-container">

      <Cabecalho/>

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
      
      <section className="qualidade-saude">
  <div className="onda-separadora">
    <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#fde7d9"
        d="M0,32L60,58.7C120,85,240,139,360,138.7C480,139,600,85,720,74.7C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64V120H0Z"
      />
    </svg>
  </div>

  <div className="qualidade-conteudo">
    <h2>Saúde de qualidade é para todos,<br />para qualquer dia e lugar</h2>

    <div className="qualidade-grid">
      <div className="qualidade-imagem">
        <img src="/ulta.jpeg" alt="Consulta com paciente" />
      </div>

      <div className="qualidade-cards">
        <div className="card card-grande">
          <img src="/imgcard.png"/>
          <p>Seja atendido por profissionais qualificados, usando equipamentos de alta tecnologia, com alta precisão</p>
        </div>

        <div className="card">
          <img src="/imgcard1.png"/>
          <p>Controle todo seu histórico médico pelo aplicativo</p>
        </div>

        <div className="retorno">
          <img src="/imgcard2.png"/>
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
