import { Entity } from "../_entity";
import { Paginate } from "./paginate";

export interface IFilterMasterData {
  q: string;
  sortby: string;
  paginate: Paginate;
}

export interface IMasterData {
  id?: string;
  line: string;
  plant: string;
}

export class MasterData extends Entity<IMasterData> {
  static create(props: IMasterData): MasterData {
    return new MasterData(props);
  }

  unmarshall() {
    return {
      id: this.id,
      line: this.line,
      plant: this.plant,
    };
  }

  get line(): string {
    return this._props.line;
  }
  get plant(): string {
    return this._props.plant;
  }
}

export class FilterMasterData {
  private _props: IFilterMasterData;
  constructor(props: IFilterMasterData) {
    this._props = props;
  }
  static create(props: IFilterMasterData): FilterMasterData {
    return new FilterMasterData(props);
  }
  unmarshall() {
    return {
      q: this.q,
      sortby: this.sortby,
      paginate: this.paginate,
    };
  }
  get q(): string {
    return this._props.q;
  }
  get sortby(): string {
    return this._props.sortby;
  }
  get paginate(): Paginate {
    return this._props.paginate;
  }
}
