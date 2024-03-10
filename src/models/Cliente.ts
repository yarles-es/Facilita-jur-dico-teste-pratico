import pool from '../db/connection';
import { Service } from 'typedi';

export interface Cliente {
  id?: number;
  nome: string;
  email: string;
  telefone: string;
  coordenada_x: number;
  coordenada_y: number;
}

@Service()
export class ClienteModel {
  async getAll(): Promise<Cliente[]> {
    const res = await pool.query('SELECT * FROM clientes');
    return res.rows;
  }

  async create(cliente: Cliente): Promise<void> {
    const { nome, email, telefone, coordenada_x, coordenada_y } = cliente;
    await pool.query(
      'INSERT INTO clientes (nome, email, telefone, coordenada_x, coordenada_y) VALUES ($1, $2, $3, $4, $5)',
      [nome, email, telefone, coordenada_x, coordenada_y],
    );
  }
}
