import { pool } from '../db/connection';
import { Service } from 'typedi';

export interface Client {
  id?: number;
  name: string;
  email: string;
  phone: string;
  coord_x: number;
  coord_y: number;
}

@Service()
export class ClientModel {
  async getAll(): Promise<Client[]> {
    const res = await pool.query('SELECT * FROM clients');
    return res.rows;
  }

  async create(client: Client): Promise<void> {
    const { name, email, phone, coord_x, coord_y } = client;
    await pool.query(
      'INSERT INTO clients (name, email, phone, coord_x, coord_y) VALUES ($1, $2, $3, $4, $5)',
      [name, email, phone, coord_x, coord_y],
    );
  }

  async findName(name: string): Promise<Client[]> {
    const res = await pool.query('SELECT * FROM clients WHERE name = $1', [name]);
    return res.rows;
  }
}
