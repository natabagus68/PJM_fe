import { Calling } from "@domain/models/caller/calling";
import { ICallingRepository } from "@domain/repositories/caller/calling-repository";
import { api } from "../_api";

export class CallingApiRepository implements ICallingRepository {
  async create(props: Calling): Promise<Calling> {
    const { data } = await api.post(`hmi/calling`, {
      remark: props.remark,
      for: props.for,
    });
    return Calling.create({
      remark: props.remark,
      for: props.for,
    });
  }
  async update(id: string, value: string): Promise<boolean> {
    await api.put(`hmi/calling/${id}`, {
      remark: value,
    });
    return true;
  }
}
