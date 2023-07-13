import { IUser, User } from "./user";
import { Entity } from "../_entity";

export interface IAuthProps {
  token: string;
  user: IUser;
}
export interface IAuth {
  unmarshall(): IAuthProps;
}
export class Auth extends Entity<IAuthProps> implements IAuth {
  unmarshall(): IAuthProps {
    return {
      token: this.token,
      user: this.user.unmarshall(),
    };
  }
  static create(props: IAuthProps): Auth {
    return new Auth(props);
  }
  get token(): string {
    return this._props.token;
  }
  get user(): User {
    return User.create(this._props.user);
  }
}
