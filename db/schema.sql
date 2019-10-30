DROP DATABASE IF EXISTS burger;

CREATE DATABASE burger;

USE burger;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burgerName varchar(255) NOT NULL,
  devoured BOOLEAN DEFAULT false NOT NULL,
  PRIMARY KEY (id)
);