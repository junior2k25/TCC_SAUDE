import Cabecalho from "../../components/cabecalho/cabecalho";
import Rodape from "../../components/rodape/rodape";
import "./blog.scss";

export default function Blogs() {
  return (
    <>
      <Cabecalho />
      <div className="blog-container">
        <main className="blog-container">
          <section className="intro">
            <h2>Nosso Blog</h2>
            <p>
              Confira nossas dicas de bem-estar, alimentação e qualidade de
              vida!
            </p>
          </section>

          <section className="post destaque azul">
            <img
              src="https://images.unsplash.com/photo-1502741338009-cac2772e18bc"
              alt="Comida saudável"
            />
            <div className="post-content">
              <h3>Alimentação Saudável</h3>
              <p>
                Descubra como uma boa alimentação pode transformar sua saúde e
                sua disposição no dia a dia.
              </p>
              <a href="#" className="btn">
                Ler mais
              </a>
            </div>
          </section>

          <section className="post amarelo">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
              alt="Refeição colorida"
            />
            <div className="post-content">
              <h3>Receitas Leves e Nutritivas</h3>
              <p>
                Aprenda receitas simples e saudáveis para manter uma alimentação
                equilibrada e saborosa.
              </p>
              <a href="#" className="btn">
                Ler mais
              </a>
            </div>
          </section>

          <section className="post vermelho">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1"
              alt="Mulher fazendo exercício"
            />
            <div className="post-content">
              <h3>Exercícios Físicos</h3>
              <p>
                Saiba como manter seu corpo ativo e melhorar sua saúde física e
                mental com atividades simples.
              </p>
              <a href="#" className="btn">
                Ler mais
              </a>
            </div>
          </section>

          <section className="post amarelo">
            <img
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a"
              alt="Pessoa correndo"
            />
            <div className="post-content">
              <h3>Importância da Rotina</h3>
              <p>
                Descubra o impacto positivo que uma rotina equilibrada pode ter
                na sua qualidade de vida.
              </p>
              <a href="#" className="btn">
                Ler mais
              </a>
            </div>
          </section>

          <section className="post azul">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4"
              alt="Relaxamento e meditação"
            />
            <div className="post-content">
              <h3>Saúde Mental</h3>
              <p>
                Cuidar da mente é essencial. Veja como pequenas atitudes podem
                ajudar a manter o equilíbrio emocional.
              </p>
              <a href="#" className="btn">
                Ler mais
              </a>
            </div>
          </section>

          <section className="post cinza">
            <img
              src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528"
              alt="Dormir bem"
            />
            <div className="post-content">
              <h3>O Poder do Sono</h3>
              <p>
                Entenda por que dormir bem é fundamental para o corpo e a mente,
                e veja dicas para melhorar o descanso.
              </p>
              <a href="#" className="btn">
                Ler mais
              </a>
            </div>
          </section>
        </main>

        <Rodape />
      </div>
    </>
  );
}
