import { HourlyPerformance, IHourlyPerformance } from "./hourly-performance";
export interface IProcessPerformance {
  availability: number | string;
  performance: number | string;
  quality: number | string;
  oee: number | string;
  cycle: number | string;
  realCycle: number | string;
  target: number | string;
  totalQuantity: number | string;
  achievement: number | string;
  notGood: number | string;
  runtime: string;
  downtime: string;
  hourlyPerformances: IHourlyPerformance[];
}
export class SubProcessPerformance {
  private _props: IProcessPerformance;
  constructor(props: IProcessPerformance) {
    this._props = props;
  }
  public static create(props: IProcessPerformance): SubProcessPerformance {
    return new SubProcessPerformance(props);
  }
  public unmarshall(): IProcessPerformance {
    return {
      availability: Number(this.availability).toFixed(1),
      performance: Number(this.performance).toFixed(1),
      quality: Number(this.quality).toFixed(1),
      oee: Number(this.oee).toFixed(1),
      cycle: Number(this.cycle).toString(),
      realCycle: Number(this.realCycle).toString(),
      target: Number(this.target).toString(),
      totalQuantity: Number(this.totalQuantity).toString(),
      achievement: Number(this.achievement).toFixed(1),
      notGood: Number(this.notGood).toFixed(1),
      runtime: this.runtime,
      downtime: this.downtime,
      hourlyPerformances: this.hourlyPerformances.map((item) =>
        item.unmarshall()
      ),
    };
  }
  get availability(): number | string {
    return this._props.availability;
  }
  get performance(): number | string {
    return this._props.performance;
  }
  get quality(): number | string {
    return this._props.quality;
  }
  get oee(): number | string {
    return this._props.oee;
  }
  get cycle(): number | string {
    return this._props.cycle;
  }
  get realCycle(): number | string {
    return this._props.realCycle;
  }
  get target(): number | string {
    return this._props.target;
  }
  get totalQuantity(): number | string {
    return this._props.totalQuantity;
  }
  get achievement(): number | string {
    return this._props.achievement;
  }
  get notGood(): number | string {
    return this._props.notGood;
  }
  get runtime(): string {
    return this._props.runtime;
  }
  get downtime(): string {
    return this._props.downtime;
  }
  get hourlyPerformances(): HourlyPerformance[] {
    return this._props.hourlyPerformances.map((item) =>
      HourlyPerformance.create(item)
    );
  }
}
