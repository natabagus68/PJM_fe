import {
  FilterMasterData,
  MasterData,
} from "@domain/models/web-admin/master-data";
import { RowsData } from "@domain/models/web-admin/rows-data";

export interface IMasterDataRepository {
  getAll(props: FilterMasterData): Promise<RowsData<MasterData>>;
}
