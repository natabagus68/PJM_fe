import { Handling } from "@domain/models/called/handling";
import { IHandlingRepository } from "@domain/repositories/called/handling-repository";
import { api } from "../_api";

export class HandlingApiRepository implements IHandlingRepository {
  async getAll(): Promise<Handling[]> {
    const { data } = await api.get(`hmi/handling`);
    return data.data.map((item) => {
      return Handling.create({
        id: item.id,
        time: item.time,
        location: item.location,
        problem: item.remark,
        timeHandling: item.timeHandling,
        handling: item.handling,
        isHandle: item.isHandling,
      });
    });
  }
  async update(id: string, value: string): Promise<boolean> {
    await api.put(`hmi/handling/${id}`, {
      handle: value,
    });
    return true;
  }
}
