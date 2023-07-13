import { Entity } from "../_entity";

export interface IPaginate {
  page: number;
  limit: number;
  rows: number;
}

export class Paginate extends Entity<IPaginate> {
  static create(props: IPaginate): Paginate {
    return new Paginate(props);
  }

  unmarshall() {
    return {
      id: this.id,
      page: this.page,
      limit: this.limit,
      rows: this.rows,
    };
  }
  get page(): number {
    return this._props.page;
  }
  get limit(): number {
    return this._props.limit;
  }
  get rows(): number {
    return this._props.rows;
  }
}
