-- Cria a tabela
CREATE TABLE clients (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  coord_x DECIMAL(10,2) NOT NULL,
  coord_y DECIMAL(10,2) NOT NULL
);
