-- Cria a tabela
CREATE TABLE clientes (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  coordenada_x DECIMAL(10,2) NOT NULL,
  coordenada_y DECIMAL(10,2) NOT NULL
);
