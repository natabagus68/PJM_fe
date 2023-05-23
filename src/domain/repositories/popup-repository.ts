import { ChooseOpts } from "@domain/models/choose-opt";

export interface PopupRepository {
  getChoose(): Promise<ChooseOpts[]>;
}

