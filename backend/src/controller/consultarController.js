import * as db from '../repository/consultarRepo.js';
import { Router } from "express";

const endpoints = Router();

endpoints.post('/inserir', async (req, resp) => {
    try {
        let idConsulta = req.body;
        let id = await db.inserirConsulta(idConsulta);
        resp.send({ novoId: id });
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoints.get('/consultas', async (req, resp) => {
  try {
    const idUsuario = req.query.idUsuario; 
    const consultas = await db.listarConsultasPorUsuario(idUsuario);
    resp.send(consultas);
  } catch (err) {
    resp.status(400).send({ erro: err.message });
  }
});


export default endpoints;
