import { IFilterLog, Log } from "@domain/models/web-admin/Log";
import { ILogRepository } from "@domain/repositories/web-admin/log-repository";
import { api } from "../_api";
import { RowsData } from "@domain/models/web-admin/rows-data";

export class LogApiRepository implements ILogRepository {
  async getAll(filter: IFilterLog): Promise<RowsData<Log>> {
    const { data } = await api.get(`web-admin/monitoring-log`, {
      params: {
        search: filter.q,
        page: filter.paginate.page,
        limit: filter.paginate.limit,
        startDate: filter.startDate,
        endDate: filter.endDate,
      },
    });

    return RowsData.create<Log>({
      rows: data.data.totalRow,
      lastPage: data.data.lastPage,
      data: (data.data.data || []).map((item) => {
        return Log.create({
          location: item.location,
          remarkProblem: item.remark,
          timeHandling: item.timeHandling,
          handling: item.handling,
          timeStamps: item.time,
        });
      }),
    });
  }
}
