import moment from "moment";
import { Entity } from "../_entity";
import { IPaginate, Paginate } from "./paginate";

export interface IFilterLog {
  q: string;
  startDate: string;
  endDate: string;
  paginate: IPaginate;
}

export interface ILog {
  id?: string;
  location: string;
  remarkProblem: string;
  timeHandling: string;
  handling: string;
  timeStamps: string;
  row?: IPaginate["rows"];
}

export class Log extends Entity<ILog> {
  static create(props: ILog): Log {
    return new Log(props);
  }

  unmarshall() {
    return {
      id: this.id,
      location: this.location,
      remarkProblem: this.remarkProblem,
      timeHandling: this.timeHandling,
      handling: this.handling,
      timeStamps: this.timeStamps,
      row: this.row,
    };
  }
  get location(): string {
    return this._props.location;
  }
  get remarkProblem(): string {
    return this._props.remarkProblem;
  }
  get timeHandling(): string {
    return this._props.timeHandling;
  }
  get handling(): string {
    return this._props.handling;
  }
  get timeStamps(): string {
    return this._props.timeStamps;
  }
  get row(): IPaginate["rows"] {
    return this._props.row;
  }
}

export class FilterLog {
  private _props;
  constructor(props: IFilterLog) {
    this._props = props;
  }

  static create(props: IFilterLog): FilterLog {
    return new FilterLog(props);
  }

  unmarshall() {
    return {
      q: this.q,
      startDate: this.startDate,
      endDate: this.endDate,
      paginate: this.paginate,
    };
  }

  get q(): string {
    return this._props.q;
  }
  get startDate(): string {
    return this._props.startDate;
  }
  get endDate(): string {
    return this._props.endDate;
  }
  get paginate(): Paginate {
    return this._props.paginate;
  }
}
