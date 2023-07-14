import { Entity } from "../_entity";

export interface IHandling {
  id?: string;
  time: string;
  location: string;
  problem: string;
  timeHandling: string;
  handling: string;
  isHandle: boolean;
}

export class Handling extends Entity<IHandling> {
  static create(props: IHandling): Handling {
    return new Handling(props);
  }

  unmarshall() {
    return {
      id: this.id,
      time: this.time,
      location: this.location,
      problem: this.problem,
      timeHandling: this.timeHandling,
      handling: this.handling,
      isHandle: this.isHandle,
    };
  }
  get time(): string {
    return this._props.time;
  }
  get location(): string {
    return this._props.location;
  }
  get problem(): string {
    return this._props.problem;
  }
  get timeHandling(): string {
    return this._props.timeHandling;
  }
  get handling(): string {
    return this._props.handling;
  }
  get isHandle(): boolean {
    return this._props.isHandle;
  }
}
