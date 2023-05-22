import { Entity } from "./_entity";

export interface IResumeCheck {
  id?: string;
  notes: string;
  recommendation: string;
}

export class ResumeCheck extends Entity<IResumeCheck> {
  static create(props: IResumeCheck): ResumeCheck {
    return new ResumeCheck(props);
  }

  unmarshall() {
    return {
      id: this.id,
      notes: this.notes,
      recommendation: this.recommendation,
    };
  }

  get notes(): string {
    return this._props.notes;
  }
  get recommendation(): string {
    return this._props.recommendation;
  }
}

