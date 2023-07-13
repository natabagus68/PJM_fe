import { Entity } from "../_entity";

export interface ILine {
  id?: string;
  name: string;
}

export class Line extends Entity<ILine> {
  static create(props: ILine): Line {
    return new Line(props);
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
