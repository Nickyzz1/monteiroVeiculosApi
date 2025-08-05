// src/routes/uploadRouter.ts
import { Router } from 'express';
import multer from 'multer';
import { uploadImagesController } from '../controllers/uploadController';

const upload = multer({ dest: 'uploads/' }); // pasta temporária

const router = Router();

router.post('/', upload.array('images', 10), uploadImagesController);

export default router;
