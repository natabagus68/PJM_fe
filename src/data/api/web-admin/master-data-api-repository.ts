import {
  FilterMasterData,
  MasterData,
} from "@domain/models/web-admin/master-data";
import { RowsData } from "@domain/models/web-admin/rows-data";
import { IMasterDataRepository } from "@domain/repositories/web-admin/master-data-repository";
import { api } from "../_api";

export class MasterDataApiRepository implements IMasterDataRepository {
  async getAll(props: FilterMasterData): Promise<RowsData<MasterData>> {
    const { data } = await api.get(`web-admin/areas`, {
      params: {
        page: props.paginate.page,
        limit: props.paginate.limit,
        search: props.q,
        "sort[column]":
          props.sortby == "line" || props.sortby == "machine"
            ? props.sortby
            : "",
        "sort[sort]":
          props.sortby == "asc" || props.sortby == "dsc" ? props.sortby : "",
      },
    });

    return RowsData.create<MasterData>({
      rows: data.data.totalRow,
      lastPage: data.data.lastPage,
      data: (data.data.data || []).map((item) => {
        return MasterData.create({
          line: item.line,
          plant: item.plant,
        });
      }),
    });
  }
}
