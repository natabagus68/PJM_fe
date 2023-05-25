import { Report } from "@domain/models/report";
import { TableParams } from "@domain/models/table-params";
import { ReportRepository } from "@domain/repositories/repoty-repository";
import { api } from "./_api";

export class ReportApiRepository implements ReportRepository {
  async get(params: TableParams): Promise<Report[]> {
    const { data } = await api.get(`web-admin/report`, {
      params: {
        search: params.q,
        page: params.page,
        limit: params.limit,
      },
    });

    return data.data.data.map((item) => {
      return Report.create({
        id: item.id,
        inspectionID: item.inspectionId,
        inspectionDate: item.inspectionDate,
        customer: item.customerName,
        machineName: item.customerName,
        inspector: item.inspectorName,
      });
    });
  }
}

