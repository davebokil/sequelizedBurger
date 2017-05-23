-- Create a database called `burgers_db`.

CREATE DATABASE burgers_db;
USE burgers_db;


-- * Create a `burgers` table with these fields:
--   * **id**: an auto incrementing int that serves as the primary key.
--   * **burger_name**: a string.
--   * **devoured**: a boolean.
--   * **date**: a TIMESTAMP.

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean not null default 0,
date TIMESTAMP,
PRIMARY KEY (id)
);

