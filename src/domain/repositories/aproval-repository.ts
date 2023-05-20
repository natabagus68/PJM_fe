import { Aproval } from "@domain/models/aproval";
import { TableParams } from "@domain/models/table-params";

export interface AprovalRepository {
  get(params: TableParams): Promise<Aproval[]>;
}
