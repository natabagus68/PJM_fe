import { ChooseOpts } from "@domain/models/choose-opt";
import { PopupRepository } from "@domain/repositories/popup-repository";
import { api } from "./_api";

export class PopupApiRepository implements PopupRepository {
  async getChoose(): Promise<ChooseOpts[]> {
    const { data } = await api.get("web-admin/inspection-result");
    return data.data.map((item) => {
      return ChooseOpts.create({
        id: item.id,
        choose: item.option,
        grade: item.color,
        label: item.description,
      });
    });
  }

  async storeChoose(id: string, data: string): Promise<boolean> {
    console.log(id, "api");
    await api.put(`web-admin/approval/${id}/update-result`, {
      inspectionResultId: data,
    });
    return true;
  }
}

