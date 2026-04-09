import { Router } from 'express';
import usersRoutes from '../modules/users/users.routes.js';

const router = Router();

// rotas base
router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// módulos
router.use('/users', usersRoutes);

export default router;