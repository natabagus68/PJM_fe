import { Entity } from "../_entity";

export interface ICalling {
  id?: string;
  remark: string;
  for: "leader" | "quality" | "maintenance" | "";
}

export class Calling extends Entity<ICalling> {
  static create(props: ICalling): Calling {
    return new Calling(props);
  }
  unmarshall() {
    return {
      id: this.id,
      remark: this.remark,
      for: this.for,
    };
  }
  get remark(): string {
    return this._props.remark;
  }
  get for(): "leader" | "quality" | "maintenance" | "" {
    return this._props.for;
  }
}
