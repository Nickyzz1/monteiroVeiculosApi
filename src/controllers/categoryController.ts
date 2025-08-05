import { Request, Response } from "express";
import {
  createCategory,
  getCategories,
  getCategoryById,
  removeCategory,
  updateCategory,
  removeImage
} from "../services/categoryService";

export const CreateCategory = async (req: Request, res: Response) => {
  try {
    const category = await createCategory(req);
    return res.status(201).json({ message: "Categoria criada com sucesso!", category });
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    return res.status(500).json({ error: "Erro interno ao criar categoria" });
  }
};

export const GetCategories = async (req: Request, res: Response) => {
  try {
    const categories = await getCategories();
    return res.status(200).json(categories);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    return res.status(500).json({ error: "Erro ao buscar categorias" });
  }
};

export const GetCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await getCategoryById(req);
    if (!category) return res.status(404).json({ error: "Categoria não encontrada" });
    return res.status(200).json(category);
  } catch (error) {
    console.error("Erro ao buscar categoria por ID:", error);
    return res.status(500).json({ error: "Erro ao buscar categoria" });
  }
};

export const UpdateCategory = async (req: Request, res: Response) => {
  try {
    const category = await updateCategory(req);
    return res.status(200).json({ message: "Categoria atualizada com sucesso", category });
  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);
    return res.status(500).json({ error: "Erro ao atualizar categoria" });
  }
};

export const RemoveCategory = async (req: Request, res: Response) => {
  try {
    await removeCategory(req);
    return res.status(200).json({ message: "Categoria excluída com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir categoria:", error);
    return res.status(500).json({ error: "Erro ao excluir categoria" });
  }
};

/**
 * Controller para deletar imagem no Cloudinary
 * Recebe publicId no corpo da requisição
 */
export const RemoveImage = async (req: Request, res: Response) => {
  const { publicId } = req.body;
  if (!publicId) {
    return res.status(400).json({ message: "publicId é obrigatório" });
  }
  try {
    const success = await removeImage(publicId);
    if (success) {
      return res.json({ message: "Imagem deletada com sucesso" });
    } else {
      return res.status(400).json({ message: "Não foi possível deletar a imagem" });
    }
  } catch (error) {
    console.error("Erro ao deletar imagem:", error);
    return res.status(500).json({ message: "Erro interno ao deletar imagem" });
  }
};
