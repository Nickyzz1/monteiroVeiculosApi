import Category from "../models/category";
import { Request } from "express";
import { ICategory } from "../dto/categoryDto";
import deleteImage from '../services/cloudinaryService'
import { LogService } from "./logService";

export const createCategory = async (req: Request) => {
  const data: ICategory = req.body;
  const newCategory = await Category.create({
    Title: data?.Title,
    Image: data?.Image || null,
    IsActive: 1,
  });
  LogService.createLog({
    Description: `Nova categoria ${newCategory.get('Title')} inserida`,
    Date: new Date()
  });
    return newCategory;
  };

export const getCategories = async () => {
  return await Category.findAll();
};

export const getCategoryById = async (req: Request) => {
  const id = req.params.id;
  return await Category.findByPk(id);
};

export const updateCategory = async (req: Request) => {
  const id = req.params.id;
  const category = await Category.findByPk(id);
  if (!category) throw new Error("Categoria não encontrada");

  const updatedFields: Partial<ICategory> = {};
  for (const key in req.body) {
    const typedKey = key as keyof ICategory; // <-- aqui o type assertion
    if (req.body[typedKey] !== null && req.body[typedKey] !== undefined) {
      updatedFields[typedKey] = req.body[typedKey];
    }
  }
  await category.update(updatedFields);
  LogService.createLog({
  Description: `Categoria ${category.get('Title')} editada`,
  Date: new Date()
  });

  return category;
};

export const removeCategory = async (req: Request) => {
  const id = req.params.id;
  const category = await Category.findByPk(id);
  if (!category) throw new Error("Categoria não encontrada");
  await category.destroy();
  LogService.createLog({
  Description: `Categoria ${category.get('Title')} excluída`,
  Date: new Date()
  });

  return true;
};

/**
 * Serviço para deletar imagem no Cloudinary, apenas retorna true/false
 */
export const removeImage = async (publicId: string): Promise<boolean> => {
  if (!publicId) return false;
  try {
    const result : any = await deleteImage(publicId);
    return result.result === "ok";
  } catch (error) {
    console.error("Erro ao deletar imagem no Cloudinary:", error);
    return false;
  }
};
