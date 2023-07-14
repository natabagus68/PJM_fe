import { Shift } from "@domain/models/caller/shift";

export interface IShiftRepository {
  getAll(): Promise<Shift[]>;
}
