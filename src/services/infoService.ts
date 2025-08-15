import Info from "../models/infos";

export class InfoService {

  // GET - listar todas as infos
  static async getAllInfo() {
    return await Info.findAll();
  }

  // GET - buscar por ID
  static async getInfoById(id: number) {
    return await Info.findByPk(id);
  }

  // POST - criar
  static async createInfo(data: any) {
    return await Info.create(data);
  }

  // UPDATE - atualizar
  static async updateInfo(id: number, data: any) {
    const info = await Info.findByPk(id);
    if (!info) {
      throw new Error('Registro não encontrado');
    }
    await info.update(data);
    return info;
  }

  static async incrementBrand(id: number, brand: string) {
    const info = await Info.findByPk(id);
    if (!info) throw new Error('Registro não encontrado');

    const currentValue = (info.get(brand) as number) || 0;
    await info.update({ [brand]: currentValue + 1 });

    return info;
  }



}
