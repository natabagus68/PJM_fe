import { Entity } from "../_entity";
import { ILine } from "./line";
import { IShift } from "./shift";

export interface IUser {
  id?: string;
  email: string;
  password?: string;
  lineId?: ILine["id"] | ILine["name"];
  shift?: IShift["name"];
  role?: string;
  fullName?: string;
}

export class User extends Entity<IUser> {
  static create(props: IUser): User {
    return new User(props);
  }

  unmarshall() {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      lineId: this.lineId,
      shift: this.shift,
      role: this.role,
      fullName: this.fullName,
    };
  }

  get email(): string {
    return this._props.email;
  }
  get password(): string {
    return this._props.password;
  }
  get lineId(): ILine["id"] | ILine["name"] {
    return this._props.lineId;
  }
  get shift(): IShift["name"] {
    return this._props.shift;
  }
  get role(): string | undefined {
    return this._props.role;
  }
  get fullName(): string | undefined {
    return this._props.fullName;
  }
}
