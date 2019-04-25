create table blogpost
(
  id integer IDENTITY(1,1) PRIMARY KEY,
  author varchar(255) not null,
  content varchar(MAX) not null,
  date_time varchar(MAX) not null,
  title varchar(255) not null,
);

create table comment
(
  id integer IDENTITY(1,1) PRIMARY KEY ,
  author varchar(255) not null,
  content varchar(255) not null,
  date varchar(255) not null,
  parentid integer not null,
);