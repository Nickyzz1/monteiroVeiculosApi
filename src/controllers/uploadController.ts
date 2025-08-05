// src/controllers/uploadController.ts
import { Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const uploadImagesController = async (req: Request, res: Response) => {
  try {
    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'Nenhuma imagem enviada' });
    }

    const uploadPromises = files.map(async (file) => {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'meu-projeto', // opcional, personalize
      });
      // Remove arquivo temporário após upload
      fs.unlinkSync(file.path);
      return result.secure_url;
    });

    const urls = await Promise.all(uploadPromises);

    return res.status(200).json({ urls });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao enviar imagens para o Cloudinary' });
  }
};
