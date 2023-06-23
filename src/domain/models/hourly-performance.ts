export interface IHourlyPerformance {
  name: string;
  value: number;
}

export class HourlyPerformance {
  private _props: IHourlyPerformance;
  constructor(props: IHourlyPerformance) {
    this._props = props;
  }
  public static create(props: IHourlyPerformance): HourlyPerformance {
    return new HourlyPerformance(props);
  }
  public unmarshall(): IHourlyPerformance {
    return {
      name: this.name,
      value: this.value,
    };
  }
  get name(): string {
    return this._props.name;
  }
  get value(): number {
    return this._props.value;
  }
}
