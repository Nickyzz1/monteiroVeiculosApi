import Category from "../models/category";
import { Request, Response } from "express";
import { ICategory } from "../dto/categoryDto";

export const createCategory = async (req: Request) => {

    const data: ICategory = req.body;
    const newCategory = await Category.create({
      Title: data?.Title,
      Image: data?.Image || null,
      IsActive: 1
    });
    return newCategory;
};

export const getCategories = async () => {

    const categories = await Category.findAll();
    return categories
};

export const getCategoryById = async (req: Request) => {

    const { id } = req.params;
    const category = await Category.findByPk(id);
    return category
};

export const updateCategory = async (req: Request) => {

    const { id } = req.params;
    const category = await Category.findByPk(id);

    const updatedFields: any = {};
    for (const key in req.body) {
        if (req.body[key] !== null && req.body[key] !== undefined) {
            updatedFields[key] = req.body[key];
        }
    }
    await category?.update(updatedFields);
};

export const removeCategory = async (req: Request) => {

    const { id } = req.params;
    const category = await Category.findByPk(id);
    await category?.destroy();
};