CREATE TABLE users (
    Id SERIAL PRIMARY KEY,
    Email VARCHAR(255) UNIQUE,
    Password VARCHAR(255),
    Firstname VARCHAR(255),
    Lastname VARCHAR(255)
);

INSERT INTO users (Email, Password, Firstname, Lastname)
VALUES
  ('john@example.com', 'password123', 'John', 'Doe'),
  ('jane@example.com', 'secure456', 'Jane', 'Smith'),
  ('alex@example.com', 'secret789', 'Alex', 'Johnson');

CREATE TABLE dispCard (
    Id SERIAL PRIMARY KEY,
    Firstname VARCHAR(255),
    Profession VARCHAR(255),
    Contact VARCHAR(255),
    Email VARCHAR(255),
    _State VARCHAR(255),
    FOREIGN KEY (Email) REFERENCES users(Email)
);

INSERT INTO dispCard (Firstname, Profession, Contact, Email, _State)
VALUES
  ('John', 'Yoga Instructor', '123-456-7890', 'john@example.com', 'California'),
  ('Jane', 'Fitness Trainer', '987-654-3210', 'jane@example.com', 'New York'),
  ('Alex', 'Personal Trainer', '555-123-4567', 'alex@example.com', 'Texas'),
  ('Sarah', 'Pilates Instructor', '111-222-3333', 'jane@example.com', 'California'),
  ('Michael', 'CrossFit Coach', '444-555-6666', 'john@example.com', 'Texas');

