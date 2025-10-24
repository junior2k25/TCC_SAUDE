import { useState } from "react";
import api from "../../api";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import "./consulta.scss";

export default function ListaConsultas() {
  const [consultas, setConsultas] = useState([]);

  async function carregarConsultas() {
    try {
      const resp = await api.get("/consultas");
      setConsultas(resp.data);
    } catch (err) {
      alert("Erro ao carregar consultas: " + err.message);
    }
  }

  return (
    <div className="pagina-consultas">
      <Cabecalho />

      <div className="area-principal">
        <img src='/medico-consulta.webp' alt="Médico" className="imagem-medico" />

        <div className="card-consulta">
          <h2>Consultas do Cliente</h2>
          <p>
            Aqui estão todas as suas consultas marcadas, <br />
            por meio da nossa empresa.
          </p>

          <div className="formulario-consulta">
            <input type="text" placeholder="Motivo da consulta" />
            <div className="linha">
              <input type="text" placeholder="Especialidade" />
              <input type="text" placeholder="Médico" />
            </div>
            <div className="linha">
              <input type="date" />
              <input type="time" />
            </div>
            <input type="text" placeholder="Hospital da consulta" />
          </div>

          <button onClick={carregarConsultas} className="botao-verificar">
            Verificar
          </button>
        </div>
      </div>

      {consultas.length > 0 && (
        <div className="tabela-consultas">
          <h3>Consultas Marcadas</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Motivo</th>
                <th>Especialidade</th>
                <th>Médico</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Hospital</th>
              </tr>
            </thead>
            <tbody>
              {consultas.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.motivo}</td>
                  <td>{item.especialidade}</td>
                  <td>{item.medico}</td>
                  <td>{item.data}</td>
                  <td>{item.hora}</td>
                  <td>{item.hospital}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
