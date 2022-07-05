USE processoSeletivo2RP;

INSERT INTO tipoUsuario(tipoUsuario)
VALUES('geral'),('admin'),('root')

INSERT INTO [status]([status])
VALUES('inativo'),('ativo')

INSERT INTO usuario(idTipoUsuario,idStatus,nome,email,senha)
VALUES(3,2,'Pedro Felipe Barros da Silva', 'teste@teste.com', '12345678')