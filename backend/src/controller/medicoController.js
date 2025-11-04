import { Router } from "express";
import { listarMedicosPorHospital } from "../repository/medicoRepo.js";

const endpoints = Router();

endpoints.get('/medicos/:idHospital', async (req, resp) => {
  try {
    const id = req.params.idHospital;
    console.log("➡️ ID recebido:", id);

    const r = await listarMedicosPorHospital(id);
    console.log("👨‍⚕️ Médicos retornados:", r);

    resp.send(r);
  } catch (err) {
    console.error("❌ Erro no GET /medicos/:idHospital:", err);
    resp.status(400).send({ erro: err.message });
  }
});

export default endpoints;
