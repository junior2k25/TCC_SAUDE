import * as db from '../repository/consultarRepo.js';
import { Router } from "express";

const endpoints = Router();

endpoints.post('/inserir', async (req, resp) => {
    try {
        let idConsulta = req.body;
        let id = await db.inserirConsulta(idConsulta);

        resp.send({ novoId: id });
    }
    catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

endpoints.get('/agenda', async (req, resp) =>{
     let info = await db.listarConsultas(info)
     resp.send(info)
})




export default endpoints;


