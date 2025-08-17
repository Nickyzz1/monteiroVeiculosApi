import { Request, Response } from "express";
import * as bannerService from "../services/bannerService";

export const getBanners = async (req: Request, res: Response) => {
  try {
    const banners = await bannerService.getAllBanners();
    res.json(banners);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar banners" });
  }
};

export const addBanner = async (req: Request, res: Response) => {
  try {
    const { Image, Order, Type, Local } = req.body;

    if (!Image) return res.status(400).json({ error: "URL da imagem é obrigatória" });

    const newBanner = await bannerService.createBanner(Image, Order, Type, Local);
    res.status(201).json(newBanner);

  } catch (error: any) {
    res.status(500).json({ error: error.message || "Erro ao criar banner" });
  }
};

export const removeBanner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await bannerService.deleteBanner(Number(id));
    if (!deleted) {
      return res.status(404).json({ error: "Banner não encontrado" });
    }
    res.json({ message: "Banner removido com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao remover banner" });
  }
};

export const updateOrderBanner = async (req: Request, res: Response) => {
  console.log("BODY:", req.body);
  console.log("PARAMS:", req.params);
  try {
    const { id } = req.params;
    const { Order } = req.body;
    const banner = await bannerService.updateOrder(Number(id), Number(Order));
    res.json(banner);
  } catch (err: any) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};
