
-- database is named fs-react-shopping
-- Don't forget to add your create table SQL 
CREATE TABLE list (
    "id" SERIAL PRIMARY KEY,
    "item" VARCHAR(80) NOT NULL,
    "quantity" DECIMAL (10, 2) NOT NULL, 
    "unit" VARCHAR(20) NOT NULL,
    "purchased" BOOLEAN DEFAULT FALSE
);


INSERT INTO list ("item", "quantity", "unit", "purchased")
VALUES ('cheese sticks', 1, 'pack', false), 
    ('goat cheese', 3, 'packs', false), 
    ('sourdough bread', 1.5, 'loaf', false),
    ('cheez its', 2, 'boxes', false),
    ('taco blend cheese', 1, 'bags', false);
-- It is also helpful to include some test data