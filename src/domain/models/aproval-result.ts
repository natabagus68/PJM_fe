import { Entity } from "./_entity";

export interface IAprovalResult {
  id?: string;
  machineType: string;
  serial: string;
  MFGDate: string;
  capasity: string;
  st: string;
  stPerminutes: string;
  dHeightt: string;
  adjustment: string;
  bloasterX: string;
  bloasterY: string;
  areaSlideX: string;
  areaSlideY: string;
}

export class AprovalResult extends Entity<IAprovalResult> {
  static create(props: IAprovalResult): AprovalResult {
    return new AprovalResult(props);
  }

  unmarshall() {
    return {
      machineType: this.machineType,
      serial: this.serial,
      MFGDate: this.MFGDate,
      capasity: this.capasity,
      st: this.st,
      stPerminutes: this.stPerminutes,
      dHeightt: this.dHeightt,
      adjustment: this.adjustment,
      bloasterX: this.bloasterX,
      bloasterY: this.bloasterY,
      areaSlideX: this.areaSlideX,
      areaSlideY: this.areaSlideY,
    };
  }

  get machineType(): string {
    return this._props.machineType;
  }
  get serial(): string {
    return this._props.serial;
  }
  get MFGDate(): string {
    return this._props.MFGDate;
  }
  get capasity(): string {
    return this._props.capasity;
  }
  get st(): string {
    return this._props.st;
  }
  get stPerminutes(): string {
    return this._props.stPerminutes;
  }
  get dHeightt(): string {
    return this._props.dHeightt;
  }
  get adjustment(): string {
    return this._props.adjustment;
  }

  get areaSlideX(): string {
    return this._props.areaSlideX;
  }
  get bloasterX(): string {
    return this._props.bloasterX;
  }
  get bloasterY(): string {
    return this._props.bloasterY;
  }
  get areaSlideY(): string {
    return this._props.areaSlideY;
  }
}

