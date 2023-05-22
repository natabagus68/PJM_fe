import { Entity } from "./_entity";

export interface Items {
  id?: string;
  name: string;
  ketetapan: string;
  note: string;
}

export interface IInspectionForm {
  id?: string;
  name: string;
  data: Items[];
}

export class InspectionForm extends Entity<IInspectionForm> {
  static create(props: IInspectionForm): InspectionForm {
    return new InspectionForm(props);
  }
  unmarshall() {
    return {
      id: this.id,
      name: this.name,
      data: this.data,
    };
  }
  get name(): string {
    return this._props.name;
  }
  get data(): Items[] {
    return this._props.data;
  }
}

