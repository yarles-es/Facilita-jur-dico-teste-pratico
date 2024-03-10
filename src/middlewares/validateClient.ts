import { Request, Response, NextFunction } from 'express';
import { Service } from 'typedi';
import validateFieldSchema from '../utils/genericValidateSchemas';

@Service()
export class ValidateClient {
  validateCreate(req: Request, res: Response, next: NextFunction) {
    try {
      validateFieldSchema(req.body, 'name', 'string');
      validateFieldSchema(req.body, 'email', 'string');
      validateFieldSchema(req.body, 'phone', 'string');
      validateFieldSchema(req.body, 'coord_x', 'number');
      validateFieldSchema(req.body, 'coord_y', 'number');
      next();
    } catch (error) {
      next(error);
    }
  }
}
