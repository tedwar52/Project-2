USE passportdb;

INSERT INTO Users
  (firstName, lastName, phone, email, password, createdAt, updatedAt)
VALUES
  ("Stephen", "Strange", "212-517-3380", "DStrange@gmail.com", "password", now(), now()),
  ("Lorem", "Ipsum", "212-328-1534", "LIpsum@gmail.com", "abc1234", now(), now());


INSERT INTO Doctors
  (firstName, lastName, email, orgName, telephone, addressOne, addressTwo, description, createdAt, updatedAt)
VALUES
  ("Edward", "Steel", "esteel@gmail.com", "Steel Chiropractic Clinc P.A.", "704-563-5001", "1409 Pierson Drive", "", "Chiropractor Sports Physician", now(), now()),
  ("Matthew", "Hargreaves", "mhargreaves@gmail.com", "Carolina's Spine and Sports Treatment Center, PLLC", "617-699-8541", "100 North Tryon Street", "", "Chiropractor Sports Physician", now(), now()),
  ("Arnie", "Wynn", "awynn@gmail.com", "", "704-299-1700", "1128 Kurt Court", "", "Chiropractor Sports Physician", now(), now()),
  ("Jeffrey", "Atlas", "jAtlas@gmail.com", "", "910-742-9243", "3205 Randall Parkway", "Suite 105", "Psychologist Clinical", now(), now()),
  ("Edward", "Hughes", "eHuges@gmail.com", "", "704-879-9273", "1307 Union Road", "Suite 105", "Psychologist Clinical", now(), now());


  