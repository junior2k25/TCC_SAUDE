import { Router } from "express";
import * as db from "../repository/consultarRepo.js";

const endpoints = Router();

endpoints.get('/consultas', async (req, resp) => {
    try {
        let registros = await db.listarConsultas();
        resp.send(registros);
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoints.get('/consulta/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let registro = await db.listarConsultaPorId(id);
        resp.send(registro);
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

export default endpoints;
