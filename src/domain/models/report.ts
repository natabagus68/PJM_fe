import moment from "moment";
import { Entity } from "./_entity";

export interface Ireport {
  id?: string;
  inspectionID: string;
  inspectionDate: string;
  customer: string;
  machineName: string;
  inspector: string;
}

export class Report extends Entity<Ireport> {
  static create(props: Ireport): Report {
    return new Report(props);
  }
  unmarshall() {
    return {
      id: this.id,
      inspectionID: this.inspectionID,
      inspectionDate: this.inspectionDate,
      customer: this.customer,
      machineName: this.machineName,
      inspector: this.inspector,
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
}

