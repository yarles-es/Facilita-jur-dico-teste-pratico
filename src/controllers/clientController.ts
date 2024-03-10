import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';
import { ClientService } from '../services/clientService';

@Service()
export class ClientController {
  constructor(private clientService: ClientService) {}

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const clients = await this.clientService.getAll();
      res.status(200).json(clients);
    } catch (error) {
      next(error);
    }
  }

  async create(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      await this.clientService.create(req.body);
      res.status(201).end();
    } catch (error) {
      next(error);
    }
  }
}
