import { Entity } from "./_entity";

export interface ILoadTonnage {
  id?: string;
  name: number;
  lfActLoad: number;
  lfLoadMonitor: number;
  lrActLoad: number;
  lrLoadMonitor: number;
  rfActLoad: number;
  rfLoadMonitor: number;
  rrActLoad: number;
  rrLoadMonitor: number;
  totalActLoad: number;
  totalLoadMonitor: number;
  dieHeight: number;
  generalDataId: string;
}

export class LoadTonnage extends Entity<ILoadTonnage> {
  static create(props: ILoadTonnage): LoadTonnage {
    return new LoadTonnage(props);
  }

  unmarshall() {
    return {
      id: this.id,
      name: this.name,
      lfActLoad: this.lfActLoad,
      lfLoadMonitor: this.lfLoadMonitor,
      lrActLoad: this.lrActLoad,
      lrLoadMonitor: this.lrLoadMonitor,
      rfActLoad: this.rfActLoad,
      rfLoadMonitor: this.rfLoadMonitor,
      rrActLoad: this.rrActLoad,
      rrLoadMonitor: this.rrLoadMonitor,
      totalActLoad: this.totalActLoad,
      totalLoadMonitor: this.totalLoadMonitor,
      dieHeight: this.dieHeight,
      generalDataId: this.generalDataId,
    };
  }

  get name(): number {
    return this._props.name;
  }
  get lfActLoad(): number {
    return this._props.lfActLoad;
  }
  get lfLoadMonitor(): number {
    return this._props.lfLoadMonitor;
  }
  get lrActLoad(): number {
    return this._props.lrActLoad;
  }
  get lrLoadMonitor(): number {
    return this._props.lrLoadMonitor;
  }
  get rfActLoad(): number {
    return this._props.rfActLoad;
  }
  get rfLoadMonitor(): number {
    return this._props.rfLoadMonitor;
  }
  get rrActLoad(): number {
    return this._props.rrActLoad;
  }
  get rrLoadMonitor(): number {
    return this._props.rrLoadMonitor;
  }
  get totalActLoad(): number {
    return this._props.totalActLoad;
  }
  get totalLoadMonitor(): number {
    return this._props.totalLoadMonitor;
  }
  get dieHeight(): number {
    return this._props.dieHeight;
  }
  get generalDataId(): string {
    return this._props.generalDataId;
  }
}

