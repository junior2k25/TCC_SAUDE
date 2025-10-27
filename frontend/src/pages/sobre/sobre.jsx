import Cabecalho from "../../components/cabecalho/Cabecalho";
import Rodape from "../../components/rodape/rodape";
import './sobre.scss';

export default function Sobre() {
  return (
    <div className="sobre-container">
      <Cabecalho />

      <section className="sobre-consulta">
        <div className="sobre-logo">
          <img src="/medicos.png" alt="Médica" className="sobre-hero-img" />
        </div>

        <div className="sobre-agenda">
          <h1>Sobre Nós</h1>
          <p>
            No Saúde com Você, acreditamos que cuidar da saúde não precisa ser complicado.
            Nascemos com o propósito de aproximar você do atendimento médico de forma rápida,
            acessível e humanizada. Aqui, cada consulta é muito mais do que um atendimento:
            é atenção, confiança e cuidado de verdade. Contamos com profissionais qualificados,
            tecnologia a favor da saúde e um compromisso: colocar você no centro de tudo.
          </p>
        </div>
      </section>

      <section className="sobre-saude">
        <div className="sobre-conteudo">
          <h3>
            A experiência dos Clientes com <br />
            Saúde com Você
          </h3>

          <div className="sobre-grid">
         
            <div className="sobre-card">
              <img src="/feliz2.webp" alt="Cliente feliz" />
            </div>

          
            <div className="sobre-card">
              <p>
                Há uma demanda muito grande, de fato, porém recebi um atendimento humanizado
                pela equipe de enfermagem desta unidade quando fui realizar um teste de intolerância à lactose.
                Me explicaram como era feito o exame, sempre se preocupando com meu bem-estar.
              </p>
              <div className="stars">★★★★★</div>
              <span className="data">23 de Abril de 2025</span>
            </div>

            
            <div className="sobre-card">
              <p>
                Fiz um exame de endoscopia pela primeira vez na vida hoje rs.
                Fui muito bem atendida por toda a equipe desde a recepção até o atendimento em si.
              </p>
              <div className="stars">★★★★★</div>
              <span className="data">29 de Agosto de 2025</span>
            </div>

         
            <div className="sobre-card">
              <p>
                O atendimento é o melhor, com profissionais muito educados e atenciosos,
                sem palavras — super recomendo.
              </p>
              <div className="stars">★★★★★</div>
              <span className="data">17 de Março de 2025</span>
            </div>
          </div>
        </div>
      </section>

      < Rodape />
    </div>
  );
}