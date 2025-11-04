import { con } from "./connection.js";

export async function listarConsultas() {
    const comando = `
        SELECT 
            a.id_consulta,
            a.motivo,
            a.especialidade,
            m.nome AS nome_medico,
            h.nome AS nome_hospital,
            a.data_consulta,
            a.hora
        FROM tb_agenda a
        JOIN tb_medico m ON m.id_medico = a.id_medico
        JOIN tb_hospital h ON h.id_hospital = a.id_hospital;
    `;

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function listarConsultaPorId(id) {
    const comando = `
        SELECT 
            a.id_consulta,
            a.motivo,
            a.especialidade,
            m.nome AS nome_medico,
            h.nome AS nome_hospital,
            a.data_consulta,
            a.hora
        FROM tb_agenda a
        JOIN tb_medico m ON m.id_medico = a.id_medico
        JOIN tb_hospital h ON h.id_hospital = a.id_hospital
        WHERE a.id_consulta = ?;
    `;

    const [linhas] = await con.query(comando, [id]);
    return linhas[0];
}
