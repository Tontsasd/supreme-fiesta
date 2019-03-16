create table blogpost
(
  id integer not null,
  author varchar(255) not null,
  content varchar(255) not null,
  date DATE not null,
  title varchar(255) not null,
  primary key(id)
);

create table tag
(
  id integer not null,
  tagname varchar(255) not null,
  primary key (id)
);

create table post_tags
(
  postid integer not null,
  tagid integer not null
);

create table comment
(
  id integer not null,
  author varchar(255) not null,
  content varchar(255) not null,
  date DATE not null,
  parentid integer not null,
  primary key (id)
);