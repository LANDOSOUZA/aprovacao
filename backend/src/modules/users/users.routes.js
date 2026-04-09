import { Router } from 'express';
import { listUsers, createUser } from './users.controller.js';

const router = Router();

router.get('/', listUsers);
router.post('/', createUser);

export default router;
