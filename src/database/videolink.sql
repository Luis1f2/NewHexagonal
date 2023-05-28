CREATE DATABASE viodeolinK;
use  viodeolink;


CREATE TABLE Usuario(
id_usuario INT(20) NOT NULL AUTO_INCREMENT,
nombre VARCHAR(20) DEFAULT NULL,
apellido VARCHAR(20) DEFAULT NULL,
correo VARCHAR(20) DEFAULT NULL,
contraseña VARCHAR(20) default NULL,

PRIMARY KEY(id_usuario)
);  
CREATE TABLE Video(
id_video INT(20) NOT NULL AUTO_INCREMENT,
nombre VARCHAR(20) DEFAULT NULL,
descriccion VARCHAR(20) DEFAULT NULL,
clasificacion VARCHAR(20) DEFAULT NULL,

PRIMARY KEY(id_video)

);

INSERT INTO Usuario VALUES(1,"Luis","Flores","luis@gmail.com","ositomimoso");
INSERT INTO Usuario VALUES(2,"Fernando","Duran","fernando@gmail.com","fernando1");




