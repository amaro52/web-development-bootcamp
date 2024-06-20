CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);

INSERT INTO items (id, title) VALUES (1, 'Buy milk'), (2, 'Finish homework');

INSERT INTO items (title) VALUES ('Finish homework');

-- update a table --
UPDATE items SET title = $1 WHERE id == correct ID

-- delete a table --
DELETE FROM items WHERE condition