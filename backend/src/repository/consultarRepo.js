import con from '../repository/conection.js';

export async function consultarRepo(idConsulta) {
    const comando =`
    insert into tb_agenda (motivo, especialidade, nm_medico, data_consulta, hora)
    values (?, ?, ?, ?, ?)
    `;

    let resposta = await con.query(comando, [idConsulta.motivo, idConsulta.especialidade, idConsulta.nm_medico, idConsulta.data_consulta, idConsulta.hora]);
    let info = resposta[0];

    return info.insertId;
}

export async function listarConsultas() {
    const comando = `select id_consulta, motivo, especialidade, nm_medico, data_consulta, hora
    from tb_consulta
    where id_consulta = ?
    `
}



