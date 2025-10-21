import con from "./conection.js";
import crypto from "crypto-js";

export async function cadastrarUsuario(pessoa) {
    const comando = `
        insert into usuario (email, cpf, senha) 
					        values (?, ?, ?)
    `;

    let hash = crypto.SHA256(pessoa.senha).toString();
    
    let resposta = await con.query(comando, [pessoa.usuario, hash])
    let info = resposta[0];
    
    return info.insertId;
}

export async function validarUsuario(pessoa) {
    const comando = `
        select 
            id,
            usuario
        from tb_usuario 
        where 
            
            cpf = ?
            and senha = ?
    `;
    
    let hash = crypto.SHA256(pessoa.senha).toString();

    let registros = await con.query(comando, [pessoa.usuario, hash])
    return registros[0][0];
}