import con from '../repository/conection.js';

export async function inserirConsulta(consulta) {
    const comando = `
        INSERT INTO tb_agenda (motivo, especialidade, nm_medico, data_consulta  , hora , hospital) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;
    
    const [resultado] = await con.query(comando, [
        consulta.motivo,
        consulta.especialidade,
        consulta.medico,      
        consulta.data,
        consulta.hora,
        consulta.hospital
    ]);
    
    return resultado.insertId;
}

export async function listarConsultas() {
    const comando = `select id_consulta, motivo, especialidade, nm_medico, data_consulta, hora
    from tb_consulta
    where id_consulta = ?
    `
}

