INSERT INTO User
  (firstName, lastName, phone, email, user_id, password)
VALUES
  ("Stephen", "Strange", "212-517-3380", "DStrange@gmail.com", "dr_strange", "password"),
  ("Lorem", "Ipsum", "212-328-1534", "LIpsum@gmail.com", "lorem_ipsum", "abc1234");


INSERT INTO Doctor
  (firstName, lastName, email, orgName, telephone, addressOne, addressTwo, description)
VALUES
  ("Edward", "Steel", "esteel@gmail.com", "STEEL CHIROPRACTIC CLINIC P.A.", "704-563-5001", "1409 PIERSON DR", "", "Chiropractor Sports Physician"),
  ("Matthew", "Hargreaves", "mhargreaves@gmail.com", "CAROLINA'S SPINE AND SPORTS TREATMENT CENTER, PLLC", "617-699-8541", "100 N TRYON ST", "", "Chiropractor Sports Physicia"),
  ("Arnie", "Wynn", "awynn@gmail.com", "", "704-299-1700", "1128 KURT CT", "", "Chiropractor Sports Physician"),
  ("Jeffrey", "Atlas", "jAtlas@gmail.com", "", "910-742-9243", "3205 RANDALL PKWY", "SUITE 105", "Psychologist Clinical"),
  ("Edward", "Hughes", "eHuges@gmail.com", "", "704-879-9273", "1307 UNION RD", "SUITE 105", "Psychologist Clinical" );

INSERT INTO Schedule
  (firstName, lastName, email, datetime)
VALUES
  ("Edward", "Steel", "esteel@gmail.com", "November 6, 2020"),
  ("Matthew", "Hargreaves", "mhargreaves@gmail.com", "November 7, 2020"),
  ("Arnie", "Wynn", "awynn@gmail.com", "November 8, 2020");

  