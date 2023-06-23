import { HourlyPerformance, IHourlyPerformance } from "./hourly-performance";
export interface IProcessPerformance {
  availability: number | string;
  performance: number | string;
  quality: number | string;
  oeeRealtime: number | string;
  achievement: number | string;
  notGood: number | string;
  target: number | string;
  totalQuantity: number | string;
  avgRuntime: string;
  avgDowntime: string;
  oeeLastMonth: number | string;
  totalSubProcess: number | string;
  running: number | string;
  stop: number | string;
  hourlyPerformances: IHourlyPerformance[];
}
export class ProcessPerformance {
  private _props: IProcessPerformance;
  constructor(props: IProcessPerformance) {
    this._props = props;
  }
  public static create(props: IProcessPerformance): ProcessPerformance {
    return new ProcessPerformance(props);
  }
  public unmarshall(): IProcessPerformance {
    return {
      availability: Number(this.availability).toFixed(1),
      performance: Number(this.performance).toFixed(1),
      quality: Number(this.quality).toFixed(1),
      oeeRealtime: Number(this.oeeRealtime).toFixed(1),
      achievement: Number(this.achievement).toFixed(1),
      notGood: Number(this.notGood).toFixed(1),
      target: Number(this.target).toString(),
      totalQuantity: Number(this.totalQuantity).toString(),
      avgRuntime: this.avgRuntime,
      avgDowntime: this.avgDowntime,
      oeeLastMonth: Number(this.oeeLastMonth).toFixed(1),
      totalSubProcess: Number(this.totalSubProcess).toString(),
      running: Number(this.running).toFixed(1),
      stop: Number(this.stop).toFixed(1),
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
  get oeeRealtime(): number | string {
    return this._props.oeeRealtime;
  }
  get achievement(): number | string {
    return this._props.achievement;
  }
  get notGood(): number | string {
    return this._props.notGood;
  }
  get target(): number | string {
    return this._props.target;
  }
  get totalQuantity(): number | string {
    return this._props.totalQuantity;
  }
  get avgRuntime(): string {
    return this._props.avgRuntime;
  }
  get avgDowntime(): string {
    return this._props.avgDowntime;
  }
  get oeeLastMonth(): number | string {
    return this._props.oeeLastMonth;
  }
  get totalSubProcess(): number | string {
    return this._props.totalSubProcess;
  }
  get running(): number | string {
    return this._props.running;
  }
  get stop(): number | string {
    return this._props.stop;
  }
  get hourlyPerformances(): HourlyPerformance[] {
    return this._props.hourlyPerformances.map((item) =>
      HourlyPerformance.create(item)
    );
  }
}
