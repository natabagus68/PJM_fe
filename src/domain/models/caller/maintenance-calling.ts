import { Entity } from "../_entity";

export interface IMaintenaceCalling {
  id?: string;
  time: string;
  line: string;
  type: string;
  remark: string;
}

export class MaintenaceCalling extends Entity<IMaintenaceCalling> {
  static create(props: IMaintenaceCalling): MaintenaceCalling {
    return new MaintenaceCalling(props);
  }
  unmarshall() {
    return {
      id: this.id,
      time: this.time,
      line: this.line,
      type: this.type,
      remark: this.remark,
    };
  }
  get time(): string {
    return this._props.time;
  }
  get line(): string {
    return this._props.line;
  }
  get type(): string {
    return this._props.type;
  }
  get remark(): string {
    return this._props.remark;
  }
}
