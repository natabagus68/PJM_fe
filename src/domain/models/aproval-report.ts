import { Entity } from "./_entity";
import { IAproval } from "./aproval";
import { IAprovalResult } from "./aproval-result";
import { IInspectionForm } from "./inspection";
import { Machine } from "./machine";
import { IMachineCheck } from "./machine-check";

export interface IAProvalReport {
  id?: string;
  aproval: IAproval;
  aprovalResult: IAprovalResult;
  inspectionForm: IInspectionForm[];
  machineCheck: IMachineCheck;
  accuracyCheck: any;
  loadTonnage: any;
  resume: any;
}

export class AprovalReport extends Entity<IAProvalReport> {
  static create(props: IAProvalReport): AprovalReport {
    return new AprovalReport(props);
  }
  unmarshall() {
    return {
      id: this.id,
      aproval: this.aproval,
      aprovalResult: this.aprovalResult,
    };
  }
  get aproval(): IAproval {
    return this._props.aproval;
  }
  get aprovalResult(): IAprovalResult {
    return this._props.aprovalResult;
  }
}

