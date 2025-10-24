create database tcc;

use tcc;

create table tb_usuario(
id_usuario int primary key auto_increment,
email varchar (200),
cpf varchar (200),
senha varchar (200)
);

create table tb_agenda(
id_consulta int primary key auto_increment,
motivo varchar (200),
especialidade varchar (200),
nm_medico varchar (200),
data_consulta varchar (200),
hora varchar (200),
hospital varchar (200)
);

