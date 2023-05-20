import { Aproval } from "@domain/models/aproval";
import { TableParams } from "@domain/models/table-params";
import { AprovalRepository } from "@domain/repositories/aproval-repository";
import { api } from "./_api";

export class AprovalApiRepository implements AprovalRepository {
  async get(params: TableParams): Promise<Aproval[]> {
    const { data } = await api.get(`web-admin/approval`, {
      params: {
        search: params.q,
        page: params.page,
        limit: params.limit,
        status: params.status.toUpperCase(),
      },
    });

    console.log(data.data.data);
    return data.data.data.map((item) => {
      return Aproval.create({
        id: item.id,
        inspectionID: item.inspectionId,
        inspectionDate: item.inspectionDate,
        customer: item.customerName,
        machineName: item.customerName,
        inspector: item.inspectorName,
        status: item.status,
      });
    });
  }
}

