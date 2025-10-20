import './main.scss'

export default function main() {
  return (
    <section className="consulta">
      <div className="logo">
        <img src="/medica2.png" alt="Médica" className="hero-img" />
      </div>

      <div className="agenda">
        <h1>
          AGENDE SUA <br /> CONSULTA
        </h1>
        <p>
          Profissionais qualificados prontos para cuidar da sua saúde, oferecendo
          atenção humanizada, experiência comprovada e acompanhamento
          personalizado.
        </p>
        <button className="btn-agendar">AGENDE AQUI</button>
      </div>
    </section>
  );
}
