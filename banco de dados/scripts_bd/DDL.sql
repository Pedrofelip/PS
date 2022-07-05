CREATE DATABASE processoSeletivo2RP

USE processoSeletivo2RP;

CREATE TABLE tipoUsuario(
idTipoUsuario int primary key identity,
tipoUsuario varchar(20)
);

GO

CREATE TABLE [status](
idStatus int primary key identity,
[status] varchar(20)
)

GO

CREATE TABLE usuario(
idUsuario int primary key identity,
idTipoUsuario int foreign key references tipoUsuario(idTipoUsuario),
idStatus int foreign key references [status](idStatus),
nome varchar(150),
email varchar(150),
senha varchar(150)
)
