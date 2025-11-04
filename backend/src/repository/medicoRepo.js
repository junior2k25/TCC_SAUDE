import con from "../repository/conection.js";

export async function listarMedicosPorHospital(idHospital) {
  const comando = `
    SELECT id_medico, nome, especialidade
    FROM tb_medico
    WHERE id_hospital = ?
  `;

  const [linhas] = await con.query(comando, [idHospital]);
  return linhas;
}
