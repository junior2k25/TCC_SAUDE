import './rodape.scss';
import { Link } from 'react-router';

      export default function Rodape() {
        return (
          <footer>
            <div className="container-rodape">
              
              <div className="logtitulo">
                <img
                  src="/rodapelogo.png"
                  alt="Saúde com Você"
                  className="logo-rodape"
                />
                <h1 className="titulo-rodape">Saúde com Você</h1>
              </div>
      
              <div className="primeira-coluna">
                <h1 className="slogan">
                  Porque saúde agora <br /> é Saúde com Você
                </h1>
      
                <h2 className="redes-sociais">Siga nossas redes sociais:</h2>
      
                <div className="icones">
                  <img src="/instagram.png" alt="Instagram" />
                  <img src="/facebook.png" alt="Facebook" />
                  <img src="/linkedinn.png" alt="LinkedIn" />
                </div>
              </div>
      
              <div className="segunda-coluna">
                <div className="coluna">
                  <h1>Empresarial</h1>
                  <div className="links">
                    <Link to="*">Quem Somos</Link>
                    <Link to="*">Trabalhe Conosco</Link>
                    <Link to="*">Termos de uso</Link>
                    <Link to="*">Política de Privacidade</Link>
                  </div>
                </div>
      
                <div className="coluna">
                  <h1>Outros</h1>
                  <div className="links">
                    <Link to="*">Blog</Link>
                    <Link to="*">Hospitais Parceiros</Link>
                  </div>
                </div>
      
                <div className="coluna">
                  <h1>Atendimento</h1>
                  <div className="links">
                    <Link to="*">Portal de Atendimento</Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        );
      }
      