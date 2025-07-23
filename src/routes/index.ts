import { Router } from 'express';
import { CreateUser, GetUser, RemoveUser } from '../controllers/userController';
import { Auth } from '../controllers/authControler';
import { createVehicle, getVehicles, RemoveVehicle, updateVehicle } from '../controllers/vehicleController';

const router = Router();

router.post('/api/v1/user', CreateUser);
router.get('/api/v1/user', GetUser)
router.delete('/api/v1/user/:id', RemoveUser)

router.post('/api/v1/auth', Auth)

router.post('/api/v1/vehicle', createVehicle)
router.get('/api/v1/vehicle', getVehicles)
router.delete('/api/v1/vehicle/:id', RemoveVehicle)
router.patch('/api/v1/vehicle/:id', updateVehicle)


export default router;
