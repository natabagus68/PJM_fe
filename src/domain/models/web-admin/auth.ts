import { IUserAdmin, UserAdmin } from "./user";
import { Entity } from "../_entity";

export interface IAuthProps {
  token: string;
  user: IUserAdmin;
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
  get user(): UserAdmin {
    return UserAdmin.create(this._props.user);
  }
}
