import Banner from "../models/banner";

export const getAllBanners = async () => {
  return await Banner.findAll();
};

export const createBanner = async (Image: string, Order: number, Type : number, Local:number) => {
  return await Banner.create({ Image: Image, Order, Type, Local});
};

export const deleteBanner = async (id: number) => {
  const banner = await Banner.findByPk(id);
  if (!banner) return null;
  await banner.destroy();
  return banner;
};

export const updateOrder = async(id: number, newOrder: number) => {
  const banner = await Banner.findByPk(id);
  if (!banner) throw new Error('Banner não encontrado');

  banner.set('Order', newOrder); 
  await banner.save();

  return banner;
}
