create table livros (
     id int(11) not null auto_increment,
     titulo varchar(255) default null,
     descricao text,
     preco decimal(10,2) default null,
     primary key (id)
    );


insert into livros (titulo, descricao, preco) values('começando com javascript', 'livro introdutorio', 39.90);

insert into livros (titulo, descricao, preco) values('ruby on rails', 'livro introdutorio', 29.90);
insert into livros (titulo, descricao, preco) values('começando com nodejs', 'livro vançado', 59.90);