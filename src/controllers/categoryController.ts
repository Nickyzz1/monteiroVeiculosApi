import Category from "../models/category";
import { Request, Response } from "express";
import { ICategory } from "../dto/categoryDto";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const data: ICategory = req.body;

    if (!data.Title || typeof data.Title !== 'string') {
      return res.status(400).json({ error: "Título da categoria é obrigatório e deve ser uma string" });
    }

    const categoryExists = await Category.findOne({ where: { Title: data.Title } });
    if (categoryExists) {
      return res.status(409).json({ error: "Já existe uma categoria com esse nome" });
    }

    const newCategory = await Category.create({
      Title: data.Title,
      Image: data.Image || null,
      IsActive: 1
    });

    return res.status(201).json({ message: "Categoria criada com sucesso!", category: newCategory });
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    return res.status(500).json({ error: "Erro interno ao criar categoria" });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return res.status(500).json({ error: "Erro ao buscar categorias" });
  }
};

export const GetCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    return res.status(200).json(category);
  } catch (error) {
    console.error("Erro ao buscar categoria por ID:", error);
    return res.status(500).json({ error: "Erro ao buscar categoria" });
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }


    const updatedFields: any = {};
    for (const key in req.body) {
        if (req.body[key] !== null && req.body[key] !== undefined) {
            updatedFields[key] = req.body[key];
        }
    }
    await category.update(updatedFields);
    return res.status(200).json({ message: "Categoria atualizada com sucesso", category });
  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);
    return res.status(500).json({ error: "Erro ao atualizar categoria" });
  }
};

export const removeCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);

    if (!category) {
      return res.status(404).json({ error: "Categoria não encontrada" });
    }

    await category.destroy();
    return res.status(200).json({ message: "Categoria excluída com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir categoria:", error);
    return res.status(500).json({ error: "Erro ao excluir categoria" });
  }
};