import { HourlyPerformance, IHourlyPerformance } from "./perfomance-company";

export interface ICompanyPerformance {
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
  totalProcess: number | string;
  running: number | string;
  stop: number | string;
  hourlyPerformances: IHourlyPerformance[];
}

export class CompanyPerformance {
  private _props: ICompanyPerformance;
  constructor(props: ICompanyPerformance) {
    this._props = props;
  }
  public static create(props: ICompanyPerformance): CompanyPerformance {
    return new CompanyPerformance(props);
  }
  public unmarshall(): ICompanyPerformance {
    return {
      availability: Number(this.availability),
      performance: Number(this.performance),
      quality: Number(this.quality),
      oeeRealtime: Number(this.oeeRealtime),
      achievement: Number(this.achievement),
      notGood: Number(this.notGood),
      target: Number(this.target),
      totalQuantity: Number(this.totalQuantity),
      avgRuntime: this.avgRuntime,
      avgDowntime: this.avgDowntime,
      oeeLastMonth: Number(this.oeeLastMonth),
      totalProcess: Number(this.totalProcess),
      running: Number(this.running),
      stop: Number(this.stop),
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
  get totalProcess(): number | string {
    return this._props.totalProcess;
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
