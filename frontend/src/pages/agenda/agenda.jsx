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


      <div className="cima">
        <h1>Hospitais para a sua consulta</h1>

        <section className="endereco">
          <div className="logo">
            <img src="/hospitalsp.webp" height="100px" className="logo" alt="Hospital São Paulo" />
          </div>

          <div className="escrita">
            <h2>Hospital São Paulo</h2>
            <p>
              Somos um hospital universitário vinculado à Universidade <br />
              Federal de São Paulo (Unifesp), reconhecido como um dos <br />
              maiores e mais importantes centros de saúde do Brasil. <br />
              Nos destacamos pela excelência no atendimento médico- <br />
              hospitalar, formação de profissionais de saúde e pesquisa <br />
              científica.
            </p>
          </div>
        </section>
        <div className="localizacao">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3656.1771466440177!2d-46.644496!3d-23.597979!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a264d6b6611%3A0xae18ff6a2797997b!2sHospital%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1761910115654!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa Hospital São Paulo"
          ></iframe>

          <div className="hospital">
            <p>
              <strong>Funcionamento:</strong><br />
              Unidade de pronto-atendimento e urgência 24 horas.
            </p>

            <p>
              <strong>Visitação:</strong><br />
              Enfermarias: diariamente das 14h às 20h; UTI adulto: das 11h às 12h e das 17h às 18h.
            </p>

            <p>
              <strong>Endereço:</strong><br />
              Rua Napoleão de Barros, 715 – Vila Clementino, São Paulo – SP, CEP 04024-002.
            </p>
          </div>

        </div>
      </div>




      <section className="endereco">
        <div className="logo">
          <img src="/hospitalgj.webp" height="100px" className="logo" alt="Hospital São Paulo" />
        </div>

        <div className="escrita">
          <h2>Hospital Geral Grajaú</h2>
          <p>
            Somos um hospital público estadual localizado na Zona Sul da <br />  cidade de São Paulo, com papel estratégico no atendimento  <br /> médico-hospitalar, formação de profissionais de saúde e <br /> pesquisa, voltado para servir uma região de grande <br /> vulnerabilidade social.
          </p>
        </div>
      </section>



      <div className="localizacao">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.513029803329!2d-46.69347592541518!3d-23.729078067773838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4f0d5edbca33%3A0xc8945dfa5cc8006b!2sHospital%20Geral%20de%20Graja%C3%BA!5e0!3m2!1spt-BR!2sbr!4v1761919581414!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
          title="Mapa Hospital Geral de Grajaú"
        ></iframe>

        <div className="hospital">
          <p>
            <strong>Funcionamento:</strong><br />
            Unidade de pronto-atendimento e urgência 24 horas.
          </p>

          <p>
            <strong>Visitação:</strong><br />
            Enfermarias: diariamente das 14h às 20h; <br /> UTI adulto: das 11h às 12h e das 17h às 18h.
          </p>

          <p>
            <strong>Endereço:</strong><br />
            Avenida Belmira Marin, 301 – Grajaú, São Paulo – SP, <br /> CEP 04846-000.
          </p>
        </div>

      </div>

      <section className="endereco">
        <div className="logo">
          <img src="/hospitalgj.webp" height="100px" className="logo" alt="Hospital São Paulo" />
        </div>

        <div className="escrita">
          <h2>Hospital Municipal Integrado Santo Amaro</h2>
          <p>
            O Hospital de Santo Amaro é um hospital público estadual localizado na Zona Sul de <br /> São Paulo, referência no atendimento à população em situação de vulnerabilidade social. <br /> Atua com foco em assistência médica de qualidade, ensino e pesquisa, contribuindo <br /> para a formação de profissionais de saúde e para o fortalecimento da rede pública. <br />  Oferece serviços de urgência e emergência, clínica médica e cirúrgica, pediatria, ginecologia br e obstetrícia, além de atendimento humanizado e integrado à rede do SUS.
          </p>
        </div>
        </section>
      
      

<div className="localizacao">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.7339968235956!2d-46.70685842541831!3d-23.64969546484197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce51a307b6afdb%3A0x17a85431c97f322d!2sHospital%20Municipal%20Integrado%20de%20Santo%20Amaro!5e0!3m2!1spt-BR!2sbr!4v1762172761172!5m2!1spt-BR!2sbr"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        allowfullscreen
        title="Mapa Hospital Municipal Integrado de Santo Amaro"
      ></iframe>

      <div className="hospital">
        <p>
          <strong>Funcionamento:</strong><br />
          Unidade de pronto-atendimento e urgência 24 horas.
        </p>

        <p>
          <strong>Visitação:</strong><br />
          Enfermarias: diariamente das 14h às 20h; <br /> UTI adulto: das 11h às 12h e das 17h às 18h.
        </p>
  
        <p> 
          <strong>Endereço:</strong><br />
    Av.Adolfooooo Pinheiro, 339 – Alto da Boa Vista <br />  São Paulo – SP, CEP 04735-000
        </p>
      </div >
           
    </div >



    < Rodape />
    </>
  );
}