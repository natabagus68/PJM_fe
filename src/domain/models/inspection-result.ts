import { Entity } from "./_entity";

export interface IInspectionResult {
  id?: string;
  desc: string;
  opt: string;
  color: string;
}

export class InspectionResult extends Entity<IInspectionResult> {
  static create(props: IInspectionResult): InspectionResult {
    return new InspectionResult(props);
  }
  unmarshall() {
    return {
      id: this.id,
      desc: this.desc,
      opt: this.opt,
      color: this.color,
    };
  }
  get desc(): string {
    return this._props.desc;
  }
  get opt(): string {
    return this._props.opt;
  }
  get color(): string {
    return this._props.color;
  }
}

