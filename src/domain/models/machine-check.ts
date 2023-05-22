import { extend } from "dayjs";
import { Entity } from "./_entity";

export class IMachineCheck {
  id?: string;
  slideDiam: number;
  slideBergerak: number;
  noMainMotor: number;
  running: string;
  clearence: string;
  actual: string;
  result: string;
  adjustUp: string;
  adjustDown: string;
  tmb: string;
  test1: string;
  test2: string;
  test3: string;
  test4: string;
  test5: string;
  test6: string;
  test7: string;
  test8: string;
  test9: string;
  test10: string;
}

export class MachineCheck extends Entity<IMachineCheck> {
  static create(props: IMachineCheck): MachineCheck {
    return new MachineCheck(props);
  }
  unmarshall() {
    return {
      id: this.id,
      slideDiam: this.slideDiam,
      slideBergerak: this.slideBergerak,
      noMainMotor: this.noMainMotor,
      running: this.running,
      clearence: this.clearence,
      actual: this.actual,
      result: this.result,
      adjustUp: this.adjustUp,
      adjustDown: this.adjustDown,
      tmb: this.tmb,
      test1: this.test1,
      test2: this.test2,
      test3: this.test3,
      test4: this.test4,
      test5: this.test5,
      test6: this.test6,
      test7: this.test7,
      test8: this.test8,
      test9: this.test9,
      test10: this.test10,
    };
  }

  get slideDiam(): number {
    return this._props.slideDiam;
  }
  get slideBergerak(): number {
    return this._props.slideBergerak;
  }
  get noMainMotor(): number {
    return this._props.noMainMotor;
  }
  get running(): string {
    return this._props.running;
  }
  get clearence(): string {
    return this._props.clearence;
  }
  get actual(): string {
    return this._props.actual;
  }
  get result(): string {
    return this._props.result;
  }
  get adjustUp(): string {
    return this._props.adjustUp;
  }
  get adjustDown(): string {
    return this._props.adjustDown;
  }
  get tmb(): string {
    return this._props.tmb;
  }
  get test1(): string {
    return this._props.test1;
  }
  get test2(): string {
    return this._props.test2;
  }
  get test3(): string {
    return this._props.test3;
  }
  get test4(): string {
    return this._props.test4;
  }
  get test5(): string {
    return this._props.test5;
  }
  get test6(): string {
    return this._props.test6;
  }
  get test7(): string {
    return this._props.test7;
  }
  get test8(): string {
    return this._props.test8;
  }
  get test9(): string {
    return this._props.test9;
  }
  get test10(): string {
    return this._props.test10;
  }
}

