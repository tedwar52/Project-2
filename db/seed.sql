
INSERT INTO passportdb
  (authorized_users)
VALUES
  ("dr_strange", "password"),
  

INSERT INTO role
  (titleid, title, salary, department_id)
VALUES
  (1, "sales lead", 100, 1),
  (2, "salesperson", 80, 1),
  (3, "lead engineer", 100, 2),
  (4, "software engineer", 90, 2),
  (5, "accountant", 70, 3),
  (6, "legal team lead", 110, 4),
  (7, "lawyer", 100, 4);

INSERT INTO employee
  (first_name, last_name, titleid, manager_id)
VALUES
  ("Lorem", "Ipsum", 1, NULL),
  ("Dolor", "Amet", 3, NULL),
  ("Consectetur", "Sed", 6, NULL),
  ("Eiusmod", "Tempor", 5, NULL),
  ("Incididunt", "Labore", 2, 1),
  ("Finibus", "Bonorum", 4, 3),
  ("Malorum", "Voluptatem", 7, 6);
