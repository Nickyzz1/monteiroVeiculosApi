import { Router } from 'express';
import { CreateUser, GetUser, GetUserById, RemoveUser } from '../controllers/userController';
import { Auth } from '../controllers/authControler';
import { createVehicle, GetVehicleById, getVehicles, RemoveVehicle, updateVehicle } from '../controllers/vehicleController';
import { createCategory, getCategories, GetCategoryById, removeCategory, updateCategory } from '../controllers/categoryController';

const router = Router();

router.post('/api/v1/user', CreateUser);
router.get('/api/v1/user', GetUser)
router.get('/api/v1/user/:id', GetUserById)
router.delete('/api/v1/user/:id', RemoveUser)

router.post('/api/v1/auth', Auth)

router.post('/api/v1/vehicle', createVehicle)
router.get('/api/v1/vehicle', getVehicles)
router.get('/api/v1/vehicle/:id', GetVehicleById)
router.delete('/api/v1/vehicle/:id', RemoveVehicle)
router.patch('/api/v1/vehicle/:id', updateVehicle)

router.post('/api/v1/category', createCategory)
router.get('/api/v1/category', getCategories)
router.get('/api/v1/category/:id', GetCategoryById)
router.delete('/api/v1/category/:id', removeCategory)
router.patch('/api/v1/category/:id', updateCategory)


export default router;
