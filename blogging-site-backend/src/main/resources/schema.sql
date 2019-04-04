create table blogpost
(
  id integer IDENTITY(1,1) PRIMARY KEY,
  author varchar(255) not null,
  content varchar(255) not null,
  date DATE not null,
  title varchar(255) not null,
);

create table tag
(
  id integer IDENTITY(1,1) PRIMARY KEY ,
  tagname varchar(255) not null,
);

create table post_tags
(
  postid integer not null,
  tagid integer not null
);

create table comment
(
  id integer IDENTITY(1,1) PRIMARY KEY ,
  author varchar(255) not null,
  content varchar(255) not null,
  date DATE not null,
  parentid integer not null,
);

create table user
(
  id integer IDENTITY(1,1) PRIMARY KEY ,
  username varchar(255) not null,
  password varchar(255) not null,
);