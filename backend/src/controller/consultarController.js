import * as db from '../repository/consultarRepo.js';
import { Router } from "express";

const endpoints = Router();

endpoints.post('/consultar', async (req, resp) => {
    try {
        let idConsulta = req.body;
        let id = await db.consultarRepo(idConsulta);

        resp.send({ novoId: id });
    }
    catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});




export default endpoints;


