import con from '../repository/conection.js';

// Inserir consulta
export async function inserirConsulta(consulta) {
    const comando = `
        INSERT INTO tb_agenda (motivo, especialidade, nm_medico, data_consulta, hora, hospital) 
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

// 🔹 Novo método GET — listar consultas
export async function listarConsultas() {
    const comando = `
        SELECT 
            id_consulta AS id,
            motivo,
            especialidade,
            nm_medico AS medico,
            data_consulta AS data,
            hora,
            hospital
        FROM tb_agenda
        ORDER BY id_consulta DESC
    `;

    const [linhas] = await con.query(comando);
    return linhas;
}
