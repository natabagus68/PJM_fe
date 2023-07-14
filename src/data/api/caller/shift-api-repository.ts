import { Shift } from "@domain/models/caller/shift";
import { IShiftRepository } from "@domain/repositories/caller/shift-repository";
import { api } from "../_api";

export class ShiftApiRepository implements IShiftRepository {
  async getAll(): Promise<Shift[]> {
    const { data } = await api.get(`web-admin/shifts`);
    return data.data.map((item) => {
      return Shift.create({
        id: item.id,
        name: item.no,
      });
    });
  }
}
