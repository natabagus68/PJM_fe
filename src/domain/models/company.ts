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
    return this._props.availability || 0;
  }
  get performance(): number | string {
    return this._props.performance || 0;
  }
  get quality(): number | string {
    return this._props.quality || 0;
  }
  get oeeRealtime(): number | string {
    return this._props.oeeRealtime || 0;
  }
  get achievement(): number | string {
    return this._props.achievement || 0;
  }
  get notGood(): number | string {
    return this._props.notGood || 0;
  }
  get target(): number | string {
    return this._props.target || 0;
  }
  get totalQuantity(): number | string {
    return this._props.totalQuantity || 0;
  }
  get avgRuntime(): string {
    return this._props.avgRuntime || "-";
  }
  get avgDowntime(): string {
    return this._props.avgDowntime || "-";
  }
  get oeeLastMonth(): number | string {
    return this._props.oeeLastMonth || 0;
  }
  get totalProcess(): number | string {
    return this._props.totalProcess || 0;
  }
  get running(): number | string {
    return this._props.running || 0;
  }
  get stop(): number | string {
    return this._props.stop || 0;
  }
  get hourlyPerformances(): HourlyPerformance[] {
    return (
      this._props.hourlyPerformances.map((item) =>
        HourlyPerformance.create(item)
      ) || []
    );
  }
}
