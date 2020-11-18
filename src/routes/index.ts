import { Router } from 'express';
import appointmentsRouters from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouters);
routes.use('/users', usersRouter);

export default routes;
