import { Request, Response, NextFunction } from "express";
import { ICategory } from "../dto/categoryDto";
import Category from "../models/category";

export const createCategoryMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const data: ICategory = req.body;

    if (!data.Title || typeof data.Title !== 'string') {
      res.status(400).json({ error: "Título da categoria é obrigatório e deve ser uma string" });
      return;
    }

    const categoryExists = await Category.findOne({ where: { Title: data.Title } });
    if (categoryExists) {
      res.status(409).json({ error: "Já existe uma categoria com esse nome" });
      return; 
    }
    return next()
}


export const createByIdMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (!category) {
        res.status(404).json({ error: "Categoria não encontrada" });
        return;
    }
    return next()
}