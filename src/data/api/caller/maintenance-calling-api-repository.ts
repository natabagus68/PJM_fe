import { MaintenaceCalling } from "@domain/models/caller/maintenance-calling";
import { IMaintenaceCallingRepository } from "@domain/repositories/caller/maintenance-calling-repository";
import { api } from "../_api";

export class MaintenaceCallingApiRepository
  implements IMaintenaceCallingRepository
{
  async findAll(): Promise<MaintenaceCalling[]> {
    const { data } = await api.get(`hmi/calling`);
    return data.data.map((item) => {
      return MaintenaceCalling.create({
        id: item.id,
        time: item.time,
        line: item.type,
        type: item.location,
        remark: item.remark,
      });
    });
  }
}
