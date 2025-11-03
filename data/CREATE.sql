
drop database tcc;
    
CREATE DATABASE tcc;

USE tcc;


CREATE TABLE tb_usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(200),
    cpf VARCHAR(200),
    senha VARCHAR(200)
);


CREATE TABLE tb_hospital (
    id_hospital INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200)
);


CREATE TABLE tb_medico (
    id_medico INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200),
    especialidade VARCHAR(200),
    id_hospital INT,
    FOREIGN KEY (id_hospital) REFERENCES tb_hospital(id_hospital)
);


CREATE TABLE tb_agenda (
    id_consulta INT PRIMARY KEY AUTO_INCREMENT,
    motivo VARCHAR(200),
    especialidade VARCHAR(200),
    id_medico INT,
    id_hospital INT,
    data_consulta VARCHAR(200),
    hora VARCHAR(200),
    FOREIGN KEY (id_medico) REFERENCES tb_medico(id_medico),
    FOREIGN KEY (id_hospital) REFERENCES tb_hospital(id_hospital)
);


INSERT INTO tb_hospital (nome) VALUES
('Hospital São Paulo'),
('Hospital Geral Grajaú'),
('Hospital Municipal Integrado Santo Amaro');


INSERT INTO tb_medico (nome, especialidade, id_hospital) VALUES
('Dr. João Silva', 'Clínico Geral', 1),
('Dra. Marina Costa', 'Pediatria', 1),
('Dr. Carlos Nunes', 'Cardiologia', 1),
('Dra. Helena Souza', 'Dermatologia', 1),
('Dr. Felipe Ramos', 'Ortopedia', 1),
('Dra. Ana Beatriz', 'Ginecologia', 1),
('Dr. Pedro Lima', 'Neurologia', 1),
('Dra. Camila Torres', 'Endocrinologia', 1),
('Dr. André Moura', 'Oftalmologia', 1),
('Dra. Luiza Farias', 'Psiquiatria', 1);


INSERT INTO tb_medico (nome, especialidade, id_hospital) VALUES
('Dr. Marcelo Alves', 'Clínico Geral', 2),
('Dra. Roberta Dias', 'Cardiologia', 2),
('Dr. Tiago Barbosa', 'Ortopedia', 2),
('Dra. Fernanda Reis', 'Pediatria', 2),
('Dr. Eduardo Pires', 'Dermatologia', 2);


INSERT INTO tb_medico (nome, especialidade, id_hospital) VALUES
('Dr. Gustavo Lima', 'Clínico Geral', 3),
('Dra. Patrícia Gomes', 'Cardiologia', 3),
('Dr. Rafael Almeida', 'Neurologia', 3),
('Dra. Isabela Nogueira', 'Ginecologia', 3),
('Dr. Bruno Castro', 'Pediatria', 3),
('Dra. Juliana Rocha', 'Dermatologia', 3),
('Dr. Henrique Tavares', 'Ortopedia', 3);