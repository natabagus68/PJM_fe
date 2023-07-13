import { Entity } from "../_entity";

export interface IShift {
  id?: string;
  name: string;
}

export class Shift extends Entity<IShift> {
  static create(props: IShift): Shift {
    return new Shift(props);
  }

  unmarshall() {
    return {
      id: this.id,
      name: this.name,
    };
  }

  get name(): string {
    return this._props.name;
  }
}
