import { Router } from 'express';
import { CreateUser, GetUser, GetUserById, RemoveUser } from '../controllers/userController';
import { Auth } from '../controllers/authControler';
import { CreateVehicle, GetVehicleById, GetVehicles, RemoveVehicle, UpdateVehicle } from '../controllers/vehicleController';
import { CreateCategory, GetCategories, GetCategoryById, RemoveCategory, UpdateCategory } from '../controllers/categoryController';
import { userCreateMidware, userByIdMiddleware } from '../midwares/userMiddleware';
import { vehicleCreateMiddleware, vehicleByIdMiddleware } from '../midwares/vehicleMiddleware';
import { createCategoryMiddleware, createByIdMiddleware } from '../midwares/categoryMiddleware';
import { authMiddleware } from '../midwares/authMiddleware';
import { RemoveImage } from '../controllers/categoryController';
import uploadRouter from './uploadRouter';
import { EBrand, EConfort, EFuelType, ESteering, ETraction, ETransmision } from '../enums/enums';
import { createLog, getAll } from '../controllers/logController';
import { infoController } from '../controllers/infoController';

const router = Router();

router.post('/api/v1/user', userCreateMidware, CreateUser);
router.get('/api/v1/user', GetUser)
router.get('/api/v1/user/:id', userByIdMiddleware, GetUserById)
router.delete('/api/v1/user/:id', userByIdMiddleware, RemoveUser)
//fazer update de senha

router.post('/api/v1/auth', authMiddleware,Auth)

router.post('/api/v1/vehicle', vehicleCreateMiddleware, CreateVehicle)
router.get('/api/v1/vehicle', GetVehicles)
router.get('/api/v1/vehicle/:id', vehicleByIdMiddleware, GetVehicleById)
router.delete('/api/v1/vehicle/:id', vehicleByIdMiddleware, RemoveVehicle)
router.patch('/api/v1/vehicle/:id', vehicleByIdMiddleware, UpdateVehicle)

router.post('/api/v1/category', createCategoryMiddleware, CreateCategory)
router.get('/api/v1/category', GetCategories)
router.get('/api/v1/category/:id', createByIdMiddleware, GetCategoryById)
router.delete('/api/v1/category/:id', createByIdMiddleware,  RemoveCategory)
router.patch('/api/v1/category/:id',createByIdMiddleware, UpdateCategory)
router.delete('/api/v1/category/image', RemoveImage);

router.post('/api/v1/log', createLog);
router.get('/api/v1/log', getAll);

router.get('/api/v1/info/:id', infoController.infoGet)
router.put('/api/v1/info/:id', infoController.infoPut)
router.put('/api/v1/incrementBrand/:id', infoController.infoIncrementBrand)

router.post('/api/v1/info', infoController.infoCreate)


router.get('/api/v1/enums', (req, res) => {
  res.json({
    brands: Object.values(EBrand),
    transmission: Object.values(ETransmision),
    fuel: Object.values(EFuelType),
    steering:  Object.values(ESteering),
    traction: Object.values(ETraction),
    confort: Object.values(EConfort)
  });
});


router.use('/api/v1/upload', uploadRouter);


export default router;
