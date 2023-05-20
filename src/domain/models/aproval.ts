import moment from "moment";
import { Entity } from "./_entity";

export interface IAproval {
  id?: string;
  inspectionID: string;
  inspectionDate: string;
  customer: string;
  machineName: string;
  inspector: string;
  status: string;
}

export enum AprovalStatus {
  ALL_STATUS = "ALL_STATUS",
  WAITING = "WAITING",
  CONFIRMED = "CONFIRMED",
}

export class Aproval extends Entity<IAproval> {
  static create(props: IAproval): Aproval {
    return new Aproval(props);
  }
  unmarshall() {
    return {
      id: this.id,
      inspectionID: this.inspectionID,
      inspectionDate: this.inspectionDate,
      customer: this.customer,
      machineName: this.machineName,
      inspector: this.inspector,
      status: this.status,
    };
  }

  get inspectionID(): string {
    return this._props.inspectionID;
  }
  get inspectionDate(): string {
    return moment(this._props.inspectionDate).format("L");
  }
  get customer(): string {
    return this._props.customer;
  }
  get machineName(): string {
    return this._props.machineName;
  }
  get inspector(): string {
    return this._props.inspector;
  }
  get status(): string {
    return this._props.status;
  }
}

