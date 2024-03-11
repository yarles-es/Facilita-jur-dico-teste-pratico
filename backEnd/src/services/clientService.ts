import { Service } from 'typedi';
import { Client, ClientModel } from '../models/Client';
import { findTheShortestRoute } from '../utils/distanceCalculator';

@Service()
export class ClientService {
  constructor(private clientModel: ClientModel) {}

  async getAll(): Promise<Client[]> {
    return this.clientModel.getAll();
  }

  async create(client: Client): Promise<void> {
    const clientLower = client.name.toLowerCase();
    return this.clientModel.create({ ...client, name: clientLower });
  }

  async deliverCalculatedRoutes(): Promise<Client[]> {
    const clients = await this.clientModel.getAll();
    const route = findTheShortestRoute(clients);
    return route;
  }
}
