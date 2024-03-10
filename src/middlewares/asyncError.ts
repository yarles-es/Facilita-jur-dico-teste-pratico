import { Response, Request, NextFunction } from 'express';
import { Service } from 'typedi';

@Service()
export class AsyncError {
  public errorHandling(error: any, _req: Request, res: Response, _next: NextFunction) {
    console.log(error);
    // Se o erro for uma instância de customError, use o statusCode e a mensagem definida
    const statusCode = error.customError ? error.statusCode : 500;
    const message = error.customError ? error.message : 'Internal Server Error';

    return res.status(statusCode).json({ error: message });
  }
}

export class AppError extends Error {
  public statusCode: number;
  public isOperational: boolean;
  public customError: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    this.customError = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}

export class BadRequestError extends AppError {
  constructor(message = 'Invalid request') {
    super(message, 400);
  }
}

export class InternalServerError extends AppError {
  constructor(message = 'Internal Server Error') {
    super(message, 500);
  }
}
