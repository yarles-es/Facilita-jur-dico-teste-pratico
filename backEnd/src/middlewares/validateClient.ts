import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';
import validateFieldSchema from '../utils/genericValidateSchemas';
import { ClientModel } from '../models/Client';
import { BadRequestError } from './asyncError';

@Service()
export class ValidateClient {
  constructor(private clientModel: ClientModel) {}
  async validateCreate(req: Request, res: Response, next: NextFunction) {
    try {
      validateFieldSchema(req.body, 'name', 'string');
      validateFieldSchema(req.body, 'email', 'string');
      validateFieldSchema(req.body, 'phone', 'string');
      validateFieldSchema(req.body, 'coord_x', 'number');
      validateFieldSchema(req.body, 'coord_y', 'number');
      await this.validateClientExists(req.body.name);
      next();
    } catch (error) {
      next(error);
    }
  }

  private async validateClientExists(name: string) {
    const client = await this.clientModel.findName(name);
    if (client && client.length > 0) {
      throw new BadRequestError('Cliente com esse nome já cadastrado');
    }
  }
}
