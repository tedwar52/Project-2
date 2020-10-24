DROP DATABASE IF EXISTS passportdb;

CREATE DATABASE passportdb;

USE passportdb;

CREATE TABLE authorized_users
(
        id INT NOT NULL
        AUTO_INCREMENT,
    user_id VARCHAR
        (100),
    password VARCHAR
        (100),
    PRIMARY KEY
        (id)
);

        CREATE TABLE scheduled_doctors
        (
                id INT NOT NULL
                AUTO_INCREMENT,
    first_name VARCHAR
                (100) NOT NULL,
    last_name VARCHAR
                (100) NOT NULL,
    datetime_req DATETIME,
    PRIMARY KEY
                (id)
);

                CREATE TABLE selected_doctors
                (
                        id INT NOT NULL
                        AUTO_INCREMENT,
    first_name VARCHAR
                        (100) NOT NULL,
    last_name VARCHAR
                        (100) NOT NULL,
    practice
                        (255) VARCHAR NOT NULL,
    specialties
                        (255) VARCHAR NOT NULL,
    insurance
                        (255) VARCHAR NOT NULL,
    PRIMARY KEY
                        (id)
);

                        SELECT *
                        FROM authorized_users;

                        SELECT *
                        FROM scheduled_doctors;

                        SELECT *
                        FROM selected_doctors;