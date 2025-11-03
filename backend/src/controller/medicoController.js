    import { Router } from "express";
    import { listarMedicosPorHospital } from "../repository/medicoRepo.js";

    const endpoints = Router();

    endpoints.get('/medicos/:idHospital', async (req, resp) => {
        try {
            const id = req.params.idHospital;
            const r = await listarMedicosPorHospital(id);
            resp.send(r);
        } catch (err) {
            resp.status(400).send({ erro: err.message });
        }
    });

    export default endpoints;