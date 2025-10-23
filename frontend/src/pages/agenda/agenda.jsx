import React from "react";
import "./Agenda.scss";
import { useState } from "react";
import api from "../../api";
import Cabecalho from "../../components/cabecalho/Cabecalho";

export default function Agenda() {
    const[motivo, setMotivo] = useState('')
    const[especialidade, setEspecialidade] = useState('')
    const[medico, setMedico] = useState('')
    const[data, setData] = useState('')
    const[hora, setHora] = useState('')

    async function agendarConsulta(e) {
        e.preventDefault();

        try {
            const body = { motivo, especialidade, medico, data, hora };
            await api.post('/consultar', body);

            alert("Consulta agendada com sucesso!");
        } catch (err) {
            alert("Erro ao agendar consulta: " + err.response?.data?.erro);
        }
    } 


   
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

            <form action="/Consultar">
              <label htmlFor="motivo">Informe o motivo da consulta</label>
              <input type="text" id="motivo" required value={motivo} onChange={(e) => setMotivo(e.target.value)} />

              <div className="form-dupla">
                <div>
                  <label htmlFor="especialidade">Especialidade</label>
                  <select id="especialidade" value={especialidade} onChange={(e) => setEspecialidade(e.target.value)}>
                    <option>Clínico geral</option>
                    <option>Cardiologia</option>
                    <option>Pediatria</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="medico">Selecione o médico</label>
                  <select id="medico" value={medico} onChange={(e) => setMedico(e.target.value)}>
                    <option value="Dr. João Silva">Dr. João Silva</option>
                    <option value="Dra. Maria Lima">Dra. Maria Lima</option>
                  </select>
                </div>
              </div>

              <div className="form-dupla">
                <div>
                  <label htmlFor="data">Data da consulta</label>
                  <input type="date" id="data" value={data} onChange={(e) => setData(e.target.value)} />
                </div>

                <div>
                  <label htmlFor="hora">Horário disponível</label>
                  <select id="hora" value={hora} onChange={(e) => setHora(e.target.value)}>
                    <option value="9:00">9:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                  </select>
                </div>
              </div>

              <button type="button" onClick={agendarConsulta}>Agendar Consulta</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
