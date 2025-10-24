import Cabecalho from "../../components/cabecalho/Cabecalho";

export default function agenda() {
  return (
    <>
      <Cabecalho />

      <section className="consulta-section">
        <div className="consulta-container">
          <div className="consulta-img">
            <img src="/medico-consulta.webp" />
          </div>

          <div className="consulta-formulario">
            <h2>Consultas do cliente</h2>
            <p>
              Aqui estão todas as suas consultas marcadas,
              por meio da nossa empresa.
            </p>

            <form action="">
              <label htmlFor="motivo">Informe o motivo da consulta</label>
              <input type="text" id="motivo" />
                </form>
          </div>
      
      </div>


      </section >


    </>
  )

}