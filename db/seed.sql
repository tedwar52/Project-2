USE passportdb;

INSERT INTO Users
  (firstName, lastName, phone, email, password, createdAt, updatedAt)
VALUES
  ("Stephen", "Strange", "212-517-3380", "DStrange@gmail.com", "password", now(), now()),
  ("Lorem", "Ipsum", "212-328-1534", "LIpsum@gmail.com", "abc1234", now(), now());


INSERT INTO Doctors
  (firstName, lastName, email, orgName, telephone, addressOne, addressTwo, description, createdAt, updatedAt)
VALUES
  ("Edward", "Steel", "esteel@gmail.com", "STEEL CHIROPRACTIC CLINIC P.A.", "704-563-5001", "1409 PIERSON DR", "", "Chiropractor Sports Physician", now(), now()),
  ("Matthew", "Hargreaves", "mhargreaves@gmail.com", "CAROLINA'S SPINE AND SPORTS TREATMENT CENTER, PLLC", "617-699-8541", "100 N TRYON ST", "", "Chiropractor Sports Physicia", now(), now()),
  ("Arnie", "Wynn", "awynn@gmail.com", "", "704-299-1700", "1128 KURT CT", "", "Chiropractor Sports Physician", now(), now()),
  ("Jeffrey", "Atlas", "jAtlas@gmail.com", "", "910-742-9243", "3205 RANDALL PKWY", "SUITE 105", "Psychologist Clinical", now(), now()),
  ("Edward", "Hughes", "eHuges@gmail.com", "", "704-879-9273", "1307 UNION RD", "SUITE 105", "Psychologist Clinical", now(), now());

INSERT INTO Schedules
  (firstName, lastName, email, datetime, createdAt, updatedAt)
VALUES
  ("Edward", "Steel", "esteel@gmail.com", "November 6, 2020", now(), now()),
  ("Matthew", "Hargreaves", "mhargreaves@gmail.com", "November 7, 2020", now(), now()),
  ("Arnie", "Wynn", "awynn@gmail.com", "November 8, 2020", now(), now());

  