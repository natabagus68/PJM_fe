import { Entity } from "../_entity";

export interface IMasterDataCreate {
  id?: string;
  line: string;
  machine: string;
}

export class MasterDataCreate extends Entity<IMasterDataCreate> {
  static create(props: IMasterDataCreate): MasterDataCreate {
    return new MasterDataCreate(props);
  }

  unmarshall() {
    return {
      id: this.id,
      line: this.line,
      machine: this.machine,
    };
  }

  get line(): string {
    return this._props.line;
  }
  get machine(): string {
    return this._props.machine;
  }
}
