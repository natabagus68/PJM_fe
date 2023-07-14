import { Line } from "@domain/models/caller/line";

export interface ILineRepository {
  getAll(): Promise<Line[]>;
}
