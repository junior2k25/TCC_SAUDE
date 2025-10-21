import React from "react";
import "./Agenda.scss";
import Cabecalho from "../../components/cabecalho/Cabecalho";

export default function Agenda() {
  return (
    <>
      <Cabecalho />

      <section className="agenda-section">
        <div className="agenda-container">
          <div className="agenda-imagem">
            <img src="/medica3.png" alt="Médica" />
          </div>

          <div className="agenda-formulario">
            <h2>Agende sua consulta</h2>
            <p>
              Preencha os campos abaixo para escolher sua especialidade e confirmar sua consulta com segurança.
            </p>

            <form>
              <label htmlFor="motivo">Informe o motivo da consulta</label>
              <input type="text" id="motivo" placeholder=" " />

              <div className="form-dupla">
                <div>
                  <label htmlFor="especialidade">Especialidade</label>
                  <select id="especialidade">
                    <option>Clínico geral</option>
                    <option>Cardiologia</option>
                    <option>Pediatria</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="medico">Selecione o médico</label>
                  <select id="medico">
                    <option>Dr. João Silva</option>
                    <option>Dra. Maria Lima</option>
                  </select>
                </div>
              </div>

              <div className="form-dupla">
                <div>
                  <label htmlFor="data">Data da consulta</label>
                  <input type="date" id="data" />
                </div>

                <div>
                  <label htmlFor="hora">Horário disponível</label>
                  <select id="hora">
                    <option>9:00</option>
                    <option>10:00</option>
                    <option>11:00</option>
                  </select>
                </div>
              </div>

              <button type="button">Agendar Consulta</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
