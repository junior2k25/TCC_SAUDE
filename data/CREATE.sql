create database tcc;

use tcc;

create table tb_usuario(
id_usuario int primary key auto_increment,
email varchar (200),
cpf varchar (200),
senha varchar (200)
);