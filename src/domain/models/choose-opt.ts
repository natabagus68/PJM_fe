import { Entity } from "./_entity";

export interface IChooseOpts {
  id?: string;
  choose: string;
  grade: string;
  label: string;
}

export class ChooseOpts extends Entity<IChooseOpts> {
  static create(props: IChooseOpts): ChooseOpts {
    return new ChooseOpts(props);
  }
  unmarshall() {
    return {
      id: this.id,
      choose: this.choose,
      grade: this.grade,
      label: this.label,
    };
  }

  get choose(): string {
    return this._props.choose;
  }
  get grade(): string {
    return this._props.grade;
  }
  get label(): string {
    return this._props.label;
  }
}

