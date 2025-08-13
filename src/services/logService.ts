import Log from '../models/log';

export class LogService {

  // POST - criar novo log
  static async createLog(data: { Description: string; Date: Date }) {
    return await Log.create(data);
  }

  static async getAll() {
    return await Log.findAll();
  }

}
