import { Handling } from "@domain/models/called/handling";

export interface IHandlingRepository {
  getAll(): Promise<Handling[]>;
  update(id: string, value: string): Promise<boolean>;
}
