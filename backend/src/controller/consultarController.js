import { inserirConsulta, listarConsultaPorId } from '../repository/consultarRepo.js';
import { Router } from "express";

const endpoints = Router();

endpoints.post('/consulta', async (req, resp) => {
    try {
        let consulta = req.body;
        let id = await inserirConsulta(consulta); //

        resp.send({ novoId: id });
    }
    catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoints.get('/consulta/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let resposta = await listarConsultaPorId(id);
        resp.send(resposta);
    }
    catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});


export default endpoints;