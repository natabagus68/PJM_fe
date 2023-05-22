import { Aproval } from "@domain/models/aproval";
import { AprovalReport } from "@domain/models/aproval-report";
import { TableParams } from "@domain/models/table-params";

export interface AprovalRepository {
  get(params: TableParams): Promise<Aproval[]>;
  getReport(id: string): Promise<AprovalReport>;
}

