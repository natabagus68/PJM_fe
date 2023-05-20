import { Report } from "@domain/models/report";
import { TableParams } from "@domain/models/table-params";

export interface ReportRepository {
  get(params: TableParams): Promise<Report[]>;
}

