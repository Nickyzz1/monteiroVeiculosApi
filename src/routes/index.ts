import { Router } from 'express';
import { CreateUser, GetUser, RemoveUser } from '../controllers/userController';

const router = Router();

router.post('/api/v1/user', CreateUser);
router.get('/api/v1/user', GetUser)
router.delete('/api/v1/user/:id', RemoveUser)
export default router;
