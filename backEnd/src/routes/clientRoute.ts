import { Router } from 'express';
import Container from 'typedi';
import { ClientController } from '../controllers/clientController';
import { ValidateClient } from '../middlewares/validateClient';

const router = Router();

const clientController = Container.get(ClientController);
const validateClient = Container.get(ValidateClient);

router
  .get('/', (req, res, next) => clientController.getAll(req, res, next))
  .post(
    '/',
    (req, res, next) => validateClient.validateCreate(req, res, next),
    (req, res, next) => clientController.create(req, res, next),
  )
  .get('/deliver-calculated-routes', (req, res, next) =>
    clientController.deliverCalculatedRoutes(req, res, next),
  );

export default router;
