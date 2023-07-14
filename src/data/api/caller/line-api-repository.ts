import { Line } from "@domain/models/caller/line";
import { ILineRepository } from "@domain/repositories/caller/line-repository";
import { api } from "../_api";

export class LineApiRepository implements ILineRepository {
  async getAll(): Promise<Line[]> {
    const { data } = await api.get(`web-admin/areas/all`);
    return data.data.map((item) => {
      return Line.create({
        id: item.id,
        name: item.line,
      });
    });
  }
}
