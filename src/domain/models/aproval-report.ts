import { IAccuracy } from "./Accuracy";
import { Entity } from "./_entity";
import { IAproval } from "./aproval";
import { IAprovalResult } from "./aproval-result";
import { CustomerReport } from "./customer-report";
import { IInspectionForm } from "./inspection";
import { IInspectionResult } from "./inspection-result";
import { LoadTonnage } from "./load-tonnage";
import { Machine } from "./machine";
import { IMachineCheck } from "./machine-check";
import { ResumeCheck } from "./resume-check";

export interface IAProvalReport {
  id?: string;
  aproval: IAproval;
  customer?: CustomerReport;
  aprovalResult: IAprovalResult;
  inspectionForm: IInspectionForm[];
  machineCheck: IMachineCheck;
  accuracyCheck: IAccuracy;
  loadTonnage: LoadTonnage[];
  resume: ResumeCheck;
  inspection?: IInspectionResult;
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
      inspection: this.inspection,
    };
  }
  get customer(): CustomerReport | undefined {
    return this._props.customer;
  }
  get aproval(): IAproval {
    return this._props.aproval;
  }
  get aprovalResult(): IAprovalResult {
    return this._props.aprovalResult;
  }
  get inspectionForm(): IInspectionForm[] {
    return this._props.inspectionForm;
  }
  get machineCheck(): IMachineCheck {
    return this._props.machineCheck;
  }
  get accuracyCheck(): IAccuracy {
    return this._props.accuracyCheck;
  }
  get loadTonnage(): LoadTonnage[] {
    return this._props.loadTonnage;
  }
  get resume(): ResumeCheck {
    return this._props.resume;
  }

  get inspection(): IInspectionResult {
    return this._props.inspection;
  }
}

