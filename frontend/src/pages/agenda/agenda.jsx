import React from "react";
import "./Agenda.scss";
import { useState } from "react";
import api from "../../api";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Rodape from "../../components/rodape/rodape";

export default function Agenda() {
  const [motivo, setMotivo] = useState('')
  const [especialidade, setEspecialidade] = useState('')
  const [medico, setMedico] = useState('')
  const [data, setData] = useState('')
  const [hora, setHora] = useState('')
  const [hospital, setHospital] = useState('')

  async function agendarConsulta(e) {
  e.preventDefault();

  try {
    const id_usuario = localStorage.getItem("ID_USUARIO"); // 🔹 pega o id salvo
    const body = { motivo, especialidade, medico, data, hora, hospital, id_usuario };

    await api.post('/inserir', body);

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
                    <option value="Dr. Sergio Ramalho Junior">Dr. Sergio Ramalho Junior</option>
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
                  <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />


                </div>
              </div>


              <label htmlFor="Hospital">Selecione o Hospital</label>
              <select type="text" id="Hospital" required value={hospital} onChange={(e) => setHospital(e.target.value)} >
                <option value="Hospital São Paulo">Hospital São Paulo</option>
                <option value="Hospital Geral Grajaú">Hospital Geral Grajaú</option>
                <option value="Hospital Municipal Integrado Santo Amaro">Hospital Municipal Integrado Santo Amaro</option>

              </select>


              <button type="button" onClick={agendarConsulta}>Agendar Consulta</button>
            </form>
          </div>
        </div>
      </section>

      < Rodape />
    </>
  );
}
