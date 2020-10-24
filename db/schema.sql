DROP DATABASE IF EXISTS passportdb;
CREATE DATABASE passportdb;
USE passportdb;
CREATE TABLE authorized_users (
    id INT NOT NULL AUTO_INCREMENT,
    user_id VARCHAR (100),
    password VARCHAR(100),
    PRIMARY KEY (id)
);