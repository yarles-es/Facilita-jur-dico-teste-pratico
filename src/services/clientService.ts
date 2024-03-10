import { Service } from 'typedi';
import { Client, ClientModel } from '../models/Client';

@Service()
export class ClientService {
  constructor(private clientModel: ClientModel) {}

  async getAll(): Promise<Client[]> {
    return this.clientModel.getAll();
  }

  async create(client: Client): Promise<void> {
    return this.clientModel.create(client);
  }
}
