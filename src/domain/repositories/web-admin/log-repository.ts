import { IFilterLog, Log } from "@domain/models/web-admin/Log";
import { RowsData } from "@domain/models/web-admin/rows-data";

export interface ILogRepository {
  getAll(filter: IFilterLog): Promise<RowsData<Log>>;
}
