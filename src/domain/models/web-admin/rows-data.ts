export interface IRowsData<T> {
  rows: number;
  lastPage: number;
  data: T[];
}

export class RowsData<T> {
  rows: number;
  lastPage: number;
  data: T[];
  constructor(props: IRowsData<T>) {
    (this.rows = props.rows),
      (this.lastPage = props.lastPage),
      (this.data = props.data);
  }

  static create<T>(props: IRowsData<T>): RowsData<T> {
    return new RowsData(props);
  }
  unmarshall() {
    return {
      rows: this.rows,
      lastPage: this.lastPage,
      data: this.data,
    };
  }
}
