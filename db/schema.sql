DROP DATABASE IF EXISTS plant_burgers_db;
CREATE database plant_burgers_db;

USE plant_burgers_db;

CREATE TABLE plant_burgers (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  plant_burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN
);
